'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';

// Routes with their own auth mechanism that don't need a Supabase session.
const KIOSK_PATHS = ['/dashboard/station'];

const NAV_LINKS = [
  { label: 'Plant Manager', href: '/dashboard/admin'      },
  { label: 'Supervisor',    href: '/dashboard/supervisor' },
  { label: 'Tech Dispatch', href: '/dashboard/tech'       },
  { label: 'Operator Kiosk', href: '/dashboard/station'  },
] as const;

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

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <nav className="sticky top-0 z-50 bg-zinc-900 border-b border-zinc-800 shadow-lg">
        <div className="px-4 sm:px-6 flex items-center justify-between h-14">
          <span className="text-[#D4AF37] font-black text-base uppercase tracking-widest select-none hidden sm:block">
            OpsForge
          </span>
          <div className="flex items-center gap-1 w-full sm:w-auto justify-around sm:justify-end">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={[
                    'px-3 sm:px-5 py-2 rounded text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors',
                    isActive
                      ? 'text-[#D4AF37] bg-zinc-800 border-b-2 border-[#D4AF37]'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800',
                  ].join(' ')}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
}
