
import React from 'react';
import { StudySessionStats } from '../types';

interface ResultsProps {
  stats: StudySessionStats;
  onHome: () => void;
}

export const Results: React.FC<ResultsProps> = ({ stats, onHome }) => {
  const percentage = Math.round((stats.correct / stats.total) * 100) || 0;
  
  let message = "";
  let emoji = "";
  let color = "";

  if (stats.mode === 'mock') {
      // Mock Exam Specific Feedback
      const score = stats.mockScore || 0;
      if (score >= 25) {
          message = `Congratulations! You passed the simulated exam with a scaled score of ${score}.`;
          emoji = "🎓";
          color = "text-green-600";
      } else {
          message = `You scored ${score}. You need a 25 to pass. Keep reviewing your weak domains!`;
          emoji = "💪";
          color = "text-orange-500";
      }
  } else {
      // Standard Feedback
      if (percentage >= 90) {
        message = "Outstanding! You're ready for the real thing!";
        emoji = "🏆";
        color = "text-yellow-500";
      } else if (percentage >= 70) {
        message = "Great job! Keep up the consistent work.";
        emoji = "🎉";
        color = "text-green-500";
      } else {
        message = "Good effort! Review the missed questions to improve.";
        emoji = "📚";
        color = "text-indigo-500";
      }
  }

  return (
    <div className="h-full flex flex-col items-center justify-center px-4 max-w-2xl mx-auto text-center animate-fade-in">
      <div className="text-8xl mb-6 animate-bounce">{emoji}</div>
      
      <h2 className="text-3xl font-bold text-slate-800 mb-2">
          {stats.mode === 'mock' ? 'Exam Simulation Complete' : 'Session Complete!'}
      </h2>
      <p className="text-slate-500 mb-8 text-lg">{message}</p>

      <div className="w-full grid grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
          <div className={`text-4xl font-bold ${color} mb-1`}>
              {stats.mode === 'mock' ? stats.mockScore : `${percentage}%`}
          </div>
          <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">
              {stats.mode === 'mock' ? 'Scaled Score' : 'Accuracy'}
          </div>
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
          <div className="text-4xl font-bold text-slate-800 mb-1">{stats.correct}</div>
          <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Correct</div>
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
          <div className="text-4xl font-bold text-slate-800 mb-1">{stats.incorrect}</div>
          <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Review</div>
        </div>
      </div>

      <button 
        onClick={onHome}
        className="w-full max-w-sm py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
      >
        Back to Dashboard
      </button>
    </div>
  );
};
