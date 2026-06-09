'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';

// This layout wraps around EVERY page inside the /dashboard folder
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      // 1. Ask Supabase if the person visiting has a valid login session
      const { data: { session } } = await supabase.auth.getSession();

      // 2. If no session is found, immediately kick them to the login screen
      if (!session) {
        router.push('/login');
      } else {
        // 3. If they have a badge, unlock the door and let them see the dashboard
        setIsAuthorized(true);
      }
    };

    checkAuth();
  }, [router]);

  // Show a slick gold loading screen while checking their ID
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center text-[#D4AF37] font-bold text-xl animate-pulse">
        Verifying Credentials...
      </div>
    );
  }

  // If authorized, show the actual dashboard pages
  return <>{children}</>;
}