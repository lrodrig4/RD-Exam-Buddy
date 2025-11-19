
import React, { useState, useEffect } from 'react';
import { Question, StudyMode, StudySessionStats } from '../types';
import { Flashcard } from '../components/Flashcard';
import { QuizView } from '../components/QuizView';

interface SessionManagerProps {
  questions: Question[];
  mode: StudyMode;
  onComplete: (stats: StudySessionStats) => void;
  onExit: () => void;
}

export const SessionManager: React.FC<SessionManagerProps> = ({ questions, mode, onComplete, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stats, setStats] = useState<StudySessionStats>({
    total: questions.length,
    correct: 0,
    incorrect: 0,
    startTime: Date.now()
  });
  
  // Session-local streak for immediate feedback
  const [currentStreak, setCurrentStreak] = useState(0);
  const [notification, setNotification] = useState<string | null>(null);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  // Clear notification after 2 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleNext = (correct: boolean) => {
    // Update stats
    const newStats = { ...stats };
    if (correct) {
        newStats.correct++;
        const newStreak = currentStreak + 1;
        setCurrentStreak(newStreak);
        
        // Motivation logic
        if (newStreak === 3) setNotification("🔥 3 in a row! You're on fire!");
        else if (newStreak === 5) setNotification("⚡ 5 in a row! Unstoppable!");
        else if (newStreak === 10) setNotification("🏆 10 in a row! RD material!");
    } else {
        newStats.incorrect++;
        setCurrentStreak(0); // Reset streak on error
    }
    setStats(newStats);

    // Move next or finish
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Calculate elapsed time before completing
      newStats.elapsedSeconds = Math.floor((Date.now() - stats.startTime) / 1000);
      onComplete(newStats);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto px-4 py-6 relative">
      {/* Motivational Toast */}
      {notification && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full font-bold shadow-lg border-2 border-yellow-500">
            {notification}
          </div>
        </div>
      )}

      {/* Header */}
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
            <div className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg">
            {mode === 'flashcards' ? 'Flashcard' : mode === 'quiz' ? 'Quiz' : 'Review'}
            </div>
            {currentStreak > 1 && (
                <div className="text-xs font-bold text-orange-500 mt-1">
                    🔥 {currentStreak} Streak
                </div>
            )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center pb-12 overflow-y-auto no-scrollbar">
        {mode === 'flashcards' || mode === 'review' ? (
          <Flashcard 
            question={currentQuestion} 
            onNext={handleNext} 
          />
        ) : (
          <QuizView 
            question={currentQuestion} 
            onNext={handleNext} 
          />
        )}
      </div>
    </div>
  );
};
