

import React, { useState, useEffect } from 'react';
import { GlobalStats, Domain, StudyMode, Difficulty } from '../types';

interface DashboardProps {
  stats: GlobalStats;
  onStart: (mode: StudyMode) => void;
  selectedDomain: Domain | 'All';
  onDomainChange: (d: Domain | 'All') => void;
  selectedDifficulty: Difficulty | 'All';
  onDifficultyChange: (d: Difficulty | 'All') => void;
  onSetGoal: (goal: number) => void;
  onOpenSettings: () => void;
  onOpenCareer: () => void;
  onUpdateWhy: (why: string) => void;
  onOpenPlan: () => void;
}

const MOTIVATIONAL_QUOTES = [
  "A 24 is just a stepping stone to a 25+. You are closer than you think.",
  "You don't have to be perfect, you just have to be consistent.",
  "Every question you study is one less surprise on exam day.",
  "The RD credential is waiting for you. Keep pushing.",
  "Rest if you must, but don't you quit.",
  "Your future patients need your expertise. Do it for them.",
  "Success is the sum of small efforts, repeated day in and day out."
];

export const Dashboard: React.FC<DashboardProps> = ({ 
  stats, 
  onStart, 
  selectedDomain, 
  onDomainChange, 
  selectedDifficulty,
  onDifficultyChange,
  onSetGoal,
  onOpenSettings,
  onOpenCareer,
  onUpdateWhy,
  onOpenPlan
}) => {
  const [quote, setQuote] = useState("");
  const [isEditingWhy, setIsEditingWhy] = useState(false);
  const [whyInput, setWhyInput] = useState(stats.personalWhy || "");

  useEffect(() => {
    // Random quote on mount
    setQuote(MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]);
  }, []);

  const handleSaveWhy = () => {
    onUpdateWhy(whyInput);
    setIsEditingWhy(false);
  };

  const goalPercentage = Math.min((stats.questionsStudiedToday / stats.dailyGoal) * 100, 100);
  const goalReached = stats.questionsStudiedToday >= stats.dailyGoal;

  // Weekly Chart Data Preparation
  const getWeeklyData = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const data = [];
    let maxCount = 5; // min scale

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const count = stats.dailyHistory[dateStr] || 0;
      if (count > maxCount) maxCount = count;
      
      data.push({
        day: days[d.getDay()],
        count: count,
        isToday: i === 0
      });
    }
    return { data, maxCount };
  };
  
  const { data: weeklyData, maxCount } = getWeeklyData();

  // Calculate hours for display
  const hoursStudied = Math.floor((stats.totalMinutesStudied || 0) / 60);
  const minutesStudied = (stats.totalMinutesStudied || 0) % 60;

  // Determine Current Plan Task
  let currentPlanDay = null;
  let planProgress = 0;
  if (stats.studyPlan) {
      currentPlanDay = stats.studyPlan.find(d => !d.tasks.every(t => t.completed));
      if (!currentPlanDay) {
          // All done? show last
          currentPlanDay = stats.studyPlan[stats.studyPlan.length - 1];
      }
      const totalTasks = stats.studyPlan.reduce((acc, day) => acc + day.tasks.length, 0);
      const completedTasks = stats.studyPlan.reduce((acc, day) => acc + day.tasks.filter(t => t.completed).length, 0);
      planProgress = Math.round((completedTasks / totalTasks) * 100);
  }

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto px-4 py-8 overflow-y-auto no-scrollbar">
      <header className="mb-8 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-indigo-900 mb-2 tracking-tight">
            RD Exam <span className="text-indigo-600">Buddy</span>
          </h1>
          <p className="text-slate-500 text-lg">Master the Registered Dietitian exam, one day at a time.</p>
        </div>
        <div className="flex gap-2">
           <button 
            onClick={onOpenCareer}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-100 transition-colors border border-indigo-100"
            aria-label="Career Insights"
          >
            <span className="text-lg">🚀</span>
            <span className="hidden md:inline">Career</span>
          </button>
          <button 
            onClick={onOpenPlan}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
          >
            <span className="text-lg">📅</span>
            <span className="hidden md:inline">Study Plan</span>
          </button>
          <button 
            onClick={onOpenSettings}
            className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm hover:bg-slate-50 text-slate-600 transition-all"
            aria-label="Settings"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 5.343c-.2.2-.404.42-.665.645a11.07 11.07 0 00-2.233 2.233c-.226.261-.446.465-.645.665L4.098 9.228c-.904.151-1.566.933-1.566 1.85v2.161c0 .917.662 1.699 1.566 1.85l1.459.243c.2.2.404.42.665.645 1.11 1.24 2.328 2.03 3.619 2.333.262.064.553.08.82.08.51 0 1.025-.061 1.413-.423l.243 1.459c.151.904.933 1.566 1.85 1.566h2.161c.917 0 1.699-.662 1.85-1.566l.243-1.459c.388.362.903.423 1.413.423.267 0 .558-.016.82-.08 1.291-.303 2.509-1.093 3.619-2.333.26-.225.464-.445.665-.645l1.459-.243c.904-.151 1.566-.933 1.566-1.85v-2.161c0-.917-.662-1.699-1.566-1.85l-1.459-.243c-.2-.2-.404-.42-.665-.645a11.07 11.07 0 00-2.233-2.233c-.226-.261-.446-.465-.645-.665l-.243-1.459c-.151-.904-.933-1.566-1.85-1.566h-2.161zM11.25 8a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3z" clipRule="evenodd" display="none"/>
              <path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.043.044a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.06c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.044.043a1.875 1.875 0 002.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.06c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.043-.044a1.875 1.875 0 00.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.092a1.875 1.875 0 001.566-1.849v-.06c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.044-.043a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.092-.55a1.875 1.875 0 00-1.566-1.849h-.06zM12 15a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </header>

      {/* Motivation & Quote Section */}
      <div className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 border border-orange-200 relative overflow-hidden flex flex-col justify-center">
          <div className="relative z-10">
             <h3 className="text-orange-800 font-bold text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
               Daily Wisdom
             </h3>
             <p className="text-xl font-medium text-slate-800 italic">"{quote}"</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-slate-700 text-sm uppercase tracking-wide">My "Why"</h3>
            <button 
              onClick={() => isEditingWhy ? handleSaveWhy() : setIsEditingWhy(true)}
              className="text-xs font-bold text-indigo-600 hover:underline"
            >
              {isEditingWhy ? "Save" : "Edit"}
            </button>
          </div>
          
          {isEditingWhy ? (
             <textarea
               value={whyInput}
               onChange={(e) => setWhyInput(e.target.value)}
               placeholder="I want to pass because..."
               className="w-full h-full min-h-[80px] p-2 text-sm border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none resize-none bg-slate-50"
             />
          ) : (
            <div className="flex-1 flex items-center">
               <p className={stats.personalWhy ? "text-slate-600 font-medium" : "text-slate-400 italic text-sm"}>
                 {stats.personalWhy || "Tap 'Edit' to remind yourself why you started this journey..."}
               </p>
            </div>
          )}
        </div>
      </div>

      {/* Study Plan Status Bar */}
      {currentPlanDay && (
        <div className="mb-8 bg-white border border-indigo-100 rounded-2xl p-6 shadow-sm relative overflow-hidden group cursor-pointer" onClick={onOpenPlan}>
             <div className="absolute left-0 top-0 bottom-0 w-2 bg-indigo-500"></div>
             <div className="flex justify-between items-center relative z-10">
                 <div>
                     <h3 className="text-indigo-900 font-bold text-lg">Today's Mission: {currentPlanDay.focus}</h3>
                     <p className="text-slate-500 text-sm">
                         {currentPlanDay.tasks.filter(t => !t.completed).length} tasks remaining • Day {currentPlanDay.dayNumber}
                     </p>
                 </div>
                 <div className="text-right">
                     <div className="text-2xl font-bold text-indigo-600">{planProgress}%</div>
                     <div className="text-xs text-slate-400 uppercase font-bold">Plan Completion</div>
                 </div>
             </div>
             <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-sm font-bold">View Plan →</span>
             </div>
        </div>
      )}

      {/* Daily Goal Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-6 text-white mb-8 shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 w-full">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              🎯 Daily Study Goal
              {goalReached && <span className="animate-bounce">🎉</span>}
            </h2>
            
            <div className="w-full bg-black/20 rounded-full h-4 mb-2 backdrop-blur-sm">
              <div 
                className="bg-white h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${goalPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm font-medium opacity-90">
              <span>{stats.questionsStudiedToday} answered today</span>
              <span>Target: {stats.dailyGoal}</span>
            </div>
          </div>

          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 flex flex-col items-center min-w-[140px]">
            <span className="text-xs uppercase font-bold tracking-wider opacity-80 mb-2">Set Target</span>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => onSetGoal(Math.max(5, stats.dailyGoal - 5))}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center font-bold"
              >-</button>
              <span className="text-xl font-bold w-8 text-center">{stats.dailyGoal}</span>
              <button 
                onClick={() => onSetGoal(stats.dailyGoal + 5)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center font-bold"
              >+</button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Left Column: Stats & Weekly Chart */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="text-3xl font-bold text-indigo-600">{stats.questionsStudied}</div>
              <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mt-1">Total Done</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="text-3xl font-bold text-green-500">{stats.questionsCorrect}</div>
              <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mt-1">Total Correct</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="text-3xl font-bold text-orange-500">{stats.missedQuestions.length}</div>
              <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mt-1">Needs Review</div>
            </div>
             <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="text-3xl font-bold text-purple-500">
                {hoursStudied}<span className="text-base font-normal text-purple-300">h</span>
                {minutesStudied}<span className="text-base font-normal text-purple-300">m</span>
              </div>
              <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mt-1">Time Invested</div>
            </div>
          </div>

          {/* Weekly Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Weekly Activity</h3>
            <div className="flex items-end justify-between h-32 gap-2">
              {weeklyData.map((day, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="relative w-full flex items-end justify-center h-full">
                    {/* Tooltip */}
                    <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs py-1 px-2 rounded mb-1">
                      {day.count}
                    </div>
                    {/* Bar */}
                    <div 
                      className={`w-full max-w-[30px] rounded-t-lg transition-all duration-500 ${
                        day.isToday ? 'bg-indigo-500' : 'bg-indigo-200 hover:bg-indigo-300'
                      }`}
                      style={{ height: `${Math.max((day.count / maxCount) * 100, 4)}%` }}
                    ></div>
                  </div>
                  <span className={`text-xs font-medium ${day.isToday ? 'text-indigo-600' : 'text-slate-400'}`}>
                    {day.day}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Domain Breakdown */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Domain Mastery</h3>
          <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
            {Object.values(Domain).map((domain) => {
              const domainStat = stats.domainStats[domain] || { seen: 0, correct: 0 };
              const accuracy = domainStat.seen > 0 
                ? Math.round((domainStat.correct / domainStat.seen) * 100) 
                : 0;
              
              let colorClass = 'bg-slate-200';
              if (domainStat.seen > 0) {
                if (accuracy >= 80) colorClass = 'bg-green-500';
                else if (accuracy >= 60) colorClass = 'bg-yellow-500';
                else colorClass = 'bg-red-400';
              }

              return (
                <div key={domain}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 truncate pr-2">{domain}</span>
                    <span className="text-slate-400 text-xs">{accuracy}% ({domainStat.seen})</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${colorClass}`}
                      style={{ width: `${domainStat.seen === 0 ? 0 : accuracy}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mode Selection */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Start Studying</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <button 
            onClick={() => onStart('flashcards')}
            className="group relative overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-left"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div className="text-4xl mb-3">🎴</div>
            <h3 className="text-xl font-bold mb-1">Flashcards</h3>
            <p className="text-blue-100 text-sm">Classic flip-card review.</p>
          </button>

          <button 
             onClick={() => onStart('quiz')}
             className="group relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-left"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div className="text-4xl mb-3">📝</div>
            <h3 className="text-xl font-bold mb-1">Practice Quiz</h3>
            <p className="text-emerald-100 text-sm">Multiple choice with feedback.</p>
          </button>

          <button 
             onClick={() => onStart('review')}
             disabled={stats.missedQuestions.length === 0}
             className={`group relative overflow-hidden rounded-2xl p-6 shadow-lg text-left transition-all ${
               stats.missedQuestions.length === 0 
               ? 'bg-slate-200 cursor-not-allowed' 
               : 'bg-gradient-to-br from-rose-500 to-pink-600 text-white hover:shadow-xl hover:-translate-y-1'
             }`}
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div className="text-4xl mb-3">📊</div>
            <h3 className={`text-xl font-bold mb-1 ${stats.missedQuestions.length === 0 ? 'text-slate-400' : ''}`}>Smart Review</h3>
            <p className={`text-sm ${stats.missedQuestions.length === 0 ? 'text-slate-400' : 'text-rose-100'}`}>
              {stats.missedQuestions.length === 0 
                ? "No review needed yet." 
                : `Prioritize ${stats.missedQuestions.length} missed items.`}
            </p>
          </button>

          <button 
             onClick={() => onStart('mock')}
             className="group relative overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-left"
          >
             <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
             <div className="text-4xl mb-3">🎓</div>
             <h3 className="text-xl font-bold mb-1">Simulate Exam</h3>
             <p className="text-slate-300 text-sm">125 Questions, Adaptive, 3 Hours.</p>
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-slate-400 text-sm">
        <p>© 2024 RD Exam Buddy. Helping you pass with confidence.</p>
      </div>
    </div>
  );
};
