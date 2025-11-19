
export enum Domain {
  ASSESSMENT = "Nutrition Assessment",
  DIAGNOSIS = "Nutrition Diagnosis",
  INTERVENTION = "Nutrition Intervention",
  MONITORING = "Monitoring & Evaluation",
  FOODSERVICE = "Food Service Management",
  MANAGEMENT = "Management & Leadership",
  BIOCHEMISTRY = "Biochemistry & Metabolism",
  CLINICAL = "Clinical Nutrition"
}

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface UserSettings {
  animationSpeed: 'slow' | 'normal' | 'fast';
  enableQuizTimer: boolean;
  defaultDifficulty: Difficulty | 'All';
}

export interface Question {
  id: number;
  domain: Domain;
  question: string;
  answer: string;
  options: string[];
  correctOption: number;
  explanation?: string;
  difficulty?: Difficulty; // Optional as we migrate data
}

export type StudyMode = 'flashcards' | 'quiz' | 'review' | 'mock';

export interface StudySessionStats {
  total: number;
  correct: number;
  incorrect: number;
  startTime: number;
  elapsedSeconds?: number;
  mode?: StudyMode;
  mockScore?: number; // 0-50 scaled score
}

export interface DomainPerformance {
  seen: number;
  correct: number;
}

// Study Plan Types
export interface StudyTask {
  id: string;
  description: string;
  completed: boolean;
  type: 'quiz' | 'flashcards' | 'read' | 'rest';
  targetDomain?: Domain;
  questionCount?: number;
}

export interface StudyDay {
  dayNumber: number; // 1 to N
  date?: string; // YYYY-MM-DD
  weekNumber: number;
  focus: string;
  tasks: StudyTask[];
  completed: boolean;
}

export interface UserStudyProfile {
  examDate: string;
  daysPerWeek: string[]; // "Mon", "Tue" etc
  hoursPerDay: number;
  confidenceLevel: 'Low' | 'Medium' | 'High';
  stressLevel: 'Low' | 'Medium' | 'High';
  generatedAt: number;
}

export interface GlobalStats {
  questionsStudied: number;
  questionsCorrect: number;
  missedQuestions: number[]; // Array of Question IDs
  streak: number;
  lastStudyDate: string;
  dailyGoal: number;
  questionsStudiedToday: number;
  totalMinutesStudied: number; // New: Track total time investment
  // New Analytics
  dailyHistory: Record<string, number>; // YYYY-MM-DD: count
  domainStats: Record<string, DomainPerformance>;
  // Settings
  settings: UserSettings;
  // Motivation
  personalWhy: string;
  // Study Plan
  studyProfile?: UserStudyProfile;
  studyPlan?: StudyDay[];
}

export interface AppState {
  view: 'dashboard' | 'session' | 'results' | 'settings' | 'career' | 'study-plan' | 'mock-session';
  mode: StudyMode | null;
  sessionQuestions: Question[];
  sessionStats: StudySessionStats;
  selectedDomain: Domain | 'All';
  selectedDifficulty: Difficulty | 'All';
}
