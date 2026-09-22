// --- 🌟 COZY GREETING ENGINE ---
const hour = new Date().getHours();
const greetingEl = document.getElementById('greeting');
const graphicEl = document.getElementById('time-graphic');

if (hour < 12) {
    greetingEl.textContent = '좋은 아침이에요'; 
    graphicEl.textContent = '☕️🪴'; 
} else if (hour < 18) {
    greetingEl.textContent = '좋은 오후예요'; 
    graphicEl.textContent = '☀️☁️'; 
} else {
    greetingEl.textContent = '좋은 저녁이에요'; 
    graphicEl.textContent = '🌙🧸'; 
}

// --- AUDIO & VOICE ENGINE ---
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;
const synth = window.speechSynthesis;
let koreanVoice = null;

function loadVoices() {
    const voices = synth.getVoices();
    koreanVoice = voices.find(voice => voice.lang === 'ko-KR' || voice.lang === 'ko_KR') || null;
}
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
}

function initAudio() {
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();
}

function speakWord(text) {
    if (synth.speaking) synth.cancel(); 
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.85; 
    if (koreanVoice) utterance.voice = koreanVoice;
    synth.speak(utterance);
}

function playTone(freq, type, duration, vol) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type; osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + duration);
}

// 🌟 THE MOMENTUM AUDIO ENGINE
const playClick = () => playTone(800, 'sine', 0.05, 0.1); 
const playThud = () => playTone(150, 'triangle', 0.15, 0.3); 
const playFinish = () => { playTone(523.25, 'sine', 0.8, 0.2); playTone(659.25, 'sine', 0.8, 0.2); playTone(783.99, 'sine', 0.8, 0.2); }; 
const playPerfect = () => {
    const notes = [523.25, 659.25, 783.99, 1046.50]; 
    notes.forEach((freq, i) => { setTimeout(() => playTone(freq, 'sine', 0.3, 0.2), i * 120); });
    setTimeout(() => { playTone(523.25, 'sine', 0.8, 0.2); playTone(659.25, 'sine', 0.8, 0.2); playTone(1046.50, 'sine', 0.8, 0.2); }, 480);
};

// Dynamic combo pitch shifting
const playSuccess = (comboMultiplier = 0) => {
    // Math to shift the pitch up by whole steps for every fast consecutive answer
    const pitchShift = Math.pow(1.122462, Math.min(comboMultiplier, 10)); 
    playTone(880 * pitchShift, 'sine', 0.1, 0.2); 
    // The delay between the two chime notes gets faster as you build momentum
    const chimeDelay = Math.max(40, 100 - (comboMultiplier * 10));
    setTimeout(() => playTone(1318.5 * pitchShift, 'sine', 0.3, 0.3), chimeDelay);
};

// --- GAME STATE ---
let activeFolderId = "";
let activeFolderType = "";
let activeBatchKey = "";
let selectedTenseIndex = 0; 
let quizDeck = [];
let currentIndex = 0;
let score = 0;
let combo = 0; // The momentum tracker
let timerDuration = 3000;
let timerTimeout;
let questionStartTime = 0; // Tracks response speed
let isTransitioning = false;

const screens = {
    home: document.getElementById('screen-home'),
    batches: document.getElementById('screen-batches'),
    speed: document.getElementById('screen-speed'),
    quiz: document.getElementById('screen-quiz'),
    result: document.getElementById('screen-result')
};

// --- INITIALIZE UI ---
function initFolders() {
    const grid = document.getElementById('folder-grid');
    grid.innerHTML = window.appData.folders.map(folder => {
        const batchCount = window.appData[folder.id] ? Object.keys(window.appData[folder.id]).length : 0;
        return `
        <div class="folder-card" data-folder="${folder.id}" data-type="${folder.type}" data-title="${folder.title}">
            <input type="checkbox" switch class="haptic-hack">
            <div class="folder-icon" style="background: ${folder.color};">${folder.icon}</div>
            <div>
                <div class="folder-title">${folder.title}</div>
                <div class="folder-meta">${batchCount} Sets</div>
            </div>
        </div>`;
    }).join('');

    document.querySelectorAll('.folder-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() === 'input') return;
            initAudio();
            activeFolderId = e.currentTarget.dataset.folder;
            activeFolderType = e.currentTarget.dataset.type;
            document.getElementById('folder-title').textContent = e.currentTarget.dataset.title;
            loadBatches();
            switchScreen('home', 'batches');
        });
    });
}

document.querySelectorAll('.segment input').forEach(input => {
    input.addEventListener('change', (e) => {
        playClick();
        selectedTenseIndex = parseInt(e.target.value);
        const segment = e.target.closest('.segment');
        document.querySelector('.segmented-control').dataset.active = segment.dataset.idx;
        document.querySelectorAll('.segment').forEach(seg => seg.classList.remove('active'));
        segment.classList.add('active');
    });
});

function loadBatches() {
    const tenseContainer = document.getElementById('tense-toggle-container');
    selectedTenseIndex = 0;
    document.querySelector('.segmented-control').dataset.active = "0";
    document.querySelectorAll('.segment').forEach((seg, i) => {
        seg.classList.toggle('active', i === 0);
        if (i === 0) seg.querySelector('input').checked = true;
    });

    if (activeFolderType === 'verb') tenseContainer.style.display = 'block';
    else tenseContainer.style.display = 'none';

    const list = document.getElementById('batch-list');
    const batches = window.appData[activeFolderId] || {};
    
    list.innerHTML = Object.keys(batches).map((key, index, arr) => `
        <label class="list-item batch-btn" data-batch="${key}">
            <input type="checkbox" switch class="haptic-hack">
            <div class="item-content ${index === arr.length - 1 ? 'no-border' : ''}">
                <div class="item-info">
                    <span class="item-title">${key}</span>
                    <span class="item-meta">${batches[key].length} Words</span>
                </div>
            </div>
        </label>
    `).join('');

    document.querySelectorAll('.batch-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() === 'input') return;
            activeBatchKey = e.currentTarget.dataset.batch;
            switchScreen('batches', 'speed');
        });
    });
}

initFolders();

// --- NAVIGATION LOGIC ---
function switchScreen(from, to) {
    if (isTransitioning) return;
    isTransitioning = true;
    playClick();
    
    screens[from].style.opacity = '0';
    screens[from].style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        screens[from].classList.remove('active');
        screens[from].classList.add('hidden');
        screens[from].style.opacity = ''; screens[from].style.transform = '';
        screens[to].classList.remove('hidden');
        
        if(from === 'result') document.getElementById('result-word-list').innerHTML = '';
        
        setTimeout(() => { screens[to].classList.add('active'); isTransitioning = false; }, 20);
    }, 350); 
}

document.getElementById('btn-back-folders').addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'input') return; switchScreen('batches', 'home');
});
document.getElementById('btn-back-batches').addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'input') return; switchScreen('speed', 'batches');
});

// Quit Quiz Button
document.getElementById('btn-quit-quiz').addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'input') return;
    clearTimeout(timerTimeout);
    if (synth.speaking) synth.cancel();
    switchScreen('quiz', 'home');
});

document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() === 'input') return;
        const silentSpeech = new SpeechSynthesisUtterance('');
        synth.speak(silentSpeech);
        timerDuration = parseInt(e.currentTarget.dataset.speed);
        buildQuizDeck(); 
        switchScreen('speed', 'quiz'); 
        setTimeout(loadCard, 400);
    });
});

document.getElementById('btn-retry').addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'input') return;
    buildQuizDeck(); switchScreen('result', 'quiz'); setTimeout(loadCard, 400);
});
document.getElementById('btn-home').addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'input') return; switchScreen('result', 'home');
});

document.getElementById('btn-replay-audio').addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'input') return;
    speakWord(quizDeck[currentIndex].kr);
});

// --- QUIZ ENGINE ---
function buildQuizDeck() {
    const rawData = window.appData[activeFolderId][activeBatchKey];
    quizDeck = [];
    
    if (activeFolderType === 'verb') {
        const tenseSuffix = { 0: '', 2: '(present)', 3: '(past)', 4: '(future)' }[selectedTenseIndex];
        const formatEn = (word) => tenseSuffix ? `to ${word} ${tenseSuffix}` : `to ${word}`;
        rawData.forEach(item => {
            const answerEn = formatEn(item[1]);
            const distractorEn = [item[5], item[6], item[7]].map(d => formatEn(d));
            quizDeck.push({ kr: item[selectedTenseIndex], en: answerEn, options: [answerEn, ...distractorEn].sort(() => Math.random() - 0.5), passed: false });
        });
    } else {
        rawData.forEach(item => {
            const answerEn = item[1];
            quizDeck.push({ kr: item[0], en: answerEn, options: [answerEn, ...[item[2], item[3], item[4]]].sort(() => Math.random() - 0.5), passed: false });
        });
    }
    quizDeck.sort(() => Math.random() - 0.5);
    currentIndex = 0; score = 0; combo = 0; // Reset momentum
}

function loadCard() {
    if (currentIndex >= quizDeck.length) return endGame();

    const currentWord = quizDeck[currentIndex];
    document.getElementById('progress-text').textContent = `${currentIndex + 1}/${quizDeck.length}`;
    
    const wordDisplay = document.getElementById('korean-word');
    wordDisplay.textContent = currentWord.kr;
    wordDisplay.style.opacity = 0; wordDisplay.style.transform = 'scale(0.9)';
    
    speakWord(currentWord.kr);
    
    setTimeout(() => { 
        wordDisplay.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'; 
        wordDisplay.style.opacity = 1; wordDisplay.style.transform = 'scale(1)'; 
    }, 50);

    const optionsGrid = document.getElementById('options-grid');
    optionsGrid.innerHTML = '';

    currentWord.options.forEach(opt => {
        const btn = document.createElement('label');
        btn.className = 'option-btn';
        btn.innerHTML = `<input type="checkbox" switch class="haptic-hack"><span>${opt}</span>`;
        btn.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() === 'input') return; 
            e.preventDefault(); handleAnswer(btn, opt === currentWord.en, currentWord.en);
        }, { once: true });
        optionsGrid.appendChild(btn);
    });
    startTimer();
}

function handleAnswer(btn, isCorrect, correctAnswerEn) {
    clearTimeout(timerTimeout);
    document.getElementById('timer-fill').style.transition = 'none'; 
    Array.from(document.getElementById('options-grid').children).forEach(b => b.style.pointerEvents = 'none');

    // Momentum Logic Calculation
    const timeElapsed = Date.now() - questionStartTime;
    const isFast = timeElapsed < (timerDuration * 0.55); // Answered before 55% of time drained

    if (isCorrect) {
        if (isFast) {
            combo++; // Gain momentum!
        } else {
            combo = 0; // Punish slow answers by dropping momentum
        }
        
        playSuccess(combo); 
        btn.classList.add('correct'); score++;
        quizDeck[currentIndex].passed = true; 
        
        // Add a subtle screen pulse for high momentum
        if (combo >= 3) {
            const card = document.getElementById('card-display');
            card.style.transform = `scale(${1 + (combo * 0.015)})`;
            setTimeout(() => card.style.transform = 'scale(1)', 150);
        }

    } else {
        combo = 0; // Momentum completely shatters
        playThud(); if (btn) btn.classList.add('wrong');
        quizDeck[currentIndex].passed = false; 
        Array.from(document.getElementById('options-grid').children).forEach(b => {
            if (b.textContent === correctAnswerEn) b.classList.add('reveal');
        });
    }
    currentIndex++;
    setTimeout(() => { document.getElementById('korean-word').style.opacity = 0; loadCard(); }, 600); 
}

function startTimer() {
    const timerFill = document.getElementById('timer-fill');
    timerFill.style.transition = 'none'; timerFill.style.width = '100%';
    setTimeout(() => { 
        timerFill.style.transition = `width ${timerDuration}ms linear`; 
        timerFill.style.width = '0%'; 
        questionStartTime = Date.now(); // Start tracking speed
    }, 50);
    timerTimeout = setTimeout(() => { handleAnswer(null, false, quizDeck[currentIndex].en); }, timerDuration);
}

function endGame() {
    const scoreDisplay = document.getElementById('score-display');
    const trophy = document.getElementById('result-trophy');
    const subheading = document.getElementById('result-subheading');
    
    scoreDisplay.textContent = `${score}/${quizDeck.length}`;
    scoreDisplay.classList.remove('perfect-glow'); 

    if (score === quizDeck.length) {
        setTimeout(playPerfect, 300);
        trophy.textContent = '🌟👑🌟';
        subheading.textContent = '완벽해요! PERFECT!';
        scoreDisplay.classList.add('perfect-glow');
    } else if (score >= quizDeck.length * 0.7) {
        setTimeout(playFinish, 300);
        trophy.textContent = '✨🌸✨';
        subheading.textContent = '잘했어요! GOOD JOB!';
        scoreDisplay.style.color = 'var(--green)';
    } else {
        setTimeout(playFinish, 300);
        trophy.textContent = '🌱🪴🌱';
        subheading.textContent = '화이팅! KEEP GROWING!';
        scoreDisplay.style.color = 'var(--red)';
    }

    const resultList = document.getElementById('result-word-list');
    resultList.innerHTML = quizDeck.map((word, index) => `
        <div class="list-item result-word-item" style="--i: ${index}; background-color: transparent; padding-left: 0.5rem;">
            <div class="item-icon" style="background: ${word.passed ? '#D1FAE5' : '#FFE4E6'}; font-size: 1.1rem; width: 32px; height: 32px;">
                ${word.passed ? '🌸' : '🌱'}
            </div>
            <div class="item-content ${index === quizDeck.length - 1 ? 'no-border' : ''}">
                <div class="item-info">
                    <span class="item-title" style="color: ${word.passed ? 'var(--text-main)' : 'var(--text-muted)'}; ${word.passed ? '' : 'text-decoration: line-through; opacity: 0.7;'}">${word.kr}</span>
                    <span class="item-meta">${word.en}</span>
                </div>
            </div>
        </div>
    `).join('');

    switchScreen('quiz', 'result');
}