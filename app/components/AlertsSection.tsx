'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import AlertCard from './AlertCard';

export default function AlertsSection({ alerts }: { alerts: any[] }) {
  const router = useRouter();
  const [resolvingId, setResolvingId] = useState<string | null>(null);
  const [errorId, setErrorId] = useState<string | null>(null);

  const resolveAlert = async (id: string) => {
    setResolvingId(id);
    setErrorId(null);
    const { error } = await supabase
      .from('quality_alerts')
      .update({ status: 'Resolved' })
      .eq('id', id);

    if (error) {
      setErrorId(id);
      setResolvingId(null);
    } else {
      router.refresh();
    }
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-red-500 mb-4 flex items-center gap-2">
        ⚠️ Active Quality Alerts
        {alerts.length > 0 && (
          <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            {alerts.length}
          </span>
        )}
      </h2>
      {alerts.length === 0 ? (
        <p className="text-zinc-500 text-sm">No active alerts. All clear.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {alerts.map((alert) => (
            <AlertCard
              key={alert.id}
              alert={alert}
              isResolving={resolvingId === alert.id}
              resolveError={errorId === alert.id}
              resolveAlert={() => resolveAlert(alert.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
