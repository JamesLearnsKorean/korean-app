window.appData = {
    // 📁 THE FOLDER DIRECTORY
    folders: [
        { id: "verbs", title: "Verbs", icon: "🏃🏻‍♀️", color: "#FFD1DC", type: "verb" },
        { id: "adjectives", title: "Adjectives", icon: "✨", color: "#BFDBFE", type: "standard" },
        { id: "emotions", title: "Emotions", icon: "🤍", color: "#FBCFE8", type: "standard" },
        { id: "time", title: "Time & Days", icon: "⏰", color: "#F3E8FF", type: "standard" },
        { id: "family", title: "Family", icon: "🧸", color: "#FFE4B5", type: "standard" },
        { id: "body", title: "Body Parts", icon: "👂", color: "#FEF08A", type: "standard" },
        { id: "clothing", title: "Clothing", icon: "👟", color: "#E9D5FF", type: "standard" },
        { id: "animals", title: "Animals", icon: "🦊", color: "#FED7AA", type: "standard" },
        { id: "colors", title: "Colors", icon: "🎨", color: "#DDD6FE", type: "standard" },
        { id: "house", title: "House", icon: "🏠", color: "#BBF7D0", type: "standard" },
        { id: "food", title: "Food", icon: "🍡", color: "#E8F5E9", type: "standard" },
        { id: "places", title: "Places", icon: "🌸", color: "#E0F7FA", type: "standard" },
        { id: "transport", title: "Transport", icon: "✈️", color: "#93C5FD", type: "standard" },
        { id: "nature", title: "Nature", icon: "🌿", color: "#D9F99D", type: "standard" },
        { id: "weather", title: "Weather", icon: "🌤️", color: "#BAE6FD", type: "standard" },
        { id: "professions", title: "Jobs", icon: "💼", color: "#FDE047", type: "standard" },
        { id: "directions", title: "Directions", icon: "🧭", color: "#FECACA", type: "standard" },
        { id: "hobbies", title: "Hobbies", icon: "🎮", color: "#C7D2FE", type: "standard" },
        { id: "technology", title: "Technology", icon: "💻", color: "#E5E7EB", type: "standard" },
        { id: "school", title: "School", icon: "🎒", color: "#FCA5A5", type: "standard" },
        { id: "shopping", title: "Shopping", icon: "🛍️", color: "#F9A8D4", type: "standard" },
        { id: "health", title: "Health", icon: "💊", color: "#99F6E4", type: "standard" }
    ],

    // 🏃🏻‍♀️ VERBS FORMAT: [Dict, BaseEn, Present, Past, Future, Distractor1, Distractor2, Distractor3]
    verbs: {
        "Verbs I (Basics)": [
            ["먹다", "eat", "먹어요", "먹었어요", "먹을 거예요", "drink", "sleep", "go"],
            ["마시다", "drink", "마셔요", "마셨어요", "마실 거예요", "eat", "buy", "see"],
            ["가다", "go", "가요", "갔어요", "갈 거예요", "come", "wait", "meet"],
            ["오다", "come", "와요", "왔어요", "올 거예요", "go", "do", "sleep"],
            ["자다", "sleep", "자요", "잤어요", "잘 거예요", "wake", "sit", "stand"],
            ["보다", "see", "봐요", "봤어요", "볼 거예요", "hear", "give", "read"],
            ["주다", "give", "줘요", "줬어요", "줄 거예요", "receive", "take", "do"],
            ["하다", "do", "해요", "했어요", "할 거예요", "make", "go", "eat"],
            ["사다", "buy", "사요", "샀어요", "살 거예요", "sell", "come", "find"],
            ["듣다", "hear", "들어요", "들었어요", "들을 거예요", "speak", "read", "write"]
        ],
        "Verbs II (Communication)": [
            ["읽다", "read", "읽어요", "읽었어요", "읽을 거예요", "write", "speak", "see"],
            ["쓰다", "write", "써요", "썼어요", "쓸 거예요", "read", "listen", "draw"],
            ["말하다", "speak", "말해요", "말했어요", "말할 거예요", "hear", "think", "wait"],
            ["기다리다", "wait", "기다려요", "기다렸어요", "기다릴 거예요", "go", "meet", "leave"],
            ["만나다", "meet", "만나요", "만났어요", "만날 거예요", "part", "see", "wait"],
            ["앉다", "sit", "앉아요", "앉았어요", "앉을 거예요", "stand", "walk", "run"],
            ["서다", "stand", "서요", "섰어요", "설 거예요", "sit", "lie down", "run"],
            ["걷다", "walk", "걸어요", "걸었어요", "걸을 거예요", "run", "ride", "stop"],
            ["뛰다", "run", "뛰어요", "뛰었어요", "뛸 거예요", "walk", "sit", "stand"],
            ["배우다", "learn", "배워요", "배웠어요", "배울 거예요", "teach", "study", "know"]
        ],
        "Verbs III (Daily Life)": [
            ["일하다", "work", "일해요", "일했어요", "일할 거예요", "rest", "play", "sleep"],
            ["놀다", "play", "놀아요", "놀았어요", "놀 거예요", "work", "study", "read"],
            ["쉬다", "rest", "쉬어요", "쉬었어요", "쉴 거예요", "work", "run", "play"],
            ["씻다", "wash", "씻어요", "씻었어요", "씻을 거예요", "clean", "wear", "eat"],
            ["청소하다", "clean", "청소해요", "청소했어요", "청소할 거예요", "wash", "dirty", "make"],
            ["입다", "wear", "입어요", "입었어요", "입을 거예요", "take off", "buy", "wash"],
            ["벗다", "take off", "벗어요", "벗었어요", "벗을 거예요", "wear", "put on", "clean"],
            ["웃다", "laugh", "웃어요", "웃었어요", "웃을 거예요", "cry", "smile", "angry"],
            ["울다", "cry", "울어요", "울었어요", "울 거예요", "laugh", "smile", "sad"],
            ["미소짓다", "smile", "미소지어요", "미소지었어요", "미소지을 거예요", "cry", "frown", "laugh"]
        ],
        "Verbs IV (Cognition)": [
            ["알다", "know", "알아요", "알았어요", "알 거예요", "not know", "think", "forget"],
            ["모르다", "not know", "몰라요", "몰랐어요", "모를 거예요", "know", "remember", "understand"],
            ["좋아하다", "like", "좋아해요", "좋아했어요", "좋아할 거예요", "dislike", "love", "hate"],
            ["싫어하다", "dislike", "싫어해요", "싫어했어요", "싫어할 거예요", "like", "love", "want"],
            ["사랑하다", "love", "사랑해요", "사랑했어요", "사랑할 거예요", "hate", "like", "dislike"],
            ["미워하다", "hate", "미워해요", "미워했어요", "미워할 거예요", "love", "like", "know"],
            ["생각하다", "think", "생각해요", "생각했어요", "생각할 거예요", "know", "forget", "speak"],
            ["기억하다", "remember", "기억해요", "기억했어요", "기억할 거예요", "forget", "know", "think"],
            ["잊다", "forget", "잊어요", "잊었어요", "잊을 거예요", "remember", "know", "think"],
            ["필요하다", "need", "필요해요", "필요했어요", "필요할 거예요", "want", "have", "throw"]
        ],
        "Verbs V (Actions)": [
            ["만들다", "make", "만들어요", "만들었어요", "만들 거예요", "break", "use", "buy"],
            ["사용하다", "use", "사용해요", "사용했어요", "사용할 거예요", "make", "find", "lose"],
            ["찾다", "find", "찾아요", "찾았어요", "찾을 거예요", "lose", "hide", "seek"],
            ["잃다", "lose", "잃어요", "잃었어요", "잃을 거예요", "find", "win", "make"],
            ["열다", "open", "열어요", "열었어요", "열 거예요", "close", "lock", "break"],
            ["닫다", "close", "닫아요", "닫았어요", "닫을 거예요", "open", "pull", "push"],
            ["시작하다", "start", "시작해요", "시작했어요", "시작할 거예요", "finish", "stop", "pause"],
            ["끝나다", "finish", "끝나요", "끝났어요", "끝날 거예요", "start", "continue", "stop"],
            ["멈추다", "stop", "멈춰요", "멈췄어요", "멈출 거예요", "go", "start", "run"],
            ["바꾸다", "change", "바꿔요", "바꿨어요", "바꿀 거예요", "keep", "stay", "make"]
        ],
        "Verbs VI (Interaction)": [
            ["돕다", "help", "도와요", "도왔어요", "도울 거예요", "hinder", "leave", "watch"],
            ["부르다", "call", "불러요", "불렀어요", "부를 거예요", "answer", "ask", "listen"],
            ["묻다", "ask", "물어요", "물었어요", "물을 거예요", "answer", "tell", "teach"],
            ["대답하다", "answer", "대답해요", "대답했어요", "대답할 거예요", "ask", "question", "listen"],
            ["가르치다", "teach", "가르쳐요", "가르쳤어요", "가르칠 거예요", "learn", "study", "read"],
            ["빌리다", "borrow", "빌려요", "빌렸어요", "빌릴 거예요", "lend", "return", "steal"],
            ["빌려주다", "lend", "빌려줘요", "빌려줬어요", "빌려줄 거예요", "borrow", "take", "give"],
            ["보내다", "send", "보내요", "보냈어요", "보낼 거예요", "receive", "take", "keep"],
            ["받다", "receive", "받아요", "받았어요", "받을 거예요", "send", "give", "lose"],
            ["가져오다", "bring", "가져와요", "가져왔어요", "가져올 거예요", "take", "send", "leave"]
        ],
        "Verbs VII (Existence)": [
            ["살다", "live", "살아요", "살았어요", "살 거예요", "die", "exist", "leave"],
            ["죽다", "die", "죽어요", "죽었어요", "죽을 거예요", "live", "survive", "sick"],
            ["일어나다", "happen", "일어나요", "일어났어요", "일어날 거예요", "stop", "finish", "wake up"],
            ["되다", "become", "돼요", "됐어요", "될 거예요", "stay", "remain", "stop"],
            ["있다", "exist", "있어요", "있었어요", "있을 거예요", "not exist", "need", "give"],
            ["없다", "not exist", "없어요", "없었어요", "없을 거예요", "exist", "find", "keep"],
            ["이기다", "win", "이겨요", "이겼어요", "이길 거예요", "lose", "give up", "fight"],
            ["지다", "lose (game)", "져요", "졌어요", "질 거예요", "win", "play", "stop"],
            ["노력하다", "try", "노력해요", "노력했어요", "노력할 거예요", "give up", "rest", "stop"],
            ["결정하다", "decide", "결정해요", "결정했어요", "결정할 거예요", "hesitate", "think", "wait"]
        ],
        "Verbs VIII (Future Planning)": [
            ["약속하다", "promise", "약속해요", "약속했어요", "약속할 거예요", "break", "lie", "forget"],
            ["계획하다", "plan", "계획해요", "계획했어요", "계획할 거예요", "execute", "cancel", "do"],
            ["준비하다", "prepare", "준비해요", "준비했어요", "준비할 거예요", "finish", "start", "leave"],
            ["연습하다", "practice", "연습해요", "연습했어요", "연습할 거예요", "play", "perform", "rest"],
            ["걱정하다", "worry", "걱정해요", "걱정했어요", "걱정할 거예요", "relax", "smile", "sleep"],
            ["기대하다", "expect", "기대해요", "기대했어요", "기대할 거예요", "disappoint", "worry", "forget"],
            ["이해하다", "understand", "이해해요", "이해했어요", "이해할 거예요", "misunderstand", "know", "study"],
            ["설명하다", "explain", "설명해요", "설명했어요", "설명할 거예요", "listen", "ask", "hide"],
            ["결혼하다", "marry", "결혼해요", "결혼했어요", "결혼할 거예요", "divorce", "date", "meet"],
            ["헤어지다", "break up", "헤어져요", "헤어졌어요", "헤어질 거예요", "meet", "marry", "love"]
        ],
        "Verbs IX (Transport)": [
            ["타다", "ride", "타요", "탔어요", "탈 거예요", "get off", "walk", "drive"],
            ["내리다", "get off", "내려요", "내렸어요", "내릴 거예요", "ride", "climb", "wait"],
            ["운전하다", "drive", "운전해요", "운전했어요", "운전할 거예요", "walk", "ride", "stop"],
            ["여행하다", "travel", "여행해요", "여행했어요", "여행할 거예요", "stay", "live", "return"],
            ["도착하다", "arrive", "도착해요", "도착했어요", "도착할 거예요", "depart", "travel", "wait"],
            ["출발하다", "depart", "출발해요", "출발했어요", "출발할 거예요", "arrive", "stop", "stay"],
            ["날다", "fly", "날아요", "날았어요", "날 거예요", "fall", "run", "swim"],
            ["건너다", "cross", "건너요", "건넜어요", "건널 거예요", "stop", "turn", "wait"],
            ["지나다", "pass", "지나요", "지났어요", "지날 거예요", "stop", "stay", "arrive"],
            ["따르다", "follow", "따라요", "따랐어요", "따를 거예요", "lead", "ignore", "run"]
        ],
        "Verbs X (Cooking)": [
            ["끓이다", "boil", "끓여요", "끓였어요", "끓일 거예요", "fry", "freeze", "bake"],
            ["튀기다", "fry", "튀겨요", "튀겼어요", "튀길 거예요", "boil", "steam", "mix"],
            ["젓다", "stir", "저어요", "저었어요", "저을 거예요", "pour", "cut", "drink"],
            ["붓다", "pour", "부어요", "부었어요", "부을 거예요", "spill", "drink", "stir"],
            ["자르다", "cut", "잘라요", "잘랐어요", "자를 거예요", "mix", "cook", "eat"],
            ["섞다", "mix", "섞어요", "섞었어요", "섞을 거예요", "separate", "cut", "pour"],
            ["굽다", "bake/roast", "구워요", "구웠어요", "구울 거예요", "boil", "fry", "eat"],
            ["맛보다", "taste", "맛봐요", "맛봤어요", "맛볼 거예요", "smell", "touch", "look"],
            ["냄새맡다", "smell", "냄새맡아요", "냄새맡았어요", "냄새맡을 거예요", "taste", "breathe", "see"],
            ["만지다", "touch", "만져요", "만졌어요", "만질 거예요", "look", "taste", "hold"]
        ],
        "Verbs XI (Movement & Action)": [
            ["던지다", "throw", "던져요", "던졌어요", "던질 거예요", "catch", "push", "pull"],
            ["잡다", "catch/grab", "잡아요", "잡았어요", "잡을 거예요", "throw", "drop", "hide"],
            ["밀다", "push", "밀어요", "밀었어요", "밀 거예요", "pull", "throw", "catch"],
            ["당기다", "pull", "당겨요", "당겼어요", "당길 거예요", "push", "drop", "hide"],
            ["떨어지다", "fall", "떨어져요", "떨어졌어요", "떨어질 거예요", "climb", "fly", "jump"],
            ["오르다", "climb/rise", "올라요", "올랐어요", "오를 거예요", "fall", "descend", "hide"],
            ["내리다", "descend/get off", "내려요", "내렸어요", "내릴 거예요", "climb", "ride", "push"],
            ["숨다", "hide", "숨어요", "숨었어요", "숨을 거예요", "find", "search", "catch"],
            ["찾다", "search/find", "찾아요", "찾았어요", "찾을 거예요", "hide", "lose", "drop"],
            ["놓다", "put/place", "놓아요", "놓았어요", "놓을 거예요", "throw", "catch", "pull"]
        ]
    },

    // ✨ STANDARD FORMAT: [Korean, English, Distractor1, Distractor2, Distractor3]
    adjectives: {
        "Adjectives I (Size & Amount)": [
            ["크다", "Big", "Small", "Fast", "Slow"],
            ["작다", "Small", "Big", "Long", "Short"],
            ["많다", "Many/Much", "Few", "Good", "Bad"],
            ["적다", "Few/Little", "Many", "Hot", "Cold"],
            ["길다", "Long", "Short", "Thick", "Thin"],
            ["짧다", "Short (Length)", "Long", "High", "Low"],
            ["높다", "High", "Low", "Deep", "Shallow"],
            ["낮다", "Low", "High", "Wide", "Narrow"],
            ["넓다", "Wide", "Narrow", "Big", "Small"],
            ["좁다", "Narrow", "Wide", "Long", "Short"]
        ],
        "Adjectives II (Quality)": [
            ["좋다", "Good", "Bad", "Pretty", "Ugly"],
            ["나쁘다", "Bad", "Good", "Expensive", "Cheap"],
            ["예쁘다", "Pretty", "Ugly", "Cute", "Scary"],
            ["잘생기다", "Handsome", "Ugly", "Cute", "Smart"],
            ["귀엽다", "Cute", "Scary", "Pretty", "Big"],
            ["무섭다", "Scary", "Cute", "Funny", "Boring"],
            ["어렵다", "Difficult", "Easy", "Heavy", "Light"],
            ["쉽다", "Easy", "Difficult", "Fun", "Boring"],
            ["재미있다", "Fun/Interesting", "Boring", "Scary", "Cute"],
            ["재미없다", "Boring", "Fun", "Difficult", "Easy"]
        ],
        "Adjectives III (State)": [
            ["비싸다", "Expensive", "Cheap", "Fast", "Slow"],
            ["싸다", "Cheap", "Expensive", "Heavy", "Light"],
            ["빠르다", "Fast", "Slow", "Hot", "Cold"],
            ["느리다", "Slow", "Fast", "Easy", "Difficult"],
            ["뜨겁다", "Hot (touch)", "Cold", "Warm", "Cool"],
            ["차갑다", "Cold (touch)", "Hot", "Warm", "Cool"],
            ["따뜻하다", "Warm", "Cold", "Hot", "Cool"],
            ["시원하다", "Cool/Refreshing", "Warm", "Hot", "Freezing"],
            ["무겁다", "Heavy", "Light", "Big", "Small"],
            ["가볍다", "Light (weight)", "Heavy", "Thick", "Thin"]
        ]
    },

    emotions: {
        "Emotions I": [
            ["행복하다", "Happy", "Sad", "Angry", "Tired"],
            ["슬프다", "Sad", "Happy", "Excited", "Nervous"],
            ["화나다", "Angry", "Happy", "Sad", "Bored"],
            ["피곤하다", "Tired", "Energetic", "Happy", "Surprised"],
            ["아프다", "Sick/Hurt", "Healthy", "Happy", "Tired"],
            ["배고프다", "Hungry", "Full", "Thirsty", "Tired"],
            ["배부르다", "Full (stomach)", "Hungry", "Thirsty", "Sick"],
            ["목마르다", "Thirsty", "Hungry", "Full", "Sleepy"],
            ["졸리다", "Sleepy", "Awake", "Angry", "Happy"],
            ["놀라다", "Surprised", "Bored", "Angry", "Sad"]
        ],
        "Emotions II (Feelings)": [
            ["답답하다", "Frustrated", "Comfortable", "Lonely", "Shy"],
            ["부끄럽다", "Shy/Embarrassed", "Proud", "Angry", "Bored"],
            ["외롭다", "Lonely", "Happy", "Crowded", "Excited"],
            ["우울하다", "Depressed", "Joyful", "Anxious", "Calm"],
            ["불안하다", "Anxious", "Relaxed", "Confident", "Tired"],
            ["편안하다", "Comfortable", "Frustrated", "Scared", "Sad"],
            ["놀랍다", "Surprising", "Boring", "Expected", "Annoying"],
            ["아쉽다", "Regretful/A pity", "Satisfied", "Proud", "Happy"],
            ["지루하다", "Bored", "Entertained", "Busy", "Surprised"],
            ["흥미롭다", "Interesting", "Boring", "Scary", "Annoying"]
        ],
        "Emotions III (Reactions)": [
            ["당황하다", "Flustered", "Calm", "Prepared", "Happy"],
            ["만족하다", "Satisfied", "Disappointed", "Angry", "Greedy"],
            ["실망하다", "Disappointed", "Satisfied", "Proud", "Excited"],
            ["부럽다", "Envious/Jealous", "Pity", "Proud", "Sorry"],
            ["귀찮다", "Bothersome", "Fun", "Easy", "Helpful"],
            ["짜증나다", "Irritated", "Happy", "Calm", "Peaceful"],
            ["두렵다", "Afraid", "Brave", "Comfortable", "Angry"],
            ["억울하다", "Unfairly treated", "Guilty", "Satisfied", "Proud"],
            ["자랑스럽다", "Proud", "Embarrassed", "Shy", "Sorry"],
            ["섭섭하다", "Disappointed/Sad", "Joyful", "Relieved", "Angry"]
        ]
    },

    time: {
        "Days of Week": [
            ["월요일", "Monday", "Tuesday", "Sunday", "Friday"],
            ["화요일", "Tuesday", "Wednesday", "Thursday", "Saturday"],
            ["수요일", "Wednesday", "Thursday", "Monday", "Sunday"],
            ["목요일", "Thursday", "Friday", "Tuesday", "Wednesday"],
            ["금요일", "Friday", "Saturday", "Monday", "Thursday"],
            ["토요일", "Saturday", "Sunday", "Friday", "Tuesday"],
            ["일요일", "Sunday", "Monday", "Saturday", "Wednesday"],
            ["주말", "Weekend", "Weekday", "Holiday", "Morning"],
            ["평일", "Weekday", "Weekend", "Evening", "Night"],
            ["매일", "Everyday", "Today", "Tomorrow", "Yesterday"]
        ],
        "Time Words": [
            ["오늘", "Today", "Tomorrow", "Yesterday", "Now"],
            ["내일", "Tomorrow", "Today", "Yesterday", "Later"],
            ["어제", "Yesterday", "Today", "Tomorrow", "Past"],
            ["지금", "Now", "Later", "Before", "Today"],
            ["나중에", "Later", "Now", "Before", "Tomorrow"],
            ["아침", "Morning", "Afternoon", "Evening", "Night"],
            ["점심", "Afternoon/Lunch", "Morning", "Evening", "Night"],
            ["저녁", "Evening/Dinner", "Morning", "Night", "Afternoon"],
            ["밤", "Night", "Morning", "Day", "Afternoon"],
            ["새벽", "Dawn", "Night", "Morning", "Evening"]
        ]
    },

    family: {
        "Family I (Core)": [
            ["어머니", "Mother", "Father", "Brother", "Friend"],
            ["아버지", "Father", "Mother", "Sister", "Teacher"],
            ["형", "Older Brother (m)", "Younger Brother", "Sister", "Father"],
            ["누나", "Older Sister (m)", "Mother", "Brother", "Aunt"],
            ["동생", "Younger Sibling", "Older Brother", "Parents", "Friend"],
            ["오빠", "Older Brother (f)", "Uncle", "Grandfather", "Friend"],
            ["언니", "Older Sister (f)", "Mother", "Cousin", "Aunt"],
            ["할머니", "Grandmother", "Grandfather", "Mother", "Aunt"],
            ["할아버지", "Grandfather", "Grandmother", "Father", "Uncle"],
            ["가족", "Family", "Friends", "School", "Home"]
        ],
        "Family II (Extended)": [
            ["아내", "Wife", "Husband", "Daughter", "Aunt"],
            ["남편", "Husband", "Wife", "Son", "Uncle"],
            ["딸", "Daughter", "Son", "Niece", "Mother"],
            ["아들", "Son", "Daughter", "Nephew", "Father"],
            ["이모", "Aunt (Mother's side)", "Uncle", "Grandmother", "Sister"],
            ["삼촌", "Uncle", "Aunt", "Grandfather", "Brother"],
            ["사촌", "Cousin", "Sibling", "Friend", "Nephew"],
            ["조카", "Nephew/Niece", "Son", "Cousin", "Grandchild"],
            ["부모님", "Parents", "Grandparents", "Children", "Family"],
            ["친척", "Relatives", "Friends", "Neighbors", "Colleagues"]
        ]
    },

    body: {
        "Face & Head": [
            ["머리", "Head/Hair", "Eye", "Nose", "Mouth"],
            ["눈", "Eye", "Nose", "Ear", "Mouth"],
            ["코", "Nose", "Eye", "Ear", "Mouth"],
            ["입", "Mouth", "Nose", "Eye", "Ear"],
            ["귀", "Ear", "Eye", "Nose", "Mouth"],
            ["얼굴", "Face", "Head", "Neck", "Body"],
            ["이", "Tooth", "Tongue", "Lip", "Eye"],
            ["입술", "Lip", "Tooth", "Nose", "Ear"],
            ["혀", "Tongue", "Tooth", "Lip", "Mouth"],
            ["목", "Neck/Throat", "Head", "Shoulder", "Chest"]
        ],
        "Upper Body": [
            ["어깨", "Shoulder", "Arm", "Hand", "Neck"],
            ["팔", "Arm", "Leg", "Hand", "Foot"],
            ["손", "Hand", "Foot", "Arm", "Leg"],
            ["손가락", "Finger", "Toe", "Hand", "Arm"],
            ["가슴", "Chest", "Back", "Stomach", "Shoulder"],
            ["배", "Stomach", "Chest", "Back", "Leg"],
            ["등", "Back", "Chest", "Stomach", "Shoulder"],
            ["다리", "Leg", "Arm", "Foot", "Hand"],
            ["발", "Foot", "Hand", "Leg", "Arm"],
            ["발가락", "Toe", "Finger", "Foot", "Leg"]
        ]
    },

    clothing: {
        "Clothing I": [
            ["옷", "Clothes", "Shoes", "Hat", "Bag"],
            ["바지", "Pants", "Skirt", "Shirt", "Dress"],
            ["치마", "Skirt", "Pants", "Socks", "Coat"],
            ["셔츠", "Shirt", "Pants", "Hat", "Shoes"],
            ["원피스", "Dress", "Skirt", "Shirt", "Pants"],
            ["코트", "Coat", "T-shirt", "Socks", "Shoes"],
            ["신발", "Shoes", "Socks", "Hat", "Gloves"],
            ["양말", "Socks", "Shoes", "Hat", "Pants"],
            ["모자", "Hat", "Shoes", "Bag", "Gloves"],
            ["가방", "Bag", "Hat", "Shoes", "Clothes"]
        ],
        "Clothing II (Accessories)": [
            ["안경", "Glasses", "Watch", "Ring", "Hat"],
            ["시계", "Watch", "Glasses", "Necklace", "Belt"],
            ["목걸이", "Necklace", "Ring", "Earrings", "Watch"],
            ["반지", "Ring", "Necklace", "Earrings", "Glasses"],
            ["귀걸이", "Earrings", "Ring", "Necklace", "Watch"],
            ["장갑", "Gloves", "Scarf", "Socks", "Hat"],
            ["목도리", "Scarf", "Gloves", "Tie", "Belt"],
            ["벨트", "Belt", "Tie", "Watch", "Ring"],
            ["지갑", "Wallet", "Bag", "Pocket", "Phone"],
            ["우산", "Umbrella", "Bag", "Wallet", "Hat"]
        ]
    },

    animals: {
        "Pets & Farm": [
            ["개 / 강아지", "Dog/Puppy", "Cat", "Pig", "Cow"],
            ["고양이", "Cat", "Dog", "Mouse", "Rabbit"],
            ["새", "Bird", "Fish", "Mouse", "Cat"],
            ["물고기", "Fish", "Bird", "Turtle", "Frog"],
            ["돼지", "Pig", "Cow", "Horse", "Sheep"],
            ["소", "Cow", "Pig", "Horse", "Sheep"],
            ["말", "Horse", "Cow", "Pig", "Sheep"],
            ["쥐", "Mouse", "Cat", "Dog", "Rabbit"],
            ["토끼", "Rabbit", "Mouse", "Cat", "Fox"],
            ["오리", "Duck", "Chicken", "Bird", "Fish"]
        ],
        "Wild Animals": [
            ["여우", "Fox", "Wolf", "Bear", "Dog"],
            ["늑대", "Wolf", "Fox", "Dog", "Bear"],
            ["곰", "Bear", "Wolf", "Fox", "Tiger"],
            ["호랑이", "Tiger", "Lion", "Bear", "Cat"],
            ["사자", "Lion", "Tiger", "Bear", "Wolf"],
            ["코끼리", "Elephant", "Giraffe", "Monkey", "Bear"],
            ["기린", "Giraffe", "Elephant", "Horse", "Zebra"],
            ["원숭이", "Monkey", "Gorilla", "Bear", "Fox"],
            ["뱀", "Snake", "Lizard", "Frog", "Fish"],
            ["개구리", "Frog", "Snake", "Fish", "Turtle"]
        ]
    },

    colors: {
        "Colors I": [
            ["빨간색", "Red", "Blue", "Green", "Yellow"],
            ["파란색", "Blue", "Red", "Green", "Yellow"],
            ["노란색", "Yellow", "Green", "Red", "Blue"],
            ["초록색", "Green", "Yellow", "Blue", "Red"],
            ["검은색", "Black", "White", "Gray", "Brown"],
            ["하얀색", "White", "Black", "Gray", "Brown"],
            ["회색", "Gray", "White", "Black", "Brown"],
            ["갈색", "Brown", "Gray", "Black", "Orange"],
            ["주황색", "Orange", "Yellow", "Red", "Pink"],
            ["분홍색", "Pink", "Red", "Purple", "Orange"]
        ]
    },

    house: {
        "Rooms & Furniture": [
            ["방", "Room", "Living Room", "Kitchen", "Bathroom"],
            ["거실", "Living Room", "Room", "Kitchen", "Bathroom"],
            ["부엌", "Kitchen", "Bathroom", "Room", "Living Room"],
            ["화장실", "Bathroom", "Kitchen", "Room", "Living Room"],
            ["침대", "Bed", "Desk", "Chair", "Sofa"],
            ["책상", "Desk", "Bed", "Chair", "Table"],
            ["의자", "Chair", "Desk", "Sofa", "Bed"],
            ["소파", "Sofa", "Chair", "Bed", "Desk"],
            ["문", "Door", "Window", "Wall", "Floor"],
            ["창문", "Window", "Door", "Wall", "Roof"]
        ],
        "House II (Bathroom & Items)": [
            ["수건", "Towel", "Soap", "Tissue", "Mirror"],
            ["비누", "Soap", "Toothpaste", "Towel", "Brush"],
            ["칫솔", "Toothbrush", "Toothpaste", "Soap", "Towel"],
            ["치약", "Toothpaste", "Toothbrush", "Soap", "Mirror"],
            ["휴지", "Tissue/Paper", "Towel", "Trash can", "Soap"],
            ["거울", "Mirror", "Window", "Door", "Picture"],
            ["이불", "Blanket", "Pillow", "Bed", "Towel"],
            ["베개", "Pillow", "Blanket", "Bed", "Cushion"],
            ["쓰레기통", "Trash can", "Box", "Bag", "Desk"],
            ["열쇠", "Key", "Wallet", "Phone", "Door"]
        ]
    },

    food: {
        "Food & Drinks": [
            ["물", "Water", "Milk", "Juice", "Tea"],
            ["밥", "Rice/Meal", "Bread", "Noodles", "Meat"],
            ["빵", "Bread", "Rice", "Cake", "Cookie"],
            ["고기", "Meat", "Fish", "Vegetable", "Fruit"],
            ["과일", "Fruit", "Vegetable", "Meat", "Bread"],
            ["야채", "Vegetable", "Fruit", "Meat", "Rice"],
            ["우유", "Milk", "Water", "Juice", "Coffee"],
            ["차", "Tea", "Coffee", "Water", "Milk"],
            ["커피", "Coffee", "Tea", "Juice", "Water"],
            ["계란", "Egg", "Meat", "Fish", "Cheese"]
        ],
        "Snacks & Tastes": [
            ["소금", "Salt", "Sugar", "Pepper", "Soy Sauce"],
            ["설탕", "Sugar", "Salt", "Honey", "Pepper"],
            ["간장", "Soy Sauce", "Salt", "Vinegar", "Oil"],
            ["기름", "Oil", "Water", "Vinegar", "Soy Sauce"],
            ["사과", "Apple", "Banana", "Grape", "Orange"],
            ["바나나", "Banana", "Apple", "Strawberry", "Melon"],
            ["딸기", "Strawberry", "Grape", "Apple", "Peach"],
            ["포도", "Grape", "Strawberry", "Banana", "Apple"],
            ["달다", "Sweet", "Salty", "Spicy", "Bitter"],
            ["맵다", "Spicy", "Sweet", "Salty", "Sour"]
        ],
        "Eating & Utensils": [
            ["아침식사", "Breakfast", "Lunch", "Dinner", "Snack"],
            ["점심식사", "Lunch", "Breakfast", "Dinner", "Snack"],
            ["저녁식사", "Dinner", "Lunch", "Breakfast", "Snack"],
            ["간식", "Snack", "Breakfast", "Lunch", "Dinner"],
            ["메뉴", "Menu", "Receipt", "Price", "Plate"],
            ["숟가락", "Spoon", "Chopsticks", "Fork", "Plate"],
            ["젓가락", "Chopsticks", "Spoon", "Fork", "Bowl"],
            ["포크", "Fork", "Spoon", "Chopsticks", "Knife"],
            ["접시", "Plate", "Bowl", "Spoon", "Cup"],
            ["컵", "Cup", "Plate", "Bowl", "Fork"]
        ]
    },

    places: {
        "City Places": [
            ["학교", "School", "Hospital", "Bank", "Park"],
            ["병원", "Hospital", "School", "Pharmacy", "Store"],
            ["은행", "Bank", "Post Office", "Police Station", "Cafe"],
            ["공원", "Park", "Mountain", "Beach", "Gym"],
            ["가게", "Store", "House", "Library", "Restaurant"],
            ["식당", "Restaurant", "Cafe", "Store", "Kitchen"],
            ["카페", "Cafe", "Restaurant", "Library", "Bar"],
            ["도서관", "Library", "School", "Bookstore", "Office"],
            ["회사", "Office/Company", "School", "Bank", "Factory"],
            ["집", "House/Home", "Hotel", "Store", "Park"]
        ]
    },

    transport: {
        "Transport I": [
            ["차 / 자동차", "Car", "Bus", "Train", "Bicycle"],
            ["버스", "Bus", "Car", "Train", "Subway"],
            ["기차", "Train", "Subway", "Bus", "Airplane"],
            ["지하철", "Subway", "Train", "Bus", "Car"],
            ["자전거", "Bicycle", "Motorcycle", "Car", "Bus"],
            ["오토바이", "Motorcycle", "Bicycle", "Car", "Train"],
            ["비행기", "Airplane", "Helicopter", "Train", "Ship"],
            ["배", "Ship/Boat", "Airplane", "Train", "Car"],
            ["역", "Station", "Airport", "Bus Stop", "Port"],
            ["공항", "Airport", "Station", "Port", "Terminal"]
        ]
    },

    nature: {
        "Nature & Outdoors": [
            ["산", "Mountain", "Sea", "River", "Forest"],
            ["바다", "Sea/Ocean", "Mountain", "River", "Lake"],
            ["강", "River", "Sea", "Lake", "Mountain"],
            ["나무", "Tree", "Flower", "Grass", "Leaf"],
            ["꽃", "Flower", "Tree", "Grass", "Leaf"],
            ["풀", "Grass", "Tree", "Flower", "Dirt"],
            ["돌", "Stone/Rock", "Dirt", "Sand", "Wood"],
            ["흙", "Dirt/Soil", "Stone", "Sand", "Water"],
            ["별", "Star", "Moon", "Sun", "Sky"],
            ["달", "Moon", "Sun", "Star", "Sky"]
        ]
    },

    weather: {
        "Weather & Seasons": [
            ["비", "Rain", "Snow", "Wind", "Cloud"],
            ["눈", "Snow", "Rain", "Wind", "Sun"],
            ["바람", "Wind", "Rain", "Snow", "Cloud"],
            ["구름", "Cloud", "Sun", "Rain", "Wind"],
            ["봄", "Spring", "Summer", "Autumn", "Winter"],
            ["여름", "Summer", "Spring", "Autumn", "Winter"],
            ["가을", "Autumn", "Summer", "Spring", "Winter"],
            ["겨울", "Winter", "Autumn", "Summer", "Spring"],
            ["날씨", "Weather", "Season", "Temperature", "Sky"],
            ["해", "Sun", "Moon", "Star", "Cloud"]
        ]
    },

    professions: {
        "Jobs I": [
            ["의사", "Doctor", "Nurse", "Teacher", "Student"],
            ["간호사", "Nurse", "Doctor", "Teacher", "Chef"],
            ["선생님", "Teacher", "Student", "Professor", "Doctor"],
            ["학생", "Student", "Teacher", "Doctor", "Police"],
            ["경찰", "Police Officer", "Firefighter", "Doctor", "Student"],
            ["소방관", "Firefighter", "Police Officer", "Doctor", "Nurse"],
            ["요리사", "Chef/Cook", "Waiter", "Doctor", "Teacher"],
            ["가수", "Singer", "Actor", "Dancer", "Teacher"],
            ["배우", "Actor", "Singer", "Director", "Writer"],
            ["회사원", "Office Worker", "Student", "Teacher", "Doctor"]
        ],
        "Jobs II": [
            ["군인", "Soldier", "Police", "Firefighter", "Doctor"],
            ["기자", "Journalist", "Writer", "Actor", "Singer"],
            ["작가", "Writer", "Journalist", "Teacher", "Artist"],
            ["화가", "Artist/Painter", "Singer", "Actor", "Writer"],
            ["비서", "Secretary", "Manager", "President", "Student"],
            ["대통령", "President", "Secretary", "Police", "Soldier"],
            ["과학자", "Scientist", "Doctor", "Teacher", "Engineer"],
            ["엔지니어", "Engineer", "Scientist", "Mechanic", "Doctor"],
            ["농부", "Farmer", "Chef", "Driver", "Soldier"],
            ["운전기사", "Driver", "Mechanic", "Farmer", "Pilot"]
        ]
    },

    directions: {
        "Directions & Space": [
            ["위", "Top/Up", "Bottom", "Front", "Back"],
            ["아래", "Bottom/Down", "Top", "Front", "Back"],
            ["앞", "Front", "Back", "Left", "Right"],
            ["뒤", "Back/Behind", "Front", "Left", "Right"],
            ["왼쪽", "Left", "Right", "Front", "Back"],
            ["오른쪽", "Right", "Left", "Front", "Back"],
            ["안", "Inside", "Outside", "Front", "Back"],
            ["밖", "Outside", "Inside", "Left", "Right"],
            ["옆", "Beside/Next to", "Front", "Back", "Inside"],
            ["사이", "Between", "Next to", "Inside", "Outside"]
        ]
    },

    hobbies: {
        "Hobbies & Free Time": [
            ["음악", "Music", "Art", "Movie", "Book"],
            ["미술", "Art", "Music", "Science", "Math"],
            ["영화", "Movie", "Music", "Drama", "Book"],
            ["책", "Book", "Movie", "Music", "Game"],
            ["게임", "Game", "Book", "Movie", "Music"],
            ["운동", "Exercise/Sports", "Sleep", "Study", "Game"],
            ["요리", "Cooking", "Eating", "Cleaning", "Washing"],
            ["여행", "Traveling", "Sleeping", "Working", "Reading"],
            ["사진", "Photography", "Art", "Music", "Movie"],
            ["노래", "Song/Singing", "Dance", "Music", "Movie"]
        ],
        "Hobbies II (Actions)": [
            ["수영", "Swimming", "Running", "Hiking", "Cycling"],
            ["등산", "Hiking", "Swimming", "Fishing", "Running"],
            ["낚시", "Fishing", "Hiking", "Swimming", "Hunting"],
            ["독서", "Reading", "Writing", "Drawing", "Singing"],
            ["그림", "Drawing/Painting", "Reading", "Writing", "Music"],
            ["노래방", "Karaoke", "Cinema", "PC Cafe", "Park"],
            ["산책", "Walking/Stroll", "Running", "Hiking", "Swimming"],
            ["쇼핑", "Shopping", "Cooking", "Cleaning", "Sleeping"],
            ["요가", "Yoga", "Boxing", "Swimming", "Running"],
            ["태권도", "Taekwondo", "Yoga", "Boxing", "Judo"]
        ]
    },

    technology: {
        "Tech I": [
            ["휴대폰", "Mobile Phone", "Computer", "Television", "Camera"],
            ["컴퓨터", "Computer", "Mobile Phone", "Internet", "Screen"],
            ["인터넷", "Internet", "Password", "Message", "Battery"],
            ["비밀번호", "Password", "Message", "Internet", "Screen"],
            ["화면", "Screen", "Battery", "Camera", "Charger"],
            ["배터리", "Battery", "Screen", "Charger", "Internet"],
            ["카메라", "Camera", "Mobile Phone", "Television", "Message"],
            ["메시지", "Message", "Password", "Internet", "Battery"],
            ["충전기", "Charger", "Battery", "Mobile Phone", "Screen"],
            ["텔레비전", "Television", "Computer", "Camera", "Internet"]
        ]
    },

    school: {
        "School I": [
            ["학생", "Student", "Teacher", "Doctor", "Friend"],
            ["선생님", "Teacher", "Student", "Principal", "Police"],
            ["교실", "Classroom", "Library", "Office", "Bathroom"],
            ["숙제", "Homework", "Exam", "Question", "Class"],
            ["시험", "Exam", "Homework", "Lesson", "Dictionary"],
            ["질문", "Question", "Answer", "Exam", "Homework"],
            ["연필", "Pencil", "Desk", "Book", "Chair"],
            ["책상", "Desk", "Chair", "Pencil", "Door"],
            ["사전", "Dictionary", "Book", "Homework", "Exam"],
            ["수업", "Class/Lesson", "Exam", "Homework", "Question"]
        ]
    },

    shopping: {
        "Shopping I": [
            ["돈", "Money", "Card", "Receipt", "Coin"],
            ["지갑", "Wallet", "Bag", "Money", "Card"],
            ["가격", "Price", "Discount", "Receipt", "Money"],
            ["영수증", "Receipt", "Price", "Card", "Wallet"],
            ["카드", "Credit Card", "Money", "Coin", "Wallet"],
            ["동전", "Coin", "Money", "Card", "Price"],
            ["선물", "Gift", "Discount", "Receipt", "Wallet"],
            ["할인", "Discount", "Price", "Gift", "Money"],
            ["시장", "Market", "Mall", "Store", "Bank"],
            ["쇼핑몰", "Shopping Mall", "Market", "Store", "Hospital"]
        ]
    },

    health: {
        "Health & Medical": [
            ["약", "Medicine", "Hospital", "Pharmacy", "Doctor"],
            ["약국", "Pharmacy", "Hospital", "Store", "School"],
            ["병원", "Hospital", "Pharmacy", "Bank", "Police Station"],
            ["의사", "Doctor", "Nurse", "Patient", "Teacher"],
            ["열", "Fever", "Cold/Flu", "Cough", "Stress"],
            ["감기", "Cold/Flu", "Fever", "Cough", "Medicine"],
            ["건강", "Health", "Stress", "Medicine", "Blood"],
            ["스트레스", "Stress", "Health", "Fever", "Cough"],
            ["피", "Blood", "Medicine", "Water", "Tears"],
            ["기침", "Cough", "Fever", "Cold/Flu", "Stress"]
        ]
    }
};