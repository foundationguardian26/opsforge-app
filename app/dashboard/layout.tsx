'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '../../lib/supabase';

// Routes with their own auth mechanism that don't need a Supabase session.
const KIOSK_PATHS = ['/dashboard/station'];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // All hooks must be called unconditionally before any early returns.
  useEffect(() => {
    // Kiosk has its own NFC-based auth — skip the Supabase session gate.
    if (KIOSK_PATHS.includes(pathname)) return;

    let timer: ReturnType<typeof setTimeout>;

    const checkAuth = async () => {
      try {
        timer = setTimeout(() => {
          setAuthError('Connection timed out. Please refresh the page.');
        }, 5000);

        const { data: { session }, error } = await supabase.auth.getSession();
        clearTimeout(timer);

        if (error) throw error;

        if (!session) {
          router.push('/login');
        } else {
          setIsAuthorized(true);
        }
      } catch (err: unknown) {
        clearTimeout(timer);
        setAuthError(
          err instanceof Error ? err.message : 'Authentication failed. Please refresh.'
        );
      }
    };

    checkAuth();
    return () => clearTimeout(timer);
  }, [router, pathname]);

  // Kiosk routes bypass the Supabase session gate entirely.
  if (KIOSK_PATHS.includes(pathname)) {
    return <>{children}</>;
  }

  if (authError) {
    return (
      <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center gap-4 p-8">
        <div className="bg-red-950 border border-red-600 text-red-400 p-6 rounded-lg max-w-md w-full text-center">
          <p className="font-bold uppercase tracking-widest text-sm mb-2">Authentication Error</p>
          <p className="text-xs">{authError}</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#D4AF37] text-black font-bold px-6 py-2 rounded hover:bg-yellow-500 transition text-sm uppercase tracking-widest"
        >
          Refresh
        </button>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center text-[#D4AF37] font-bold text-xl animate-pulse">
        Verifying Credentials...
      </div>
    );
  }

  return <>{children}</>;
}
