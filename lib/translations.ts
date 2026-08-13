export type Language = "en" | "km";

export interface Translations {
  // Navigation
  dashboard: string;
  modules: string;
  simulators: string;
  shortcuts: string;
  challenges: string;
  badges: string;
  
  // Header & Stats
  startLearning: string;
  trySimulators: string;
  xpPoints: string;
  dayStreak: string;
  completed: string;
  aiTutor: string;

  // Hero & Landing
  heroTag: string;
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitle: string;
  learningPathTitle: string;
  learningPathSubtitle: string;

  // Dashboard
  welcomeBack: string;
  welcomeSubtitle: string;
  continueLearning: string;
  resumeLesson: string;
  appsProgress: string;
  recentBadges: string;
  resetProgress: string;

  // Lesson & Quiz
  stepOf: string;
  of: string;
  needHint: string;
  hideHint: string;
  lessonCompleted: string;
  xpEarned: string;
  quizScore: string;
  checkAnswer: string;
  continueBtn: string;
  moduleOverview: string;
  nextLesson: string;
  knowledgeCheckQuiz: string;
  correctAnswerLabel: string;
  notQuiteRightLabel: string;
  interactiveTask: string;
  goalAchieved: string;
  completeTaskToUnlock: string;
  outstandingJob: string;
  returnToDashboard: string;
  loadingProfile: string;

  // Simulators & Games
  excelGridTitle: string;
  formulaPlaceholder: string;
  autoSumBtn: string;
  insertChartBtn: string;
  newSlideBtn: string;
  previewTransition: string;
  shortcutArcadeTitle: string;
  startArcade: string;
  highScore: string;

  // Gamification & Badges
  badgeUnlocked: string;
  unlockedLabel: string;
  awesomeContinue: string;
  shortcutTrainerTitle: string;
  shortcutHeaderTitle: string;
  shortcutHeaderSub: string;
  allApps: string;
  targetNinja: string;
  shortcutQuestionPrompt: string;
  nextQuestion: string;
  cheatSheetTitle: string;
  workplaceTasks: string;
  workplaceTitle: string;
  workplaceSubtitle: string;
  taskCriteria: string;
  startTask: string;
  backToChallenges: string;
  xpRewardLabel: string;
  requirementsChecklist: string;
  gamificationGallery: string;
  badgesWallTitle: string;
  badgesWallSub: string;
  badgesUnlockedOf: string;
  keepPracticing: string;
  totalLifetimeXP: string;
  simulatorsPlayground: string;
  simulatorsTitle: string;
  simulatorsSub: string;
  aiOfficeTutor: string;
  aiTutorAskPlaceholder: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    dashboard: "Dashboard",
    modules: "Modules",
    simulators: "Simulators",
    shortcuts: "Shortcuts",
    challenges: "Challenges",
    badges: "Badges",

    startLearning: "Start Learning Free",
    trySimulators: "Try Office Simulators",
    xpPoints: "Total XP",
    dayStreak: "Day Streak",
    completed: "Completed",
    aiTutor: "AI Tutor",

    heroTag: "The Duolingo for Microsoft Office",
    heroTitle1: "Learn Microsoft Office",
    heroTitle2: "Interactively",
    heroSubtitle: "Master Word, Excel, PowerPoint, Outlook, Access, OneNote, and Teams with hands-on simulations, quizzes, keyboard shortcut trainer, and realistic workplace tasks.",
    learningPathTitle: "Your Path to Microsoft Office Mastery",
    learningPathSubtitle: "Follow our step-by-step roadmap from Office Basics to Specialist workplace proficiency.",

    welcomeBack: "Welcome back, Learner!",
    welcomeSubtitle: "Track your Microsoft Office XP points, daily streak counter, lesson progress, and unlocked badges.",
    continueLearning: "Continue Learning",
    resumeLesson: "Resume Lesson",
    appsProgress: "Office Apps Progress",
    recentBadges: "Recent Achievements & Badges",
    resetProgress: "Reset Progress",

    stepOf: "Step",
    of: "of",
    needHint: "Need a Hint?",
    hideHint: "Hide Hint",
    lessonCompleted: "Lesson Completed!",
    xpEarned: "XP Earned",
    quizScore: "Quiz Score",
    checkAnswer: "Check Answer",
    continueBtn: "Continue",
    moduleOverview: "Module Overview",
    nextLesson: "Next Lesson",
    knowledgeCheckQuiz: "Knowledge Check Quiz",
    correctAnswerLabel: "Correct Answer!",
    notQuiteRightLabel: "Not Quite Right",
    interactiveTask: "Interactive Simulator Task",
    goalAchieved: "Goal Achieved!",
    completeTaskToUnlock: "Complete task below to unlock Next",
    outstandingJob: "Outstanding job! You've mastered this topic in Microsoft Office.",
    returnToDashboard: "Return to Dashboard",
    loadingProfile: "Loading your learning profile...",

    excelGridTitle: "Excel Grid & Formulas",
    formulaPlaceholder: "Enter data or formula like =SUM(A1:A3)...",
    autoSumBtn: "∑ AutoSum",
    insertChartBtn: "Chart",
    newSlideBtn: "New Slide",
    previewTransition: "Preview Transition",
    shortcutArcadeTitle: "Rapid-Fire Shortcut Challenge",
    startArcade: "Start Game Arcade",
    highScore: "Personal High Score",

    badgeUnlocked: "Badge Unlocked!",
    unlockedLabel: "Unlocked",
    awesomeContinue: "Awesome! Continue",
    shortcutTrainerTitle: "Keyboard Shortcut Trainer",
    shortcutHeaderTitle: "Master Microsoft Office Shortcuts",
    shortcutHeaderSub: "Test your muscle memory in Word, Excel, PowerPoint, and Outlook. Earn high scores and unlock badges!",
    allApps: "All Apps",
    targetNinja: "Target: 5+ for Ninja Badge",
    shortcutQuestionPrompt: "What is the keyboard shortcut to:",
    nextQuestion: "Next Question →",
    cheatSheetTitle: "Shortcut Cheat Sheet Reference",
    workplaceTasks: "Workplace Practice Tasks",
    workplaceTitle: "Realistic Workplace Challenges",
    workplaceSubtitle: "Apply your knowledge to solve real business tasks: draft executive resumes, build household budgets, and design pitch decks.",
    taskCriteria: "Task Criteria:",
    startTask: "Start Practice Task",
    backToChallenges: "Back to Challenges List",
    xpRewardLabel: "XP Reward",
    requirementsChecklist: "Workplace Task Requirements Checklist:",
    gamificationGallery: "Gamification Gallery",
    badgesWallTitle: "Achievement Badges Wall",
    badgesWallSub: "Unlock badges as you earn XP points, complete Office lessons, and beat shortcut high scores.",
    badgesUnlockedOf: "Badges Unlocked",
    keepPracticing: "Keep practicing lessons and challenges to complete your badge gallery collection!",
    totalLifetimeXP: "Total Lifetime XP",
    simulatorsPlayground: "Interactive Simulators Playground",
    simulatorsTitle: "Microsoft Office Interface Simulators",
    simulatorsSub: "Test your skills in real-time interactive ribbon editors, spreadsheet grids with live formula evaluation, and presentation decks.",
    aiOfficeTutor: "AI Office Tutor",
    aiTutorAskPlaceholder: "Ask Clippy AI anything about Microsoft Office...",
  },
  km: {
    dashboard: "ផ្ទាំងគ្រប់គ្រង",
    modules: "មេរៀន",
    simulators: "កម្មវិធីត្រាប់តាម",
    shortcuts: "ផ្លូវកាត់ក្តារចុច",
    challenges: "ការប្រកួតប្រជែង",
    badges: "មេដាយជ័យលាភី",

    startLearning: "ចាប់ផ្តើមរៀនដោយឥតគិតថ្លៃ",
    trySimulators: "សាកល្បងកម្មវិធីត្រាប់តាម",
    xpPoints: "ពិន្ទុ XP សរុប",
    dayStreak: "ថ្ងៃបន្តបន្ទាប់",
    completed: "បានបញ្ចប់",
    aiTutor: "គ្រូបង្រៀន AI",

    heroTag: "កម្មវិធីរៀន Microsoft Office បែបអន្តរកម្ម",
    heroTitle1: "រៀនប្រើប្រាស់ Microsoft Office",
    heroTitle2: "ដោយអន្តរកម្ម",
    heroSubtitle: "រៀនជំនាញ Word, Excel, PowerPoint, Outlook, Access, OneNote និង Teams ជាមួយការត្រាប់តាមជាក់ស្តែង លំហាត់តេស្ត និងការប្រកួតប្រជែងផ្លូវកាត់ក្តារចុច។",
    learningPathTitle: "ផ្លូវឆ្ពោះទៅកាន់ការស្ទាត់ជំនាញ Microsoft Office",
    learningPathSubtitle: "ដើរតាមផែនទីបង្ហាញផ្លូវពីមូលដ្ឋានគ្រឹះរហូតដល់កម្រិតជំនាញវិជ្ជាជីវៈ។",

    welcomeBack: "សូមស្វាគមន៍មកវិញ!",
    welcomeSubtitle: "តាមដានពិន្ទុ XP ថ្ងៃបន្តបន្ទាប់ វឌ្ឍនភាពមេរៀន និងមេដាយដែលទទួលបាន។",
    continueLearning: "បន្តការរៀន",
    resumeLesson: "ចូលរៀនបន្ត",
    appsProgress: "វឌ្ឍនភាពកម្មវិធី Office",
    recentBadges: "មេដាយជ័យលាភីថ្មីៗ",
    resetProgress: "កំណត់ឡើងវិញ",

    stepOf: "ជំហាន",
    of: "នៃ",
    needHint: "ត្រូវការការណែនាំ?",
    hideHint: "លាក់ការណែនាំ",
    lessonCompleted: "មេរៀនបានបញ្ចប់!",
    xpEarned: "ពិន្ទុ XP ទទួលបាន",
    quizScore: "ពិន្ទុតេស្ត",
    checkAnswer: "ពិនិត្យចម្លើយ",
    continueBtn: "បន្តទៀត",
    moduleOverview: "ទិដ្ឋភាពទូទៅនៃមេរៀន",
    nextLesson: "មេរៀនបន្ទាប់",
    knowledgeCheckQuiz: "ការធ្វើតេស្តវាស់ស្ទង់ចំណេះដឹង",
    correctAnswerLabel: "ចម្លើយត្រឹមត្រូវ!",
    notQuiteRightLabel: "មិនទាន់ត្រឹមត្រូវទេ",
    interactiveTask: "កិច្ចការត្រាប់តាមអន្តរកម្ម",
    goalAchieved: "សម្រេចគោលដៅ!",
    completeTaskToUnlock: "បំពេញកិច្ចការខាងក្រោមដើម្បីបន្ត",
    outstandingJob: "ធ្វើបានល្អណាស់! អ្នកបានស្ទាត់ជំនាញប្រធានបទនេះក្នុង Microsoft Office។",
    returnToDashboard: "ត្រឡប់ទៅផ្ទាំងគ្រប់គ្រង",
    loadingProfile: "កំពុងផ្ទុកទិន្នន័យរបស់អ្នក...",

    excelGridTitle: "សៀវភៅបញ្ជី និងរូបមន្ត Excel",
    formulaPlaceholder: "បញ្ចូលទិន្នន័យ ឬរូបមន្តដូចជា =SUM(A1:A3)...",
    autoSumBtn: "∑ ផលបូកស្វ័យប្រវត្តិ",
    insertChartBtn: "ក្រាហ្វិក",
    newSlideBtn: "ស្លាយថ្មី",
    previewTransition: "មើលបែបផែនផ្លាស់ប្តូរ",
    shortcutArcadeTitle: "ការប្រកួតប្រជែងផ្លូវកាត់ក្តារចុច",
    startArcade: "ចាប់ផ្តើមលេង",
    highScore: "ពិន្ទុខ្ពស់បំផុត",

    badgeUnlocked: "បើកមេដាយជ័យលាភី!",
    unlockedLabel: "បានបើក",
    awesomeContinue: "អស្ចារ្យ! បន្តទៀត",
    shortcutTrainerTitle: "ការហ្វឹកហាត់ផ្លូវកាត់ក្តារចុច",
    shortcutHeaderTitle: "ស្ទាត់ជំនាញផ្លូវកាត់ក្តារចុច Microsoft Office",
    shortcutHeaderSub: "សាកល្បងការចងចាំផ្លូវកាត់ក្តារចុចក្នុង Word, Excel, PowerPoint, និង Outlook។ ទទួលបានពិន្ទុខ្ពស់ និងបើកមេដាយ!",
    allApps: "កម្មវិធីទាំងអស់",
    targetNinja: "គោលដៅ៖ ៥+ ដើម្បីទទួលបានមេដាយ Ninja",
    shortcutQuestionPrompt: "តើអ្វីជាផ្លូវកាត់ក្តារចុចសម្រាប់៖",
    nextQuestion: "សំណួរLinesបន្ទាប់ →",
    cheatSheetTitle: "បញ្ជីឯកសារយោងផ្លូវកាត់ក្តារចុច",
    workplaceTasks: "កិច្ចការអនុវត្តការងារ",
    workplaceTitle: "ការប្រកួតប្រជែងការងារជាក់ស្តែង",
    workplaceSubtitle: "អនុវត្តចំណេះដឹងដើម្បីដោះស្រាយកិច្ចការអាជីវកម្មពិតៗ៖ បង្កើតប្រវត្តិរូបសង្ខេប គណនាថវិកា និងរចនាស្លាយបទបង្ហាញ។",
    taskCriteria: "លក្ខខណ្ឌកិច្ចការ៖",
    startTask: "ចាប់ផ្តើមកិច្ចការអនុវត្ត",
    backToChallenges: "ត្រឡប់ទៅបញ្ជីការប្រកួតប្រជែង",
    xpRewardLabel: "រង្វាន់ XP",
    requirementsChecklist: "បញ្ជីត្រួតពិនិត្យលក្ខខណ្ឌកិច្ចការ៖",
    gamificationGallery: "សាលពិព័រណ៍មេដាយ",
    badgesWallTitle: "ជញ្ជាំងមេដាយជ័យលាភី",
    badgesWallSub: "បើកមេដាយនៅពេលអ្នកទទួលបានពិន្ទុ XP បញ្ចប់មេរៀន Office និងបំបែកកំណត់ត្រាផ្លូវកាត់។",
    badgesUnlockedOf: "មេដាយបានបើក",
    keepPracticing: "បន្តរៀនមេរៀន និងកិច្ចការប្រកួតប្រជែងដើម្បីប្រមូលមេដាយឱ្យបានគ្រប់!",
    totalLifetimeXP: "ពិន្ទុ XP សរុបទាំងអស់",
    simulatorsPlayground: "កន្លែងសាកល្បងកម្មវិធីត្រាប់តាម",
    simulatorsTitle: "កម្មវិធីត្រាប់តាមផ្ទៃប្រឈម Microsoft Office",
    simulatorsSub: "សាកល្បងជំនាញរបស់អ្នកលើកម្មវិធីកែសម្រួល Ribbon ក្រឡាសៀវភៅបញ្ជីជាមួយរូបមន្ត និងស្លាយបទបង្ហាញ។",
    aiOfficeTutor: "គ្រូបង្រៀន AI Office",
    aiTutorAskPlaceholder: "សួរ Clippy AI អំពី Microsoft Office...",
  },
};
