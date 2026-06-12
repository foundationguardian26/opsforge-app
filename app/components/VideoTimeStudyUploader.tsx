'use client';

import { useRef, useState, useCallback } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type TWIStep = {
  important_step: string;
  key_point: string;
  reason: string;
  target_time_seconds: number;
};

type Status = 'idle' | 'uploading' | 'done' | 'error';

// ── Constants ─────────────────────────────────────────────────────────────────

const ACCEPTED_TYPES = ['video/mp4', 'video/quicktime', 'video/webm'];
const ACCEPTED_ATTR  = 'video/mp4,video/quicktime,video/webm';

function formatDuration(totalSecs: number): string {
  if (totalSecs < 60) return `${totalSecs}s`;
  const m = Math.floor(totalSecs / 60);
  const s = totalSecs % 60;
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function VideoTimeStudyUploader() {
  const [processName, setProcessName] = useState('');
  const [videoFile, setVideoFile]     = useState<File | null>(null);
  const [isDragging, setIsDragging]   = useState(false);
  const [status, setStatus]           = useState<Status>('idle');
  const [steps, setSteps]             = useState<TWIStep[]>([]);
  const [error, setError]             = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const acceptFile = useCallback((file: File) => {
    if (ACCEPTED_TYPES.includes(file.type)) {
      setVideoFile(file);
      setError('');
    } else {
      setError(`Unsupported format "${file.type}". Upload MP4, MOV, or WebM.`);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) acceptFile(file);
  }, [acceptFile]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) acceptFile(file);
  };

  const handleSubmit = async () => {
    if (!videoFile || status === 'uploading') return;
    setStatus('uploading');
    setSteps([]);
    setError('');

    const formData = new FormData();
    formData.append('video', videoFile);
    if (processName.trim()) formData.append('context', processName.trim());

    try {
      const res  = await fetch('/api/analyze-video', { method: 'POST', body: formData });
      const data = await res.json() as { ok: boolean; steps?: TWIStep[]; error?: string };

      if (!res.ok || !data.ok) {
        setError(data.error ?? 'Analysis failed. Please try again.');
        setStatus('error');
      } else {
        setSteps(data.steps ?? []);
        setStatus('done');
      }
    } catch {
      setError('Network error. Check your connection and try again.');
      setStatus('error');
    }
  };

  const reset = () => {
    setVideoFile(null);
    setSteps([]);
    setError('');
    setStatus('idle');
    setProcessName('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const totalTime = steps.reduce((sum, s) => sum + s.target_time_seconds, 0);
  const canSubmit  = !!videoFile && status !== 'uploading';

  // ── Render: Result Sheet ──────────────────────────────────────────────────

  if (status === 'done' && steps.length > 0) {
    return (
      <div className="flex flex-col gap-6">

        {/* Sheet header */}
        <div className="bg-[#1a1a1a] border border-[#D4AF37]/40 rounded-xl overflow-hidden">
          <div className="bg-[#D4AF37] px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-[#121212] text-xs font-black uppercase tracking-widest mb-0.5">
                Job Element Sheet — Time Study
              </p>
              <p className="text-[#121212]/70 font-bold text-sm">
                {processName.trim() || 'Unnamed Process'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-[#121212]/60 text-xs font-bold uppercase tracking-widest">Elements</p>
                <p className="text-[#121212] text-2xl font-black leading-none">{steps.length}</p>
              </div>
              <div className="w-px h-10 bg-[#121212]/20" />
              <div className="text-right">
                <p className="text-[#121212]/60 text-xs font-bold uppercase tracking-widest">Total Time</p>
                <p className="text-[#121212] text-2xl font-black leading-none">{formatDuration(totalTime)}</p>
              </div>
            </div>
          </div>

          {/* Column headers */}
          <div className="hidden sm:grid grid-cols-[56px_1fr_1fr_1fr_80px] gap-px bg-zinc-800 text-xs font-black uppercase tracking-widest text-zinc-500 px-6 py-3 border-b border-zinc-800">
            <span>Step</span>
            <span>Important Step</span>
            <span>Key Point</span>
            <span>Reason</span>
            <span className="text-right">Time</span>
          </div>

          {/* Step rows */}
          <div className="divide-y divide-zinc-800/60">
            {steps.map((step, i) => (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-[56px_1fr_1fr_1fr_80px] gap-4 sm:gap-px px-6 py-5 hover:bg-zinc-800/30 transition-colors"
              >
                {/* Step number */}
                <div className="flex sm:block items-center gap-3 sm:gap-0">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] font-black text-sm shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {/* Mobile: show time badge inline with step number */}
                  <span className="sm:hidden inline-flex items-center gap-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] font-black text-sm px-3 py-1.5 rounded-lg">
                    <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2"/>
                    </svg>
                    {step.target_time_seconds}s
                  </span>
                </div>

                {/* Important Step */}
                <div className="sm:pr-4">
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1 sm:hidden">Important Step</p>
                  <p className="text-white font-bold text-sm leading-snug">{step.important_step}</p>
                </div>

                {/* Key Point */}
                <div className="sm:pr-4">
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1 sm:hidden">Key Point</p>
                  <p className="text-zinc-300 text-sm leading-snug">{step.key_point}</p>
                </div>

                {/* Reason */}
                <div>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1 sm:hidden">Reason</p>
                  <p className="text-zinc-400 text-sm leading-snug italic">{step.reason}</p>
                </div>

                {/* Time — desktop only */}
                <div className="hidden sm:flex justify-end items-start pt-0.5">
                  <span className="inline-flex items-center gap-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] font-black text-sm px-3 py-1.5 rounded-lg whitespace-nowrap">
                    <svg className="w-3.5 h-3.5 opacity-70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2"/>
                    </svg>
                    {step.target_time_seconds}s
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Sheet footer */}
          <div className="px-6 py-4 bg-[#0d0d0d] border-t border-zinc-800 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest">
              OpsForge — Automated Time Study via AI Vision
            </p>
            <button
              onClick={reset}
              className="text-zinc-500 hover:text-[#D4AF37] text-xs font-bold uppercase tracking-widest transition-colors py-2 px-4 border border-zinc-800 hover:border-[#D4AF37]/40 rounded-lg"
            >
              ← New Analysis
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Upload Form ───────────────────────────────────────────────────

  return (
    <div className="flex flex-col gap-5">

      {/* Process name input */}
      <div className="flex flex-col gap-2">
        <label className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
          Process Name / Additional Context
        </label>
        <input
          type="text"
          value={processName}
          onChange={(e) => setProcessName(e.target.value)}
          placeholder="e.g. Torque Head Assembly — Line 3 Fixture Swap"
          disabled={status === 'uploading'}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] transition text-sm disabled:opacity-50"
        />
      </div>

      {/* Drop zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => status !== 'uploading' && fileInputRef.current?.click()}
        className={`
          relative flex flex-col items-center justify-center gap-4
          min-h-[220px] rounded-xl border-2 border-dashed cursor-pointer
          transition-all duration-200 select-none
          ${isDragging
            ? 'border-[#D4AF37] bg-[#D4AF37]/5 scale-[1.01]'
            : videoFile
              ? 'border-[#D4AF37]/50 bg-[#D4AF37]/5'
              : 'border-zinc-700 bg-zinc-900/50 hover:border-zinc-500 hover:bg-zinc-900'
          }
          ${status === 'uploading' ? 'pointer-events-none opacity-60' : ''}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={ACCEPTED_ATTR}
          onChange={handleFileInput}
          className="hidden"
        />

        {videoFile ? (
          <>
            {/* File selected state */}
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="text-white font-bold text-base leading-tight">{videoFile.name}</p>
              <p className="text-zinc-500 text-sm mt-1">{formatFileSize(videoFile.size)}</p>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setVideoFile(null); if (fileInputRef.current) fileInputRef.current.value = ''; }}
              className="text-zinc-600 hover:text-zinc-400 text-xs font-bold uppercase tracking-widest transition-colors"
            >
              Remove
            </button>
          </>
        ) : (
          <>
            {/* Empty drop zone */}
            <div className={`flex items-center justify-center w-16 h-16 rounded-2xl border transition-colors ${
              isDragging ? 'bg-[#D4AF37]/10 border-[#D4AF37]/40' : 'bg-zinc-800 border-zinc-700'
            }`}>
              <svg className={`w-8 h-8 transition-colors ${isDragging ? 'text-[#D4AF37]' : 'text-zinc-500'}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
              </svg>
            </div>
            <div className="text-center px-4">
              <p className={`font-bold text-base transition-colors ${isDragging ? 'text-[#D4AF37]' : 'text-zinc-300'}`}>
                {isDragging ? 'Drop to upload' : 'Drop video here or tap to browse'}
              </p>
              <p className="text-zinc-600 text-sm mt-1.5">MP4 · MOV · WebM</p>
            </div>
          </>
        )}
      </div>

      {/* Error banner */}
      {(error && status !== 'uploading') && (
        <div className="bg-red-950 border border-red-700 text-red-400 text-sm font-bold px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Submit button */}
      {status === 'uploading' ? (
        <div className="flex flex-col items-center justify-center gap-3 py-6 bg-zinc-900 border border-zinc-800 rounded-xl">
          <div className="w-10 h-10 border-4 border-zinc-700 border-t-[#D4AF37] rounded-full animate-spin" />
          <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest animate-pulse text-center">
            Extracting Frames &amp; Analyzing with VLM...
          </p>
          <p className="text-zinc-600 text-xs">This may take 30–90 seconds for longer videos</p>
        </div>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="w-full bg-[#D4AF37] hover:bg-yellow-500 active:bg-yellow-600 text-black font-black py-5 rounded-xl uppercase tracking-widest transition-colors shadow-lg disabled:opacity-40 disabled:cursor-not-allowed text-sm"
        >
          Run Time Study Analysis
        </button>
      )}
    </div>
  );
}
