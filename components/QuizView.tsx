
import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { AITutor } from './AITutor';

interface QuizViewProps {
  question: Question;
  onNext: (correct: boolean) => void;
  enableTimer?: boolean;
}

export const QuizView: React.FC<QuizViewProps> = ({ question, onNext, enableTimer = false }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    // Reset timer on new question
    setElapsedTime(0);
    let interval: any;
    
    if (enableTimer) {
      interval = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [question, enableTimer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    const isCorrect = selectedOption === question.correctOption;
    onNext(isCorrect);
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  // Create a Google Search URL for the topic
  const getResourceLink = () => {
    const query = encodeURIComponent(`RD Exam ${question.domain} ${question.question.substring(0, 40)}`);
    return `https://www.google.com/search?q=${query}`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
      <div className="p-6 bg-indigo-600 text-white relative">
        <div className="flex justify-between items-start mb-2">
            <div className="flex gap-2">
                <span className="inline-block px-2 py-0.5 bg-indigo-500 rounded-full text-xs font-bold uppercase tracking-wider">
                {question.domain}
                </span>
                {question.difficulty && (
                <span className="inline-block px-2 py-0.5 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider">
                    {question.difficulty}
                </span>
                )}
            </div>
            {enableTimer && (
                <div className="text-sm font-mono bg-black/20 px-2 py-1 rounded">
                    ⏱ {formatTime(elapsedTime)}
                </div>
            )}
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold leading-snug mt-2">
          {question.question}
        </h2>
      </div>

      <div className="p-8 space-y-4">
        {question.options.map((option, index) => {
          let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium ";
          
          if (isSubmitted) {
            if (index === question.correctOption) {
              btnClass += "border-green-500 bg-green-50 text-green-800";
            } else if (index === selectedOption) {
              btnClass += "border-red-500 bg-red-50 text-red-800";
            } else {
              btnClass += "border-slate-100 text-slate-400";
            }
          } else {
            btnClass += "border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-slate-700";
          }

          return (
            <button
              key={index}
              onClick={() => handleSubmit(index)}
              disabled={isSubmitted}
              className={btnClass}
            >
              <div className="flex items-center">
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4 text-sm font-bold ${
                  isSubmitted && index === question.correctOption ? 'bg-green-200 text-green-800' :
                  isSubmitted && index === selectedOption ? 'bg-red-200 text-red-800' :
                  'bg-slate-100 text-slate-500'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </div>
            </button>
          );
        })}

        {isSubmitted && (
          <div className="mt-6 animate-fade-in space-y-4">
            <div className={`p-4 rounded-xl ${
              selectedOption === question.correctOption ? 'bg-green-100 text-green-800' : 'bg-indigo-50 text-indigo-900'
            }`}>
              <p className="font-bold mb-1">
                {selectedOption === question.correctOption ? '🎉 Correct!' : '💡 Explanation'}
              </p>
              <p className="text-sm opacity-90">{question.explanation || question.answer}</p>
              
              <a 
                href={getResourceLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 text-xs font-bold underline opacity-80 hover:opacity-100"
              >
                Search External Resources ↗
              </a>
            </div>
            
            <AITutor 
              question={question.question} 
              answer={question.answer} 
              domain={question.domain}
            />

            <button
              onClick={handleNext}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all active:scale-95"
            >
              Next Question →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
