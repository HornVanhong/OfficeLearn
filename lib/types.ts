export type OfficeAppId =
  | "office-basics"
  | "word"
  | "excel"
  | "powerpoint"
  | "outlook"
  | "access"
  | "onenote"
  | "teams";

export interface OfficeModule {
  id: OfficeAppId;
  title: string;
  subtitle: string;
  description: string;
  color: string; // Tailwind hex / class
  accentColor: string;
  iconName: string;
  totalLessons: number;
  estimatedHours: string;
  category: "Core" | "Productivity" | "Collaboration" | "Data";
}

export type StepType = "text" | "sim-challenge" | "interactive-demo";

export interface LessonStep {
  stepNumber: number;
  title: string;
  content: string;
  type: StepType;
  challengeTarget?: {
    app: OfficeAppId;
    action: string; // e.g. "bold", "italic", "sum_formula", "insert_chart", "new_slide"
    targetValue?: string;
  };
  hint?: string;
  codeSnippet?: string;
}

export type QuizType = "multiple-choice" | "click-ribbon" | "drag-drop";

export interface QuizQuestion {
  id: string;
  type: QuizType;
  question: string;
  options?: string[];
  correctAnswer: string | number; // index or button ID
  explanation: string;
  matchingPairs?: { left: string; right: string }[];
  targetRibbonButton?: string; // e.g. "bold-btn"
}

export interface Lesson {
  id: string;
  moduleId: OfficeAppId;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  durationMinutes: number;
  xpReward: number;
  objectives: string[];
  steps: LessonStep[];
  quiz: QuizQuestion[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  app: OfficeAppId | "global";
  criteriaXP: number;
  reqLessonId?: string;
}

export interface UserProgress {
  totalXP: number;
  streakDays: number;
  lastActiveDate: string; // YYYY-MM-DD
  completedLessons: string[]; // lesson IDs
  quizScores: Record<string, number>; // lessonId -> percentage score
  unlockedBadges: string[]; // badge IDs
  shortcutHighScore: number;
}

export interface ShortcutItem {
  id: string;
  app: OfficeAppId;
  description: string;
  keys: string[]; // e.g. ["Ctrl", "B"]
  category: "formatting" | "navigation" | "editing" | "formulas" | "file";
}

export interface PracticeChallenge {
  id: string;
  app: OfficeAppId;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  xpReward: number;
  checklist: {
    id: string;
    text: string;
  }[];
  initialData?: any;
}
