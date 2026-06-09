'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function AndonButton({ sopId, sopTitle }: { sopId: number, sopTitle: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [issue, setIssue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const pullTheCord = async () => {
    setIsSubmitting(true);
    
    // Send the alert to the database
    const { error } = await supabase
      .from('quality_alerts')
      .insert([{ sop_id: sopId, issue_description: issue }]);

    if (error) {
      alert("Failed to send alert.");
      setIsSubmitting(false);
    } else {
      setSubmitted(true);
      setIsOpen(false);
    }
  };

  if (submitted) {
    return (
      <div className="mt-8 bg-red-950/50 border border-red-500 text-red-500 p-4 rounded-lg text-center font-bold animate-pulse uppercase tracking-widest shadow-[0_0_15px_rgba(239,68,68,0.5)]">
        ⚠️ Quality Alert Logged For Manager Review ⚠️
      </div>
    );
  }

  return (
    <div className="mt-8 border-t border-zinc-800 pt-8">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg shadow-lg transition uppercase tracking-widest border border-red-500"
        >
          🚨 Trigger Andon / Report Issue
        </button>
      ) : (
        <div className="bg-zinc-900 border border-red-600 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-red-500 mb-2">Initiate Quality Alert</h3>
          <p className="text-zinc-400 mb-4 text-sm">You are halting standard work for: <strong className="text-white">{sopTitle}</strong>. Please detail the exact safety hazard, defect, or tooling failure below.</p>
          
          <textarea 
            rows={4}
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            placeholder="e.g., The pressure gauge is reading 50 PSI below the required standard..."
            className="w-full bg-black border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-red-500 transition resize-none mb-4"
          />
          
          <div className="flex gap-4">
            <button 
              onClick={pullTheCord}
              disabled={isSubmitting || !issue}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition disabled:opacity-50"
            >
              {isSubmitting ? 'Transmitting...' : 'Submit Alert'}
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}