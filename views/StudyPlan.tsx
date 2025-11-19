
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { GlobalStats, UserStudyProfile, StudyDay, StudyTask, Domain } from '../types';

interface StudyPlanProps {
  stats: GlobalStats;
  onSavePlan: (profile: UserStudyProfile, plan: StudyDay[]) => void;
  onUpdateTask: (dayIndex: number, taskId: string, completed: boolean) => void;
  onBack: () => void;
  onStartTask: (task: StudyTask) => void;
}

const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const StudyPlan: React.FC<StudyPlanProps> = ({ stats, onSavePlan, onUpdateTask, onBack, onStartTask }) => {
  // If plan exists, show view mode. Else show questionnaire.
  const [mode, setMode] = useState<'view' | 'create'>(stats.studyPlan ? 'view' : 'create');
  
  // Form State
  const [examDate, setExamDate] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>(["Mon", "Tue", "Wed", "Thu", "Fri"]);
  const [hoursPerDay, setHoursPerDay] = useState(2);
  const [stressLevel, setStressLevel] = useState<'Low'|'Medium'|'High'>('Medium');
  
  // Loading State
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const generatePlan = async () => {
    if (selectedDays.length === 0) {
      setError("Please select at least one study day.");
      return;
    }

    setGenerating(true);
    setError(null);

    // Fallback logic if API fails or not present
    const createFallbackPlan = (): StudyDay[] => {
        const plan: StudyDay[] = [];
        const domains = Object.values(Domain);
        // Simple 4 week rotation
        let currentDay = 1;
        for(let week=1; week<=4; week++) {
            for(const dayName of selectedDays) {
                const domainIndex = (currentDay - 1) % domains.length;
                const domain = domains[domainIndex];
                
                plan.push({
                    dayNumber: currentDay,
                    weekNumber: week,
                    focus: domain,
                    completed: false,
                    tasks: [
                        { id: `w${week}d${currentDay}t1`, description: `Review ${domain} concepts`, completed: false, type: 'read', targetDomain: domain },
                        { id: `w${week}d${currentDay}t2`, description: `Take 20 question quiz on ${domain}`, completed: false, type: 'quiz', targetDomain: domain, questionCount: 20 },
                        { id: `w${week}d${currentDay}t3`, description: `Review missed questions`, completed: false, type: 'flashcards' }
                    ]
                });
                currentDay++;
            }
        }
        return plan;
    };

    try {
        let plan: StudyDay[] = [];
        
        if (process.env.API_KEY) {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            // Find weak areas
            const weakDomains = Object.keys(stats.domainStats).filter(d => {
                const s = stats.domainStats[d];
                return (s.correct / s.seen) < 0.6;
            });

            const prompt = `
                Act as an expert RD Exam Tutor. Create a JSON study plan for a student.
                Exam Date: ${examDate || 'Undecided'}
                Hours/Day: ${hoursPerDay}
                Available Days: ${selectedDays.join(', ')}
                Stress Level: ${stressLevel}
                Weak Areas: ${weakDomains.join(', ') || 'None specifically yet'}
                
                Return a JSON ARRAY of "StudyDay" objects for the next 4 weeks (or less if exam is sooner).
                Do not include markdown formatting like \`\`\`json. Just the raw JSON array.
                
                Format:
                [
                    {
                        "dayNumber": 1,
                        "weekNumber": 1,
                        "focus": "Domain Name or Topic",
                        "tasks": [
                             { "id": "t1", "description": "Task description", "type": "quiz|read|flashcards", "questionCount": 20, "targetDomain": "Nutrition Assessment" }
                        ]
                    }
                ]
                
                Make the plan encouraging. Include rest days if Stress is High. Mix domains.
            `;

            const result = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: { responseMimeType: "application/json" }
            });

            const text = result.text;
            if (text) {
                try {
                    plan = JSON.parse(text);
                    // Hydrate tasks with completed: false
                    plan = plan.map(day => ({
                        ...day,
                        completed: false,
                        tasks: day.tasks.map(t => ({ ...t, completed: false, id: Math.random().toString(36).substr(2, 9) }))
                    }));
                } catch (e) {
                    console.error("JSON Parse error", e);
                    plan = createFallbackPlan();
                }
            } else {
                plan = createFallbackPlan();
            }
        } else {
            // No API Key, use fallback
             // Simulate delay
            await new Promise(r => setTimeout(r, 1500));
            plan = createFallbackPlan();
        }

        const profile: UserStudyProfile = {
            examDate,
            daysPerWeek: selectedDays,
            hoursPerDay,
            stressLevel,
            confidenceLevel: 'Medium',
            generatedAt: Date.now()
        };

        onSavePlan(profile, plan);
        setMode('view');

    } catch (err) {
        console.error(err);
        setError("Something went wrong generating the plan. Using a standard template instead.");
        const plan = createFallbackPlan();
        const profile: UserStudyProfile = {
            examDate,
            daysPerWeek: selectedDays,
            hoursPerDay,
            stressLevel,
            confidenceLevel: 'Medium',
            generatedAt: Date.now()
        };
        onSavePlan(profile, plan);
        setMode('view');
    } finally {
        setGenerating(false);
    }
  };

  // --- RENDER: Create Mode ---
  if (mode === 'create') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 h-full overflow-y-auto no-scrollbar">
        <button onClick={onBack} className="mb-4 text-slate-500 hover:text-slate-800 flex items-center gap-2">
          ← Back to Dashboard
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="bg-indigo-600 p-8 text-white">
                <h1 className="text-3xl font-bold mb-2">Let's Build Your Roadmap 🗺️</h1>
                <p className="text-indigo-100 text-lg">Tell us about your schedule, and we'll create a personalized plan to help you pass without burning out.</p>
            </div>

            <div className="p-8 space-y-8">
                {/* Question 1 */}
                <div>
                    <label className="block text-lg font-bold text-slate-800 mb-2">When is your exam?</label>
                    <input 
                        type="date" 
                        value={examDate}
                        onChange={(e) => setExamDate(e.target.value)}
                        className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    <p className="text-sm text-slate-500 mt-1">Leave blank if you haven't scheduled it yet.</p>
                </div>

                {/* Question 2 */}
                <div>
                    <label className="block text-lg font-bold text-slate-800 mb-3">Which days can you study?</label>
                    <div className="flex flex-wrap gap-3">
                        {DAYS_OF_WEEK.map(day => (
                            <button
                                key={day}
                                onClick={() => toggleDay(day)}
                                className={`w-12 h-12 rounded-full font-bold transition-all ${
                                    selectedDays.includes(day)
                                    ? 'bg-indigo-600 text-white shadow-md transform scale-110'
                                    : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                                }`}
                            >
                                {day[0]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Question 3 */}
                <div>
                    <label className="block text-lg font-bold text-slate-800 mb-2">How many hours per day?</label>
                    <div className="flex items-center gap-4">
                        <input 
                            type="range" 
                            min="0.5" 
                            max="8" 
                            step="0.5"
                            value={hoursPerDay}
                            onChange={(e) => setHoursPerDay(parseFloat(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                        <span className="font-mono font-bold text-indigo-600 text-xl w-20 text-center">{hoursPerDay} hr</span>
                    </div>
                </div>

                 {/* Question 4 */}
                 <div>
                    <label className="block text-lg font-bold text-slate-800 mb-2">Current Stress Level?</label>
                    <div className="grid grid-cols-3 gap-4">
                        {(['Low', 'Medium', 'High'] as const).map(level => (
                            <button
                                key={level}
                                onClick={() => setStressLevel(level)}
                                className={`py-3 rounded-xl border-2 font-bold transition-all ${
                                    stressLevel === level
                                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                    : 'border-slate-200 text-slate-500 hover:border-indigo-200'
                                }`}
                            >
                                {level === 'Low' ? '😎 Low' : level === 'Medium' ? '😐 Medium' : '😰 High'}
                            </button>
                        ))}
                    </div>
                </div>

                {error && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100">
                        {error}
                    </div>
                )}

                <button 
                    onClick={generatePlan}
                    disabled={generating}
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xl rounded-xl shadow-lg transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-wait"
                >
                    {generating ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Designing Plan...
                        </span>
                    ) : "Generate My Plan ✨"}
                </button>
            </div>
        </div>
      </div>
    );
  }

  // --- RENDER: View Mode ---
  
  // Group by week
  const weeks: Record<number, StudyDay[]> = {};
  if (stats.studyPlan) {
      stats.studyPlan.forEach(day => {
          if (!weeks[day.weekNumber]) weeks[day.weekNumber] = [];
          weeks[day.weekNumber].push(day);
      });
  }

  return (
    <div className="h-full flex flex-col max-w-5xl mx-auto px-4 py-6 overflow-hidden">
      <header className="flex items-center justify-between mb-6 flex-shrink-0">
        <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-slate-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button>
            <div>
                <h1 className="text-2xl font-bold text-slate-800">My Study Plan</h1>
                <p className="text-slate-500 text-sm">
                    {stats.studyProfile?.hoursPerDay} hrs/day • {stats.studyProfile?.daysPerWeek.length} days/week
                </p>
            </div>
        </div>
        <button 
            onClick={() => {
                if(confirm("Are you sure you want to reset your plan? Progress will be lost.")) {
                    setMode('create');
                }
            }}
            className="text-sm text-red-500 font-medium hover:underline"
        >
            Reset Plan
        </button>
      </header>

      <div className="flex-1 overflow-y-auto pr-2 pb-10 custom-scrollbar space-y-8">
        {Object.keys(weeks).map(weekNum => (
            <div key={weekNum} className="animate-fade-in">
                <h3 className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-4 sticky top-0 bg-slate-50 py-2 z-10">
                    Week {weekNum}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {weeks[parseInt(weekNum)].map((day, idx) => {
                        const dayComplete = day.tasks.every(t => t.completed);
                        const dayProgress = Math.round((day.tasks.filter(t => t.completed).length / day.tasks.length) * 100);

                        return (
                            <div key={idx} className={`rounded-2xl p-5 border-2 transition-all ${
                                dayComplete 
                                ? 'bg-green-50 border-green-200 opacity-75' 
                                : 'bg-white border-slate-100 hover:border-indigo-200 shadow-sm hover:shadow-md'
                            }`}>
                                <div className="flex justify-between items-start mb-3">
                                    <span className="font-bold text-slate-400 text-xs uppercase">Day {day.dayNumber}</span>
                                    {dayComplete ? (
                                        <span className="text-green-600 bg-green-100 px-2 py-0.5 rounded-full text-xs font-bold">DONE</span>
                                    ) : (
                                        <span className="text-indigo-600 text-xs font-bold">{dayProgress}%</span>
                                    )}
                                </div>
                                <h4 className="font-bold text-slate-800 mb-4">{day.focus}</h4>
                                
                                <div className="space-y-3">
                                    {day.tasks.map(task => (
                                        <div key={task.id} className="flex items-start gap-3">
                                            <button 
                                                onClick={() => onUpdateTask(day.dayNumber - 1, task.id, !task.completed)}
                                                className={`mt-1 w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                                                    task.completed 
                                                    ? 'bg-green-500 border-green-500 text-white' 
                                                    : 'border-slate-300 hover:border-indigo-400'
                                                }`}
                                            >
                                                {task.completed && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                            </button>
                                            <div className="flex-1">
                                                <p className={`text-sm ${task.completed ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                                                    {task.description}
                                                </p>
                                                {!task.completed && (task.type === 'quiz' || task.type === 'flashcards') && (
                                                    <button 
                                                        onClick={() => onStartTask(task)}
                                                        className="mt-1 text-xs font-bold text-indigo-600 hover:underline"
                                                    >
                                                        Start Now →
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};
