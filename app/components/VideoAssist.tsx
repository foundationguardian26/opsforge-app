'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import TagRenderer from './TagRenderer';

type KioskState = 'idle' | 'active' | 'alert-sent';

interface Sop {
  id: number;
  title: string;
  description: string | null;
}

const ANDON_CATEGORIES = [
  { label: 'Machine Fault',  color: 'red'  },
  { label: 'Missing Parts',  color: 'gold' },
  { label: 'Quality Defect', color: 'gold' },
  { label: 'Safety Hazard',  color: 'red'  },
];

export default function StationPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [kioskState, setKioskState] = useState<KioskState>('idle');
  const [sop, setSop] = useState<Sop | null>(null);
  const [activeAlertId, setActiveAlertId] = useState<string | null>(null);
  const [showAndonModal, setShowAndonModal] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) return;
    
    const fetchSop = async () => {
      setIsLoading(true);
      // Fetching your original data structure exactly as it was
      const { data } = await supabase
        .from('sops')
        .select('id, title, description')
        .limit(1)
        .maybeSingle();

      if (data) {
        setSop(data);
      }
      setKioskState('active');
      setIsLoading(false);
    };
    
    fetchSop();
  }, [isAuthenticated]);

  const handleAndonCategory = async (category: string) => {
    try {
      const { data, error } = await supabase
        .from('quality_alerts')
        .insert([{ 
          sop_id: sop?.id || null, 
          issue_description: `Andon: ${category}`, 
          status: 'Open' 
        }])
        .select('id')
        .single();

      if (error) throw error;
      
      setActiveAlertId(String(data.id));
      setKioskState('alert-sent');
      setShowAndonModal(false);
    } catch (e) {
      console.error("Critical Failure:", e);
      alert("Database error: Check SQL policies in Supabase.");
    }
  };

  // 1. ORIGINAL IDLE STATE
  if (kioskState === 'idle') {
    return (
      <div className="h-screen bg-[#121212] flex items-center justify-center cursor-pointer" onClick={() => setIsAuthenticated(true)}>
        <p className="text-[#D4AF37] text-6xl font-black uppercase tracking-widest border-4 border-[#D4AF37] p-10 rounded-xl hover:bg-[#D4AF37]/10 transition-colors">
          Tap Badge
        </p>
      </div>
    );
  }

  // 2. ORIGINAL ACTIVE / ALERT STATE
  return (
    <div className="h-screen bg-[#121212] flex flex-col relative">
      
      {/* HEADER */}
      <header className={`p-6 border-b-4 flex justify-between items-center shadow-lg ${kioskState === 'alert-sent' ? 'bg-red-950 border-red-600' : 'bg-black border-[#D4AF37]'}`}>
        <div>
          <h1 className="text-white text-4xl font-black uppercase tracking-wider">
            {kioskState === 'alert-sent' ? '🚨 LINE HALTED: ALERT ACTIVE' : sop?.title || 'STATION ACTIVE'}
          </h1>
          {kioskState !== 'alert-sent' && (
            <p className="text-zinc-400 font-bold uppercase tracking-widest mt-1">Standard Work Instruction</p>
          )}
        </div>
      </header>

      {/* MAIN SOP CONTENT (Using your original TagRenderer) */}
      <main className="flex-1 p-8 text-white overflow-y-auto">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-[#D4AF37] text-2xl font-bold uppercase animate-pulse">Loading SOP...</p>
          </div>
        ) : (
          <div className="bg-black border border-zinc-800 rounded-xl p-8 shadow-2xl min-h-full">
            <TagRenderer content={sop?.description || 'No SOP assigned to this station.'} />
          </div>
        )}
      </main>

      {/* ORIGINAL ANDON CORD */}
      {kioskState !== 'alert-sent' && (
        <button 
          onClick={() => setShowAndonModal(true)} 
          className="bg-red-700 hover:bg-red-600 p-8 text-white font-black text-4xl uppercase tracking-widest w-full transition-colors shadow-[0_-10px_30px_rgba(185,28,28,0.2)]"
        >
          Pull Andon Cord
        </button>
      )}

      {/* ORIGINAL ANDON MODAL */}
      {showAndonModal && (
        <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 z-50 backdrop-blur-sm">
          <h2 className="text-white text-5xl font-black uppercase tracking-widest text-red-500 mb-4 animate-pulse">Select Incident Type</h2>
          <div className="grid grid-cols-2 gap-6 w-full max-w-4xl px-8">
            {ANDON_CATEGORIES.map(c => (
              <button 
                key={c.label} 
                onClick={() => handleAndonCategory(c.label)} 
                className="bg-[#D4AF37] hover:bg-yellow-400 text-black p-10 text-3xl font-black uppercase tracking-wider rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                {c.label}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setShowAndonModal(false)} 
            className="text-zinc-400 mt-12 uppercase text-xl font-bold tracking-widest hover:text-white transition-colors border-b-2 border-transparent hover:border-white pb-1"
          >
            Cancel & Return
          </button>
        </div>
      )}
      
    </div>
  );
}