'use client';

import { useState, useRef } from 'react';
import { supabase } from '../../lib/supabase';

export default function AndonButton({ sopId, sopTitle }: { sopId: number, sopTitle: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [issue, setIssue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [micError, setMicError] = useState(''); // NEW: State to hold microphone errors
  
  const recognitionRef = useRef<any>(null);

  const startListening = () => {
    setMicError(''); // Clear old errors
    
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setMicError("Voice dictation is not supported on this browser. Please try Chrome, Edge, or Safari.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      if (finalTranscript) {
        setIssue((prev) => prev ? prev + ' ' + finalTranscript : finalTranscript);
      }
    };

    // NEW: Catch the exact error and display it to the user
    recognition.onerror = (event: any) => {
      console.error("Microphone error:", event.error);
      if (event.error === 'not-allowed') {
        setMicError("Microphone blocked. If you are using Brave, please switch to Chrome or Edge.");
      } else if (event.error === 'network') {
        setMicError("Network error. Voice recognition requires an active internet connection.");
      } else if (event.error === 'no-speech') {
        // Ignore the "no-speech" error so it doesn't clutter the screen
      } else {
        setMicError(`Mic Error: ${event.error}. Please type manually.`);
      }
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    try {
      recognition.start();
    } catch (e) {
      console.error("Failed to start recognition", e);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  const pullTheCord = async () => {
    setIsSubmitting(true);

    const { data: { user } } = await supabase.auth.getUser();

    const { error } = await supabase
      .from('quality_alerts')
      .insert([{ sop_id: sopId, issue_description: issue, reporter_id: user?.id ?? null }]);

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
          <p className="text-zinc-400 mb-6 text-sm">You are halting standard work for: <strong className="text-white">{sopTitle}</strong>.</p>
          
          <div className="flex justify-between items-end mb-2">
            <label className="text-zinc-300 font-medium text-sm">Describe the hazard or defect:</label>
            <button
              type="button"
              onClick={isListening ? stopListening : startListening}
              className={`px-4 py-2 rounded font-bold text-sm transition flex items-center gap-2 shadow-lg ${
                isListening 
                  ? 'bg-red-600 text-white animate-pulse border border-red-400' 
                  : 'bg-[#D4AF37] text-black hover:bg-yellow-500'
              }`}
            >
              {isListening ? '🛑 Stop Recording' : '🎤 Tap to Speak'}
            </button>
          </div>

          {/* NEW: Displays the specific error to the user if the mic fails */}
          {micError && (
            <div className="bg-red-950 border border-red-500 text-red-500 p-2 rounded mb-4 text-xs font-bold">
              {micError}
            </div>
          )}

          <textarea 
            rows={4}
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            placeholder="Type manually or tap the microphone to dictate..."
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