'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../../../lib/supabase';

interface Sop {
  id: number;
  title: string;
}

function toSlug(title: string): string {
  return title.toLowerCase().replaceAll(' ', '-');
}

export default function StationIndexPage() {
  const [sops, setSops] = useState<Sop[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSops = async () => {
      const { data } = await supabase
        .from('sops')
        .select('id, title')
        .order('id', { ascending: true });

      if (data) setSops(data);
      setIsLoading(false);
    };

    fetchSops();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen bg-[#121212] flex items-center justify-center">
        <p className="text-[#D4AF37] text-xl font-bold uppercase tracking-widest animate-pulse">
          Loading Stations...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] p-8">

      <header className="mb-10 border-b border-[#D4AF37] pb-4">
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">OpsForge — Operator Kiosk</p>
        <h1 className="text-4xl font-black text-[#D4AF37] uppercase tracking-widest">Select Station</h1>
        <p className="text-zinc-500 text-sm mt-1 uppercase tracking-widest">Tap your procedure to begin</p>
      </header>

      {sops.length === 0 ? (
        <div className="flex items-center justify-center py-24">
          <p className="text-zinc-600 font-bold uppercase tracking-widest text-sm">
            No SOPs found in database.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sops.map((sop) => (
            <Link
              key={sop.id}
              href={`/dashboard/station/${toSlug(sop.title)}`}
              className="block bg-zinc-900 border border-zinc-800 hover:border-[#D4AF37] rounded-xl p-8 transition-all hover:bg-zinc-800 group"
            >
              <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest mb-2">
                SOP #{sop.id}
              </p>
              <p className="text-white text-xl font-black uppercase tracking-wide group-hover:text-[#D4AF37] transition-colors leading-tight">
                {sop.title}
              </p>
              <p className="text-zinc-700 text-xs font-mono mt-3">
                /station/{toSlug(sop.title)}
              </p>
            </Link>
          ))}
        </div>
      )}

    </div>
  );
}
