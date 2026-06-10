'use client';

import { useEffect, useRef, useState } from 'react';
import { supabase } from '../../lib/supabase';

// Type declarations for the experimental Web NFC API (not in standard TypeScript lib)
declare global {
  interface Window {
    NDEFReader: new () => NDEFReaderInstance;
  }
}

interface NDEFReaderInstance extends EventTarget {
  scan(options?: { signal?: AbortSignal }): Promise<void>;
  addEventListener(type: 'reading', listener: (event: NDEFReadingEvent) => void): void;
  addEventListener(type: 'readingerror', listener: (event: Event) => void): void;
}

interface NDEFReadingEvent extends Event {
  serialNumber: string;
}

interface OperatorProfile {
  id: string;
  full_name: string;
  role: string;
  nfc_serial: string;
}

export default function NFCLogin() {
  const [isSupported, setIsSupported] = useState<boolean | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [operator, setOperator] = useState<OperatorProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    setIsSupported('NDEFReader' in window);
    return () => abortRef.current?.abort();
  }, []);

  const handleReading = async (serialNumber: string) => {
    setError(null);
    setIsScanning(false);

    const { data: profile, error: dbError } = await supabase
      .from('profiles')
      .select('*')
      .eq('nfc_serial', serialNumber)
      .single();

    if (dbError || !profile) {
      setError('Badge not recognized.');
    } else {
      setOperator(profile as OperatorProfile);
    }
  };

  const activateScanner = async () => {
    setError(null);
    setOperator(null);
    setIsScanning(true);

    try {
      const reader = new window.NDEFReader();
      abortRef.current = new AbortController();

      await reader.scan({ signal: abortRef.current.signal });

      reader.addEventListener('reading', (event: NDEFReadingEvent) => {
        handleReading(event.serialNumber);
      });

      reader.addEventListener('readingerror', () => {
        setError('Could not read NFC tag. Please try again.');
        setIsScanning(false);
      });
    } catch (err: any) {
      if (err?.name === 'NotAllowedError') {
        setError('NFC permission denied. Please allow NFC access and try again.');
      } else {
        setError(`NFC Error: ${err?.message ?? 'Unknown error.'}`);
      }
      setIsScanning(false);
    }
  };

  const clearOperator = () => {
    abortRef.current?.abort();
    setOperator(null);
    setError(null);
    setIsScanning(false);
  };

  // Avoid SSR mismatch — render nothing until window check completes
  if (isSupported === null) return null;

  if (!isSupported) {
    return (
      <div className="bg-zinc-900 border border-red-800 p-6 rounded-lg text-center max-w-sm mx-auto">
        <p className="text-red-400 font-bold text-sm">
          NFC not supported on this device/browser. Please use an Android tablet with Chrome.
        </p>
      </div>
    );
  }

  // Operator successfully identified
  if (operator) {
    return (
      <div className="flex flex-col items-center gap-6 bg-[#121212] border border-green-600 p-8 rounded-lg shadow-xl max-w-sm mx-auto text-center">
        <div className="w-full bg-green-950 border border-green-600 p-6 rounded-lg">
          <p className="text-green-400 font-bold uppercase tracking-widest text-sm mb-3">
            ✓ Operator Identified
          </p>
          <p className="text-white text-3xl font-bold mb-1">
            Welcome, {operator.full_name}!
          </p>
          <p className="text-zinc-400 text-sm uppercase tracking-widest">{operator.role}</p>
        </div>
        <button
          onClick={clearOperator}
          className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-6 rounded-lg transition border border-zinc-600 uppercase tracking-widest text-sm"
        >
          Log Out / Clear Operator
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 bg-[#121212] border border-zinc-800 p-8 rounded-lg shadow-xl max-w-sm mx-auto">
      <button
        onClick={activateScanner}
        disabled={isScanning}
        className="w-full bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold py-6 px-8 rounded-lg text-lg uppercase tracking-widest transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isScanning ? '📡 Scanning...' : 'Activate Badge Scanner'}
      </button>

      {isScanning && (
        <p className="text-zinc-400 text-xs uppercase tracking-widest animate-pulse">
          Hold badge near device...
        </p>
      )}

      {error && (
        <div className="w-full bg-red-950 border border-red-600 p-4 rounded-lg text-center">
          <p className="text-red-400 font-bold text-sm">{error}</p>
        </div>
      )}
    </div>
  );
}
