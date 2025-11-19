
import React from 'react';
import { GlobalStats, Domain } from '../types';

interface CareerInsightsProps {
  stats: GlobalStats;
  onBack: () => void;
}

// Job definitions with logic to match domains
const CAREER_PATHS = [
  {
    title: "Clinical Dietitian (Inpatient/Acute)",
    description: "You excel in complex clinical scenarios and biochemistry. The hospital setting, handling critical care, TPN/PPN, and disease-specific MNT, would be a stimulating environment for you.",
    primaryDomains: [Domain.CLINICAL, Domain.BIOCHEMISTRY, Domain.INTERVENTION],
    matchThreshold: 0.65, // 65% accuracy required
    icon: "🏥"
  },
  {
    title: "Food Service Director",
    description: "Your grasp of management, budgeting, and food safety regulations is outstanding. You have the leadership potential to manage large-scale operations, schools, or hospital food systems.",
    primaryDomains: [Domain.FOODSERVICE, Domain.MANAGEMENT],
    matchThreshold: 0.65,
    icon: "🍳"
  },
  {
    title: "Private Practice / Counseling",
    description: "Your strengths in Assessment and Intervention suggest you would thrive working one-on-one with clients. You understand how to diagnose problems and tailor interventions effectively.",
    primaryDomains: [Domain.ASSESSMENT, Domain.DIAGNOSIS, Domain.INTERVENTION],
    matchThreshold: 0.65,
    icon: "🤝"
  },
  {
    title: "Clinical Nutrition Manager",
    description: "A rare blend of Clinical expertise and Management skills. You are well-suited to lead a team of dietitians while understanding the clinical complexities they face.",
    primaryDomains: [Domain.CLINICAL, Domain.MANAGEMENT],
    matchThreshold: 0.60,
    icon: "📊"
  },
  {
    title: "Renal or Diabetes Specialist",
    description: "You show high proficiency in Monitoring & Evaluation and Clinical details. These specialized fields require the detailed tracking and adjustment skills you possess.",
    primaryDomains: [Domain.MONITORING, Domain.CLINICAL],
    matchThreshold: 0.70,
    icon: "🧬"
  }
];

export const CareerInsights: React.FC<CareerInsightsProps> = ({ stats, onBack }) => {
  // Calculate match scores
  const recommendations = CAREER_PATHS.map(job => {
    let totalScore = 0;
    let domainsCounted = 0;

    job.primaryDomains.forEach(domain => {
      const domainStat = stats.domainStats[domain];
      if (domainStat && domainStat.seen > 5) { // Only count if they've done at least 5 questions
        totalScore += (domainStat.correct / domainStat.seen);
        domainsCounted++;
      }
    });

    const averageAccuracy = domainsCounted > 0 ? totalScore / domainsCounted : 0;
    const isMatch = domainsCounted > 0 && averageAccuracy >= job.matchThreshold;

    return { ...job, averageAccuracy, isMatch, domainsCounted };
  }).sort((a, b) => b.averageAccuracy - a.averageAccuracy);

  const topMatches = recommendations.filter(r => r.isMatch);
  const developing = recommendations.filter(r => !r.isMatch);

  return (
    <div className="h-full flex flex-col max-w-4xl mx-auto px-4 py-8 overflow-y-auto no-scrollbar">
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className="mr-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Career Explorer</h1>
          <p className="text-slate-500 text-sm">Job recommendations based on your study strengths.</p>
        </div>
      </div>

      <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg mb-8">
        <h2 className="text-xl font-bold mb-2">Your Future as an RD</h2>
        <p className="text-indigo-100 opacity-90 mb-4">
          Based on your performance across {stats.questionsStudied} questions, we've analyzed which Dietetic practice groups might be your natural fit. 
          Keep studying to unlock more potential!
        </p>
        <div className="inline-block bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm text-sm font-semibold">
          Time Invested: {Math.round(stats.totalMinutesStudied / 60 * 10) / 10} Hours
        </div>
      </div>

      {stats.questionsStudied < 20 ? (
        <div className="text-center py-12 bg-white rounded-2xl border-dashed border-2 border-slate-200">
          <div className="text-4xl mb-4">🔮</div>
          <h3 className="text-lg font-bold text-slate-700 mb-2">Not Enough Data Yet</h3>
          <p className="text-slate-500 max-w-md mx-auto">
            Complete at least 20 questions across different domains to unlock your personalized career insights!
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          <section>
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-green-500">★</span> Top Matches
            </h3>
            {topMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topMatches.map((job, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-4xl p-2 bg-green-50 rounded-xl">{job.icon}</div>
                      <div className="text-green-600 font-bold text-sm px-3 py-1 bg-green-50 rounded-full">
                        {Math.round(job.averageAccuracy * 100)}% Match
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">{job.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.primaryDomains.map(d => (
                        <span key={d} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                          {d.split(' ')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center">
                <p className="text-slate-500">Keep studying! No strong matches found yet (need >65% accuracy in specific domains).</p>
              </div>
            )}
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-slate-400">↗</span> Areas to Develop
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {developing.map((job, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 opacity-75 hover:opacity-100 transition-opacity">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-3xl opacity-50">{job.icon}</div>
                    {job.domainsCounted > 0 && (
                      <div className="text-slate-500 font-medium text-xs px-3 py-1 bg-slate-200 rounded-full">
                        {Math.round(job.averageAccuracy * 100)}% Proficiency
                      </div>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-slate-700 mb-2">{job.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
