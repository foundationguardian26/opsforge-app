'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';
import TagRenderer from '../../../components/TagRenderer';

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
  const { stationId } = useParams<{ stationId: string }>();

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

      const titleQuery = stationId.replaceAll('-', ' ');

      const { data } = await supabase
        .from('sops')
        .select('id, title, description')
        .ilike('title', `%${titleQuery}%`)
        .maybeSingle();

      if (data) setSop(data);
      setKioskState('active');
      setIsLoading(false);
    };

    fetchSop();
  }, [isAuthenticated, stationId]);

  const handleAndonCategory = async (category: string) => {
    try {
      const { data, error } = await supabase
        .from('quality_alerts')
        .insert([{
          sop_id: sop?.id || null,
          issue_description: `Andon: ${category}`,
          status: 'Open',
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

  // 1. IDLE STATE
  if (kioskState === 'idle') {
    return (
      <div className="h-screen bg-[#121212] flex items-center justify-center cursor-pointer" onClick={() => setIsAuthenticated(true)}>
        <div className="border-4 border-[#D4AF37] p-16 rounded-xl text-center hover:bg-[#D4AF37]/10 transition-colors">
            <p className="text-[#D4AF37] text-6xl font-black uppercase tracking-widest">Tap Badge</p>
            <p className="text-zinc-500 mt-4 uppercase font-bold tracking-widest">Operator Authentication</p>
        </div>
      </div>
    );
  }

  // 2. ACTIVE / ALERT STATE
  return (
    <div className="h-screen bg-[#121212] flex flex-col font-sans overflow-hidden">

      {/* HEADER */}
      <header className={`px-6 py-4 border-b border-zinc-800 flex justify-between items-start ${kioskState === 'alert-sent' ? 'bg-red-950' : 'bg-[#141414]'}`}>
        <div className="flex flex-col">
          <span className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase mb-1">
            {kioskState === 'alert-sent' ? 'SYSTEM ALERT' : 'Active Procedure'}
          </span>
          <h1 className={`${kioskState === 'alert-sent' ? 'text-red-500' : 'text-[#D4AF37]'} text-2xl font-black uppercase tracking-wide`}>
            {kioskState === 'alert-sent' ? '🚨 LINE HALTED: ALERT ACTIVE' : sop?.title}
          </h1>
        </div>

        <div className="flex items-center gap-4 mt-1">
          {kioskState !== 'alert-sent' && (
            <div className="flex items-center gap-2 px-3 py-1 bg-green-950/40 border border-green-900 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-green-500 text-[10px] font-bold tracking-widest uppercase">Station Active</span>
            </div>
          )}
          <button className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase hover:text-white transition-colors">
            Clock Out
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 text-white overflow-y-auto">
        {isLoading ? (
           <div className="flex justify-center items-center h-full">
             <p className="text-[#D4AF37] text-xl font-bold uppercase animate-pulse">Loading Standard Work...</p>
           </div>
        ) : (
           <TagRenderer content={sop?.description || ''} />
        )}
      </main>

      {/* FOOTER */}
      {kioskState !== 'alert-sent' && (
        <button
          onClick={() => setShowAndonModal(true)}
          className="w-full bg-[#E50000] hover:bg-red-700 text-white font-black text-2xl py-5 uppercase tracking-widest flex justify-center items-center gap-4 transition-colors"
        >
          🚨 PULL ANDON CORD — REPORT ISSUE
        </button>
      )}

      {/* MODAL */}
      {showAndonModal && (
        <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 z-50 backdrop-blur-sm">
          <h2 className="text-white text-5xl font-black uppercase tracking-widest text-red-500 mb-4 animate-pulse">Select Incident Type</h2>
          <div className="grid grid-cols-2 gap-6 w-full max-w-4xl px-8">
            {ANDON_CATEGORIES.map(c => (
              <button key={c.label} onClick={() => handleAndonCategory(c.label)} className="bg-[#D4AF37] hover:bg-yellow-400 text-black p-10 text-3xl font-black uppercase tracking-wider rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl">
                {c.label}
              </button>
            ))}
          </div>
          <button onClick={() => setShowAndonModal(false)} className="text-zinc-400 mt-12 uppercase font-bold tracking-widest hover:text-white transition-colors border-b-2 border-transparent hover:border-white pb-1">
            Cancel & Return
          </button>
        </div>
      )}
    </div>
  );
}
