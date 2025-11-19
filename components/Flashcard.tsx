
import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { AITutor } from './AITutor';

interface FlashcardProps {
  question: Question;
  onNext: (correct: boolean) => void;
  animationSpeed?: 'slow' | 'normal' | 'fast';
}

export const Flashcard: React.FC<FlashcardProps> = ({ question, onNext, animationSpeed = 'normal' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset flip state when question changes
  useEffect(() => {
    setIsFlipped(false);
  }, [question]);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const getDurationClass = () => {
    switch(animationSpeed) {
      case 'slow': return 'duration-1000';
      case 'fast': return 'duration-300';
      default: return 'duration-500';
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto perspective-1000 h-[500px] cursor-pointer group" onClick={handleFlip}>
      <div 
        className={`relative w-full h-full transition-transform transform-style-3d ${getDurationClass()} ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-xl bg-white border border-slate-200 p-8 flex flex-col justify-between items-center">
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider">
                {question.domain}
              </span>
              {question.difficulty && (
                <span className={`px-2 py-1 text-xs font-bold rounded-full border ${
                  question.difficulty === 'Advanced' ? 'border-purple-200 text-purple-600 bg-purple-50' :
                  question.difficulty === 'Intermediate' ? 'border-blue-200 text-blue-600 bg-blue-50' :
                  'border-green-200 text-green-600 bg-green-50'
                }`}>
                  {question.difficulty}
                </span>
              )}
            </div>
            <span className="text-slate-400 text-sm">Tap to flip</span>
          </div>
          
          <div className="flex-1 flex items-center justify-center">
            <p className="text-2xl font-semibold text-slate-800 text-center leading-relaxed">
              {question.question}
            </p>
          </div>

          <div className="w-full text-center text-slate-400 text-sm font-medium">
            Thinking time...
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 flex flex-col justify-between items-center text-white"
             onClick={(e) => e.stopPropagation()} /* Stop flip when clicking buttons */
        >
          <div className="w-full flex justify-between items-center">
             <span className="px-3 py-1 bg-slate-700 text-slate-200 text-xs font-bold rounded-full uppercase tracking-wider">
              Answer
            </span>
            <button onClick={handleFlip} className="text-slate-400 hover:text-white text-sm">
              ↩ Flip back
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center w-full overflow-y-auto no-scrollbar">
            <p className="text-xl font-medium text-center mb-4 text-white">
              {question.answer}
            </p>
            {question.explanation && (
              <p className="text-sm text-slate-300 text-center max-w-md mb-4">
                {question.explanation}
              </p>
            )}
            
            {/* AI Tutor Component */}
            <div className="w-full" onClick={(e) => e.stopPropagation()}>
              <AITutor 
                question={question.question} 
                answer={question.answer} 
                domain={question.domain} 
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full mt-4 pt-4 border-t border-slate-700">
            <button 
              onClick={(e) => { e.stopPropagation(); onNext(false); }}
              className="py-3 px-6 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-200 font-semibold rounded-xl transition-all"
            >
              Need Review
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); onNext(true); }}
              className="py-3 px-6 bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 text-green-200 font-semibold rounded-xl transition-all"
            >
              Got It!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
