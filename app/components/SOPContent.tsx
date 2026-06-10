'use client';

import { useState } from 'react';
import TagRenderer from './TagRenderer';

interface Props {
  sopId: string | number;
  content: string;
}

type Lang = 'en' | 'es';

export default function SOPContent({ sopId, content }: Props) {
  const [lang, setLang]             = useState<Lang>('en');
  const [esContent, setEsContent]   = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translateError, setTranslateError] = useState<string | null>(null);

  const handleToggle = async (next: Lang) => {
    if (next === lang) return;

    if (next === 'es') {
      if (esContent) { setLang('es'); return; } // session cache hit

      setIsTranslating(true);
      setTranslateError(null);
      try {
        const res = await fetch('/api/translate-sop', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sopId }),
        });
        const data = await res.json();
        if (!res.ok || data.error) throw new Error(data.error ?? 'Translation failed.');
        setEsContent(data.translation);
        setLang('es');
      } catch (err: unknown) {
        setTranslateError(err instanceof Error ? err.message : 'Translation failed.');
      } finally {
        setIsTranslating(false);
      }
    } else {
      setLang('en');
    }
  };

  const displayContent = lang === 'es' && esContent ? esContent : content;

  return (
    <div>
      {/* Language toggle */}
      <div className="flex justify-end items-center gap-3 mb-6">
        {translateError && (
          <span className="text-red-400 text-xs font-bold">{translateError}</span>
        )}
        <div className="flex items-center bg-zinc-800 border border-zinc-700 rounded-full p-1 gap-1">
          <button
            onClick={() => handleToggle('en')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition ${
              lang === 'en'
                ? 'bg-[#D4AF37] text-black'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleToggle('es')}
            disabled={isTranslating}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition ${
              lang === 'es'
                ? 'bg-[#D4AF37] text-black'
                : 'text-zinc-400 hover:text-white'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isTranslating ? '...' : 'Español'}
          </button>
        </div>
      </div>

      {/* Loading spinner while translating */}
      {isTranslating ? (
        <div className="flex flex-col items-center justify-center py-16 gap-4">
          <div className="w-10 h-10 border-4 border-zinc-700 border-t-[#D4AF37] rounded-full animate-spin" />
          <p className="text-zinc-400 text-xs uppercase tracking-widest animate-pulse">
            Translating procedure...
          </p>
        </div>
      ) : (
        <TagRenderer content={displayContent} />
      )}
    </div>
  );
}
