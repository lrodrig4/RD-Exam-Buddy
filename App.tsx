
import React, { useState, useEffect } from 'react';
import { AppState, GlobalStats, StudySessionStats, StudyMode, Domain, Question, Difficulty, UserSettings, UserStudyProfile, StudyDay, StudyTask } from './types';
import { questions as allQuestions } from './data/questions';
import { Dashboard } from './views/Dashboard';
import { Results } from './views/Results';
import { Flashcard } from './components/Flashcard';
import { QuizView } from './components/QuizView';
import { SettingsView } from './components/SettingsView';
import { CareerInsights } from './views/CareerInsights';
import { SessionManager } from './views/SessionManager';
import { MockSession } from './views/MockSession';
import { StudyPlan } from './views/StudyPlan';

const STORAGE_KEY = 'rd_exam_buddy_stats';

const DEFAULT_SETTINGS: UserSettings = {
  animationSpeed: 'normal',
  enableQuizTimer: false,
  defaultDifficulty: 'All'
};

// Helper to simulate DB migration and assign difficulties since the raw file doesn't have them all
const getQuestionsWithDifficulty = (): Question[] => {
  return allQuestions.map(q => {
    if (q.difficulty) return q;
    
    // Heuristic assignment based on ID ranges for demonstration
    let diff: Difficulty = 'Intermediate';
    if (q.id <= 100) diff = 'Beginner';
    else if (q.id >= 250) diff = 'Advanced';
    
    return { ...q, difficulty: diff };
  });
};

const App: React.FC = () => {
  // -- State --
  const [questionsData] = useState<Question[]>(getQuestionsWithDifficulty());
  
  const [globalStats, setGlobalStats] = useState<GlobalStats>({
    questionsStudied: 0,
    questionsCorrect: 0,
    missedQuestions: [],
    streak: 0,
    lastStudyDate: new Date().toISOString().split('T')[0],
    dailyGoal: 20,
    questionsStudiedToday: 0,
    totalMinutesStudied: 0,
    dailyHistory: {},
    domainStats: {},
    settings: DEFAULT_SETTINGS,
    personalWhy: ""
  });

  const [appState, setAppState] = useState<AppState>({
    view: 'dashboard',
    mode: null,
    sessionQuestions: [],
    sessionStats: { total: 0, correct: 0, incorrect: 0, startTime: 0 },
    selectedDomain: 'All',
    selectedDifficulty: 'All'
  });

  // -- Effects --

  // Load stats on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      const today = new Date().toISOString().split('T')[0];
      
      // Migration / Default values
      if (typeof parsed.dailyGoal !== 'number') parsed.dailyGoal = 20;
      if (typeof parsed.questionsStudiedToday !== 'number') parsed.questionsStudiedToday = 0;
      if (typeof parsed.totalMinutesStudied !== 'number') parsed.totalMinutesStudied = 0;
      if (!parsed.dailyHistory) parsed.dailyHistory = { [today]: parsed.questionsStudiedToday };
      if (!parsed.domainStats) parsed.domainStats = {};
      if (!parsed.settings) parsed.settings = DEFAULT_SETTINGS;
      if (!parsed.personalWhy) parsed.personalWhy = "";

      // Date check
      if (parsed.lastStudyDate !== today) {
        parsed.questionsStudiedToday = 0;
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        if (parsed.lastStudyDate !== yesterday) {
           parsed.streak = 0;
        }
        if (!parsed.dailyHistory[today]) parsed.dailyHistory[today] = 0;
      }
      
      setGlobalStats(parsed);
      // Set initial filter from settings
      setAppState(prev => ({
         ...prev, 
         selectedDifficulty: parsed.settings.defaultDifficulty 
      }));
    } else {
      const today = new Date().toISOString().split('T')[0];
      setGlobalStats(prev => ({
        ...prev,
        dailyHistory: { [today]: 0 },
        settings: DEFAULT_SETTINGS,
        personalWhy: ""
      }));
    }
  }, []);

  // Save stats on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(globalStats));
  }, [globalStats]);

  // -- Utilities --
  
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // -- Handlers --

  const startSession = (mode: StudyMode, overrideDomain?: Domain) => {
    // Mock Exam Handling
    if (mode === 'mock') {
       setAppState(prev => ({
        ...prev,
        view: 'mock-session',
        mode: 'mock',
        sessionQuestions: [], // Handled internally by MockSession
        sessionStats: { total: 0, correct: 0, incorrect: 0, startTime: Date.now() }
      }));
      return;
    }

    let pool: Question[] = [];
    
    // 1. Filter by Domain & Difficulty (Base Pool)
    pool = questionsData.filter(q => {
      const matchDomain = overrideDomain || (appState.selectedDomain === 'All' || q.domain === appState.selectedDomain);
      const matchDiff = appState.selectedDifficulty === 'All' || q.difficulty === appState.selectedDifficulty;
      return matchDomain && matchDiff;
    });

    if (pool.length === 0) {
      // Try relaxing filters if strict match fails for task execution
      if (overrideDomain) {
          pool = questionsData.filter(q => q.domain === overrideDomain);
      }
      
      if (pool.length === 0) {
        alert("No questions match your current filters.");
        return;
      }
    }

    let sessionQuestions: Question[] = [];

    if (mode === 'review') {
      // Strictly only missed questions
      sessionQuestions = pool.filter(q => globalStats.missedQuestions.includes(q.id));
      if (sessionQuestions.length === 0) {
          alert("You have no missed questions in this selection to review!");
          return;
      }
      sessionQuestions = shuffleArray(sessionQuestions);
    } else {
      // Standard Mode with SRS
      const missedInPool = pool.filter(q => globalStats.missedQuestions.includes(q.id));
      const othersInPool = pool.filter(q => !globalStats.missedQuestions.includes(q.id));
      
      const shuffledMissed = shuffleArray(missedInPool);
      const shuffledOthers = shuffleArray(othersInPool);
      
      sessionQuestions = [...shuffledMissed, ...shuffledOthers];
      
      // Only limit quiz mode to prevent fatigue. Flashcards should show all available.
      if (mode === 'quiz' && sessionQuestions.length > 50) {
          sessionQuestions = sessionQuestions.slice(0, 50);
      }
    }

    setAppState(prev => ({
      ...prev,
      view: 'session',
      mode,
      sessionQuestions,
      sessionStats: { total: sessionQuestions.length, correct: 0, incorrect: 0, startTime: Date.now() }
    }));
  };

  const handleAnswer = (correct: boolean, domain: Domain) => {
    const today = new Date().toISOString().split('T')[0];
    
    setGlobalStats(prev => {
      const isNewDay = prev.lastStudyDate !== today;
      
      const newHistory = { ...prev.dailyHistory };
      newHistory[today] = (newHistory[today] || 0) + 1;

      const newDomainStats = { ...prev.domainStats };
      if (!newDomainStats[domain]) {
        newDomainStats[domain] = { seen: 0, correct: 0 };
      }
      newDomainStats[domain].seen += 1;
      if (correct) newDomainStats[domain].correct += 1;

      return {
        ...prev,
        questionsStudied: prev.questionsStudied + 1,
        questionsCorrect: correct ? prev.questionsCorrect + 1 : prev.questionsCorrect,
        questionsStudiedToday: isNewDay ? 1 : prev.questionsStudiedToday + 1,
        streak: isNewDay ? prev.streak + 1 : prev.streak,
        lastStudyDate: today,
        dailyHistory: newHistory,
        domainStats: newDomainStats
      };
    });
  };

  const handleSessionComplete = (stats: StudySessionStats) => {
    if (stats.elapsedSeconds) {
        const minutes = Math.floor(stats.elapsedSeconds / 60);
        if (minutes > 0) {
             setGlobalStats(prev => ({
                 ...prev,
                 totalMinutesStudied: (prev.totalMinutesStudied || 0) + minutes
             }));
        }
    }
    setAppState(prev => ({ ...prev, view: 'results', sessionStats: stats }));
  };

  const handleSaveSettings = (newSettings: UserSettings) => {
    setGlobalStats(prev => ({ ...prev, settings: newSettings }));
    setAppState(prev => ({ 
        ...prev, 
        selectedDifficulty: newSettings.defaultDifficulty,
        view: 'dashboard' 
    }));
  };

  const handleSavePlan = (profile: UserStudyProfile, plan: StudyDay[]) => {
      setGlobalStats(prev => ({
          ...prev,
          studyProfile: profile,
          studyPlan: plan
      }));
  };

  const handleUpdateTask = (dayIndex: number, taskId: string, completed: boolean) => {
      setGlobalStats(prev => {
          if (!prev.studyPlan) return prev;
          const newPlan = [...prev.studyPlan];
          const day = newPlan.find(d => d.dayNumber === dayIndex + 1); // Using dayNumber which is 1-based
          if (day) {
              const task = day.tasks.find(t => t.id === taskId);
              if (task) task.completed = completed;
          }
          return { ...prev, studyPlan: newPlan };
      });
  };

  const handleStartPlanTask = (task: StudyTask) => {
      if (task.type === 'quiz' || task.type === 'flashcards') {
          // Map task type to StudyMode
          const mode: StudyMode = task.type === 'flashcards' ? 'flashcards' : 'quiz';
          startSession(mode, task.targetDomain);
      }
  };

  return (
    <div className="h-screen bg-slate-50 overflow-hidden font-sans text-slate-900">
      {appState.view === 'dashboard' && (
        <Dashboard 
          stats={globalStats} 
          onStart={startSession} 
          selectedDomain={appState.selectedDomain}
          onDomainChange={(d) => setAppState(prev => ({...prev, selectedDomain: d}))}
          selectedDifficulty={appState.selectedDifficulty}
          onDifficultyChange={(d) => setAppState(prev => ({...prev, selectedDifficulty: d}))}
          onSetGoal={(g) => setGlobalStats(prev => ({ ...prev, dailyGoal: g }))}
          onOpenSettings={() => setAppState(prev => ({ ...prev, view: 'settings' }))}
          onOpenCareer={() => setAppState(prev => ({ ...prev, view: 'career' }))}
          onUpdateWhy={(why) => setGlobalStats(prev => ({ ...prev, personalWhy: why }))}
          onOpenPlan={() => setAppState(prev => ({ ...prev, view: 'study-plan' }))}
        />
      )}

      {appState.view === 'career' && (
        <CareerInsights 
            stats={globalStats}
            onBack={() => setAppState(prev => ({ ...prev, view: 'dashboard' }))}
        />
      )}
      
      {appState.view === 'study-plan' && (
        <StudyPlan 
            stats={globalStats}
            onSavePlan={handleSavePlan}
            onUpdateTask={handleUpdateTask}
            onBack={() => setAppState(prev => ({ ...prev, view: 'dashboard' }))}
            onStartTask={handleStartPlanTask}
        />
      )}

      {appState.view === 'settings' && (
        <SettingsView 
            settings={globalStats.settings}
            onSave={handleSaveSettings}
            onBack={() => setAppState(prev => ({ ...prev, view: 'dashboard' }))}
        />
      )}

      {appState.view === 'mock-session' && (
        <MockSession 
            allQuestions={questionsData}
            onComplete={handleSessionComplete}
            onExit={() => setAppState(prev => ({ ...prev, view: 'dashboard' }))}
        />
      )}

      {appState.view === 'session' && appState.mode && (
        <SessionWrapper 
          questions={appState.sessionQuestions}
          mode={appState.mode}
          settings={globalStats.settings}
          onAnswer={handleAnswer}
          onComplete={handleSessionComplete}
          onExit={() => setAppState(prev => ({ ...prev, view: 'dashboard' }))}
          updateMissedQuestions={(id, correct) => {
            setGlobalStats(prev => {
              const currentMissed = new Set(prev.missedQuestions);
              if (correct) {
                currentMissed.delete(id);
              } else {
                currentMissed.add(id);
              }
              return { ...prev, missedQuestions: Array.from(currentMissed) };
            });
          }}
        />
      )}

      {appState.view === 'results' && (
        <Results 
          stats={appState.sessionStats} 
          onHome={() => setAppState(prev => ({ ...prev, view: 'dashboard' }))}
        />
      )}
    </div>
  );
};

interface SessionWrapperProps {
  questions: Question[];
  mode: StudyMode;
  settings: UserSettings;
  onAnswer: (correct: boolean, domain: Domain) => void;
  onComplete: (stats: StudySessionStats) => void;
  onExit: () => void;
  updateMissedQuestions: (id: number, correct: boolean) => void;
}

const SessionWrapper: React.FC<SessionWrapperProps> = ({ questions, mode, settings, onAnswer, onComplete, onExit, updateMissedQuestions }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [stats, setStats] = useState<StudySessionStats>({
        total: questions.length,
        correct: 0,
        incorrect: 0,
        startTime: Date.now()
    });

    const [currentStreak, setCurrentStreak] = useState(0);
    const [notification, setNotification] = useState<string | null>(null);

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => setNotification(null), 2000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const currentQuestion = questions[currentIndex];
    const progress = ((currentIndex) / questions.length) * 100;

    const handleNext = (correct: boolean) => {
        onAnswer(correct, currentQuestion.domain);
        updateMissedQuestions(currentQuestion.id, correct);

        const newStats = { ...stats };
        if (correct) {
            newStats.correct++;
            const newStreak = currentStreak + 1;
            setCurrentStreak(newStreak);
             if (newStreak === 3) setNotification("🔥 3 in a row!");
             else if (newStreak === 5) setNotification("⚡ 5 in a row! Unstoppable!");
             else if (newStreak === 10) setNotification("🏆 10 in a row! Amazing!");
        } else {
            newStats.incorrect++;
            setCurrentStreak(0);
        }
        setStats(newStats);

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            newStats.elapsedSeconds = Math.floor((Date.now() - stats.startTime) / 1000);
            onComplete(newStats);
        }
    };

     return (
        <div className="flex flex-col h-full max-w-4xl mx-auto px-4 py-6 relative">
        {notification && (
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
            <div className="bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full font-bold shadow-lg border-2 border-yellow-500">
                {notification}
            </div>
            </div>
        )}

        <div className="flex items-center justify-between mb-6">
            <button 
            onClick={onExit}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-full transition-colors"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            
            <div className="flex-1 mx-8">
            <div className="flex justify-between text-xs font-semibold text-slate-400 mb-2">
                <span>Question {currentIndex + 1} of {questions.length}</span>
                <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <div 
                className="h-full bg-indigo-500 transition-all duration-300 ease-out rounded-full"
                style={{ width: `${progress}%` }}
                />
            </div>
            </div>

            <div className="flex flex-col items-end">
                <div className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg capitalize">
                    {mode === 'review' ? 'Smart Review' : mode}
                </div>
                {currentStreak > 1 && (
                    <div className="text-xs font-bold text-orange-500 mt-1">
                        🔥 {currentStreak} Streak
                    </div>
                )}
            </div>
        </div>

        <div className="flex-1 flex flex-col justify-center pb-12 overflow-y-auto no-scrollbar">
            {mode === 'flashcards' || mode === 'review' ? (
            <Flashcard 
                question={currentQuestion} 
                onNext={handleNext}
                animationSpeed={settings.animationSpeed}
            />
            ) : (
            <QuizView 
                question={currentQuestion} 
                onNext={handleNext} 
                enableTimer={settings.enableQuizTimer}
            />
            )}
        </div>
        </div>
    );
}

export default App;
