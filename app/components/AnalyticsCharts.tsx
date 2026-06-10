'use client';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from 'recharts';

interface ChartAlert {
  status: string;
  created_at: string;
}

interface Props {
  alerts: ChartAlert[];
}

const GOLD = '#D4AF37';
const RED  = '#ef4444';
const ORANGE = '#f97316';
const GRID = '#333333';

const STATUS_COLORS: Record<string, string> = {
  Resolved: GOLD,
  Open:     RED,
  Critical: ORANGE,
};

const tooltipStyle = {
  backgroundColor: '#1a1a1a',
  border: '1px solid #3f3f46',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '0.75rem',
};

export default function AnalyticsCharts({ alerts }: Props) {
  // ── Alerts per day ──────────────────────────────────────────────────────────
  const countByDay = new Map<string, number>();
  for (const alert of alerts) {
    const day = alert.created_at.slice(0, 10); // "YYYY-MM-DD"
    countByDay.set(day, (countByDay.get(day) ?? 0) + 1);
  }
  const dailyData = [...countByDay.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([iso, count]) => {
      const d = new Date(iso + 'T00:00:00');
      return {
        date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        count,
      };
    });

  // ── Status breakdown ────────────────────────────────────────────────────────
  const countByStatus = new Map<string, number>();
  for (const alert of alerts) {
    countByStatus.set(alert.status, (countByStatus.get(alert.status) ?? 0) + 1);
  }
  const statusData = [...countByStatus.entries()].map(([name, value]) => ({
    name,
    value,
    color: STATUS_COLORS[name] ?? '#71717a',
  }));

  const isEmpty = alerts.length === 0;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

      {/* ── Bar chart: alerts per day ── */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
        <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6">
          Alerts per Day
        </p>
        {isEmpty || dailyData.length === 0 ? (
          <div className="h-48 flex items-center justify-center text-zinc-600 text-sm uppercase tracking-widest">
            No data yet
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={dailyData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke={GRID} strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tick={{ fill: '#71717a', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                allowDecimals={false}
                tick={{ fill: '#71717a', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                cursor={{ fill: '#ffffff08' }}
              />
              <Bar dataKey="count" name="Alerts" fill={RED} radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* ── Donut chart: status breakdown ── */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
        <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6">
          Status Breakdown
        </p>
        {isEmpty || statusData.length === 0 ? (
          <div className="h-48 flex items-center justify-center text-zinc-600 text-sm uppercase tracking-widest">
            No data yet
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
              >
                {statusData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} stroke="transparent" />
                ))}
              </Pie>
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(value, name) => [`${value} alerts`, String(name)]}
              />
              <Legend
                iconType="circle"
                iconSize={8}
                formatter={(value) => (
                  <span style={{ color: '#9ca3af', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>

    </section>
  );
}
