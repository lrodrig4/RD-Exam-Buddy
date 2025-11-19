
import React, { useState, useEffect, useCallback } from 'react';
import { Question, StudySessionStats, Domain, Difficulty } from '../types';

interface MockSessionProps {
  allQuestions: Question[];
  onComplete: (stats: StudySessionStats) => void;
  onExit: () => void;
}

// Official RD Exam Specifications (CDR)
const DOMAIN_TARGETS = {
  PRINCIPLES: 0.21,  // Principles of Dietetics (21%)
  CARE: 0.45,        // Nutrition Care for Individuals and Groups (45%)
  MANAGEMENT: 0.21,  // Management of Food and Nutrition Programs (21%)
  FOODSERVICE: 0.14  // Food Service Systems (14%)
};

const MAX_QUESTIONS = 125; // Minimum questions to score
const TIME_LIMIT_SECONDS = 3 * 60 * 60; // 3 Hours (Official Time Limit)

export const MockSession: React.FC<MockSessionProps> = ({ allQuestions, onComplete, onExit }) => {
  // Session State
  const [history, setHistory] = useState<{question: Question, correct: boolean}[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_SECONDS);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [currentDifficulty, setCurrentDifficulty] = useState<Difficulty>('Intermediate');
  
  // Stats tracking for balancing
  const [domainCounts, setDomainCounts] = useState({
    PRINCIPLES: 0,
    CARE: 0,
    MANAGEMENT: 0,
    FOODSERVICE: 0
  });

  // Helper to categorize domains into Official Exam Buckets
  const getBucket = (domain: Domain): keyof typeof DOMAIN_TARGETS => {
    switch(domain) {
        case Domain.BIOCHEMISTRY: 
            return 'PRINCIPLES'; // Includes Food Science, Nutrient Comp, Research
        case Domain.FOODSERVICE: 
            return 'FOODSERVICE';
        case Domain.MANAGEMENT: 
            return 'MANAGEMENT';
        default: 
            return 'CARE'; // Clinical, Assessment, Diagnosis, Intervention, Monitoring
    }
  };

  // Adaptive Selection Algorithm
  const selectNextQuestion = useCallback(() => {
    const usedIds = new Set(history.map(h => h.question.id));
    if (currentQuestion) usedIds.add(currentQuestion.id);

    // 1. Determine Target Domain based on current ratios vs official targets
    const total = history.length + 1;
    const ratios = {
      PRINCIPLES: domainCounts.PRINCIPLES / total,
      CARE: domainCounts.CARE / total,
      MANAGEMENT: domainCounts.MANAGEMENT / total,
      FOODSERVICE: domainCounts.FOODSERVICE / total
    };

    // Calculate which bucket is most "under-served" compared to target
    const diffs = {
      PRINCIPLES: DOMAIN_TARGETS.PRINCIPLES - ratios.PRINCIPLES,
      CARE: DOMAIN_TARGETS.CARE - ratios.CARE,
      MANAGEMENT: DOMAIN_TARGETS.MANAGEMENT - ratios.MANAGEMENT,
      FOODSERVICE: DOMAIN_TARGETS.FOODSERVICE - ratios.FOODSERVICE
    };

    // Find the bucket with the largest positive difference (most needed)
    const targetBucket = (Object.keys(diffs) as Array<keyof typeof DOMAIN_TARGETS>).reduce((a, b) => 
        diffs[a] > diffs[b] ? a : b
    );
    
    // 2. Filter available questions by Bucket and Current Difficulty
    let candidates = allQuestions.filter(q => 
      !usedIds.has(q.id) && 
      getBucket(q.domain) === targetBucket &&
      (q.difficulty === currentDifficulty)
    );

    // Fallback 1: If no questions in difficulty, relax difficulty constraint
    if (candidates.length === 0) {
        candidates = allQuestions.filter(q => 
            !usedIds.has(q.id) && 
            getBucket(q.domain) === targetBucket
        );
    }

    // Fallback 2: If no questions in bucket, relax bucket constraint (rare)
    if (candidates.length === 0) {
        candidates = allQuestions.filter(q => !usedIds.has(q.id));
    }

    if (candidates.length === 0) {
        finishExam();
        return;
    }

    // Random pick from candidates
    const nextQ = candidates[Math.floor(Math.random() * candidates.length)];
    setCurrentQuestion(nextQ);
    setSelectedOption(null);

  }, [history, domainCounts, currentDifficulty, allQuestions]);

  // Initialize
  useEffect(() => {
    if (!currentQuestion) {
        selectNextQuestion();
    }
  }, []);

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) {
        finishExam();
        return;
    }
    const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = () => {
    if (!currentQuestion || selectedOption === null) return;

    const isCorrect = selectedOption === currentQuestion.correctOption;
    
    // Update counts
    const bucket = getBucket(currentQuestion.domain);
    setDomainCounts(prev => ({ ...prev, [bucket]: prev[bucket] + 1 }));

    // Update History
    const newHistory = [...history, { question: currentQuestion, correct: isCorrect }];
    setHistory(newHistory);

    // Adaptive Logic: Adjust difficulty for next question
    if (isCorrect) {
        // If correct, increase difficulty (simulate adaptive nature)
        if (currentDifficulty === 'Beginner') setCurrentDifficulty('Intermediate');
        else if (currentDifficulty === 'Intermediate') setCurrentDifficulty('Advanced');
        // If Advanced, stay Advanced
    } else {
        // If incorrect, decrease difficulty to reinforce concepts
        if (currentDifficulty === 'Advanced') setCurrentDifficulty('Intermediate');
        else if (currentDifficulty === 'Intermediate') setCurrentDifficulty('Beginner');
    }

    // Check for completion
    if (newHistory.length >= MAX_QUESTIONS) {
        finishExam(newHistory);
    } else {
        selectNextQuestion();
    }
  };

  const finishExam = (finalHistory = history) => {
    const correctCount = finalHistory.filter(h => h.correct).length;
    
    // Calculate Scaled Score (0-50)
    // CDR Passing is 25. We simulate this by scaling percentage.
    // This is an approximation; real exams use IRT.
    const rawPercentage = correctCount / (finalHistory.length || 1);
    const scaledScore = Math.round(rawPercentage * 50);

    onComplete({
        total: finalHistory.length,
        correct: correctCount,
        incorrect: finalHistory.length - correctCount,
        startTime: Date.now() - ((TIME_LIMIT_SECONDS - timeLeft) * 1000),
        elapsedSeconds: TIME_LIMIT_SECONDS - timeLeft,
        mode: 'mock',
        mockScore: scaledScore
    });
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentQuestion) return <div className="p-8 text-center">Loading Exam...</div>;

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto px-4 py-6 relative bg-slate-50">
      {/* Header */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6 flex justify-between items-center sticky top-0 z-10">
        <div>
            <h2 className="text-lg font-bold text-slate-800">RD Exam Simulator</h2>
            <div className="text-sm text-slate-500">
                Question {history.length + 1} of {MAX_QUESTIONS}
            </div>
        </div>
        <div className="text-right">
            <div className={`text-xl font-mono font-bold ${timeLeft < 600 ? 'text-red-600 animate-pulse' : 'text-slate-700'}`}>
                {formatTime(timeLeft)}
            </div>
            <button 
                onClick={() => { if(confirm("End exam early? This will calculate your score based on current progress.")) finishExam(); }}
                className="text-xs text-red-500 hover:underline font-semibold"
            >
                End Exam
            </button>
        </div>
      </div>

      {/* Question Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
            <div className="p-8 border-b border-slate-100">
                <div className="flex justify-between mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Domain: {getBucket(currentQuestion.domain).replace('_', ' ')}
                    </span>
                    {/* Hidden in real exam, shown here for debug/study context if needed, or remove for pure simulation */}
                    {/* <span className="text-xs text-slate-300">Difficulty: {currentDifficulty}</span> */}
                </div>
                <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed">
                    {currentQuestion.question}
                </p>
            </div>
            
            <div className="p-8 space-y-4">
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedOption(index)}
                        className={`w-full text-left p-5 rounded-xl border-2 transition-all flex items-center ${
                            selectedOption === index 
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-md' 
                            : 'border-slate-200 hover:border-indigo-200 hover:bg-slate-50 text-slate-600'
                        }`}
                    >
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-4 flex-shrink-0 ${
                            selectedOption === index ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300'
                        }`}>
                            {selectedOption === index && <div className="w-2 h-2 bg-white rounded-full"></div>}
                        </div>
                        <span className="font-medium text-lg">{option}</span>
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4">
        <div className="max-w-4xl mx-auto flex justify-end">
             <button
                disabled={selectedOption === null}
                onClick={handleAnswer}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all transform active:scale-95"
             >
                Next Question →
             </button>
        </div>
      </div>
    </div>
  );
};
