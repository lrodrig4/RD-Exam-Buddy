
import React from 'react';
import { UserSettings, Difficulty } from '../types';

interface SettingsViewProps {
  settings: UserSettings;
  onSave: (newSettings: UserSettings) => void;
  onBack: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({ settings, onSave, onBack }) => {
  const handleChange = (key: keyof UserSettings, value: any) => {
    onSave({ ...settings, [key]: value });
  };

  return (
    <div className="h-full max-w-2xl mx-auto px-4 py-8 flex flex-col">
      <div className="flex items-center mb-8">
        <button 
          onClick={onBack}
          className="mr-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-slate-800">Settings</h1>
      </div>

      <div className="space-y-6 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        
        {/* Animation Speed */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-3">Flashcard Animation Speed</label>
          <div className="grid grid-cols-3 gap-3">
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <button
                key={speed}
                onClick={() => handleChange('animationSpeed', speed)}
                className={`py-3 px-4 rounded-xl border-2 font-medium capitalize transition-all ${
                  settings.animationSpeed === speed 
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                    : 'border-slate-200 text-slate-500 hover:border-indigo-200'
                }`}
              >
                {speed}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-400">Controls how fast the cards flip.</p>
        </div>

        <hr className="border-slate-100" />

        {/* Quiz Timer */}
        <div className="flex items-center justify-between">
          <div>
            <label className="block text-sm font-bold text-slate-700">Quiz Timer</label>
            <p className="text-xs text-slate-400 mt-1">Show elapsed time during quizzes.</p>
          </div>
          <button 
            onClick={() => handleChange('enableQuizTimer', !settings.enableQuizTimer)}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
              settings.enableQuizTimer ? 'bg-indigo-600' : 'bg-slate-200'
            }`}
          >
            <span 
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                settings.enableQuizTimer ? 'translate-x-7' : 'translate-x-1'
              }`} 
            />
          </button>
        </div>

        <hr className="border-slate-100" />

        {/* Default Difficulty */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-3">Preferred Difficulty</label>
          <select 
            value={settings.defaultDifficulty}
            onChange={(e) => handleChange('defaultDifficulty', e.target.value)}
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <p className="text-xs text-slate-400 mt-2">This will be the default filter selected on the dashboard.</p>
        </div>
      </div>

      <div className="mt-auto pt-8">
        <button 
          onClick={onSave} // Simply saves and goes back
          className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-all"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};
