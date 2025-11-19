import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

interface AITutorProps {
  question: string;
  answer: string;
  domain: string;
}

export const AITutor: React.FC<AITutorProps> = ({ question, answer, domain }) => {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAskAI = async () => {
    if (!process.env.API_KEY) {
      setError("API Key not configured. Please check your environment settings.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = "gemini-2.5-flash";
      
      const prompt = `
        You are an expert Registered Dietitian Exam tutor. 
        Please explain the following concept simply and clearly for a student struggling with formal study.
        
        Domain: ${domain}
        Question: ${question}
        Correct Answer: ${answer}
        
        Provide a concise explanation (max 3-4 sentences) of why this is the correct answer and a helpful mnemonic or memory tip if possible.
      `;

      const result = await ai.models.generateContent({
        model: model,
        contents: prompt,
      });
      
      setExplanation(result.text);
    } catch (err) {
      console.error("Gemini API Error:", err);
      setError("Sorry, I couldn't reach the AI tutor right now. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 w-full">
      {!explanation && !loading && (
        <button
          onClick={handleAskAI}
          className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
          Ask AI Tutor to Explain
        </button>
      )}

      {loading && (
        <div className="flex items-center justify-center p-4 text-indigo-600">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600 mr-2"></div>
          <span className="text-sm">Thinking...</span>
        </div>
      )}

      {error && (
        <div className="p-3 mt-2 text-sm text-red-600 bg-red-50 rounded-lg">
          {error}
        </div>
      )}

      {explanation && (
        <div className="p-4 mt-2 text-left bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-indigo-700 font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M16.5 6a3 3 0 11-6 0 3 3 0 016 0zM19 6a5.5 5.5 0 00-11 0C4.75 6 2 8.66 2 11.91V13a.75.75 0 001.5 0v-1.09c0-2.4 2.05-4.41 4.5-4.41h4a4.4 4.4 0 014.4 4.4V13a.75.75 0 001.5 0v-1.09c0-3.25-2.75-5.91-5.9-5.91zM5.25 15a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H5.25zM4.5 18.75a.75.75 0 000 1.5h15a.75.75 0 000-1.5H4.5z" />
            </svg>
            AI Tutor Explanation
          </div>
          <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">{explanation}</p>
        </div>
      )}
    </div>
  );
};