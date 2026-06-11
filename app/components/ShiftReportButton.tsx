'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';

interface QualityAlert {
  id: string;
  issue_description: string | null;
  operator_name: string | null;
  status: string;
  created_at: string;
}

export default function ShiftReportButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0);

      const [alertsResult, mutilationResult, wpoResult] = await Promise.allSettled([
        supabase
          .from('quality_alerts')
          .select('id, issue_description, operator_name, status, created_at')
          .gte('created_at', todayStart.toISOString())
          .order('created_at', { ascending: false }),
        supabase
          .from('daily_mutilation_logs')
          .select('*')
          .gte('created_at', todayStart.toISOString()),
        supabase
          .from('wpo_updates')
          .select('*')
          .gte('created_at', todayStart.toISOString()),
      ]);

      const alerts: QualityAlert[] =
        alertsResult.status === 'fulfilled' ? (alertsResult.value.data ?? []) : [];
      const mutilation =
        mutilationResult.status === 'fulfilled' ? (mutilationResult.value.data ?? []) : [];
      const wpo =
        wpoResult.status === 'fulfilled' ? (wpoResult.value.data ?? []) : [];

      const { default: jsPDF } = await import('jspdf');
      const { default: autoTable } = await import('jspdf-autotable');

      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const now = new Date();
      const pageW = doc.internal.pageSize.getWidth();

      // ── Header bar ────────────────────────────────────────────────────────
      doc.setFillColor(18, 18, 18);
      doc.rect(0, 0, pageW, 40, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(156, 163, 175);
      doc.text('OPSFORGE OPERATIONS PLATFORM', 14, 11);

      doc.setFontSize(20);
      doc.setTextColor(212, 175, 55);
      doc.text('SHIFT HANDOFF REPORT', 14, 25);

      const timestamp = now.toLocaleString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short',
      });
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(156, 163, 175);
      doc.text(`Generated: ${timestamp}`, 14, 34);

      let y = 50;

      const sectionHeading = (title: string) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(212, 175, 55);
        doc.text(title, 14, y);
        y += 2;
        doc.setDrawColor(212, 175, 55);
        doc.setLineWidth(0.3);
        doc.line(14, y + 1, pageW - 14, y + 1);
        y += 6;
      };

      const emptyNote = (msg: string) => {
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(9);
        doc.setTextColor(160, 160, 160);
        doc.text(msg, 14, y);
        y += 10;
      };

      // ── Quality Alerts ────────────────────────────────────────────────────
      sectionHeading("QUALITY ALERTS — TODAY'S SHIFT");

      const openCount = alerts.filter(a => a.status === 'Open').length;
      const resolvedCount = alerts.filter(a => a.status === 'Resolved').length;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(110, 110, 110);
      doc.text(
        `Total: ${alerts.length}   |   Open: ${openCount}   |   Resolved: ${resolvedCount}`,
        14, y,
      );
      y += 5;

      autoTable(doc, {
        startY: y,
        head: [['Issue Description', 'Operator', 'Status', 'Time']],
        body: alerts.length > 0
          ? alerts.map(a => [
              a.issue_description ?? '—',
              a.operator_name ?? 'Unknown',
              a.status,
              new Date(a.created_at).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
              }),
            ])
          : [['No quality alerts recorded for this shift.', '', '', '']],
        headStyles: {
          fillColor: [212, 175, 55],
          textColor: [18, 18, 18],
          fontStyle: 'bold',
          fontSize: 8,
        },
        bodyStyles: { fontSize: 8, textColor: [30, 30, 30] },
        alternateRowStyles: { fillColor: [248, 248, 248] },
        columnStyles: {
          0: { cellWidth: 90 },
          1: { cellWidth: 38 },
          2: { cellWidth: 28 },
          3: { cellWidth: 26 },
        },
        margin: { left: 14, right: 14 },
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      y = (doc as any).lastAutoTable.finalY + 14;

      // ── Daily Mutilation Tracking ─────────────────────────────────────────
      if (y > 250) { doc.addPage(); y = 20; }
      sectionHeading('DAILY MUTILATION TRACKING');

      if (mutilation.length === 0) {
        emptyNote('No mutilation incidents recorded for this shift.');
      } else {
        const keys = Object.keys(mutilation[0] as object).filter(k => k !== 'id');
        autoTable(doc, {
          startY: y,
          head: [keys.map(k => k.replace(/_/g, ' ').toUpperCase())],
          body: mutilation.map(row =>
            keys.map(k => String((row as Record<string, unknown>)[k] ?? '—')),
          ),
          headStyles: {
            fillColor: [212, 175, 55],
            textColor: [18, 18, 18],
            fontStyle: 'bold',
            fontSize: 8,
          },
          bodyStyles: { fontSize: 8, textColor: [30, 30, 30] },
          alternateRowStyles: { fillColor: [248, 248, 248] },
          margin: { left: 14, right: 14 },
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        y = (doc as any).lastAutoTable.finalY + 14;
      }

      // ── WPO Cabinet Card Updates ──────────────────────────────────────────
      if (y > 250) { doc.addPage(); y = 20; }
      sectionHeading('WPO CABINET CARD UPDATES');

      if (wpo.length === 0) {
        emptyNote('No WPO updates recorded for this shift.');
      } else {
        const keys = Object.keys(wpo[0] as object).filter(k => k !== 'id');
        autoTable(doc, {
          startY: y,
          head: [keys.map(k => k.replace(/_/g, ' ').toUpperCase())],
          body: wpo.map(row =>
            keys.map(k => String((row as Record<string, unknown>)[k] ?? '—')),
          ),
          headStyles: {
            fillColor: [212, 175, 55],
            textColor: [18, 18, 18],
            fontStyle: 'bold',
            fontSize: 8,
          },
          bodyStyles: { fontSize: 8, textColor: [30, 30, 30] },
          alternateRowStyles: { fillColor: [248, 248, 248] },
          margin: { left: 14, right: 14 },
        });
      }

      // ── Footer on every page ──────────────────────────────────────────────
      const totalPages = doc.getNumberOfPages();
      for (let p = 1; p <= totalPages; p++) {
        doc.setPage(p);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(160, 160, 160);
        doc.text(
          `OpsForge — Confidential Shift Handoff Report   |   Page ${p} of ${totalPages}`,
          pageW / 2,
          290,
          { align: 'center' },
        );
      }

      const dateStr = now.toISOString().slice(0, 10);
      const timeStr = now.toTimeString().slice(0, 5).replace(':', '');
      doc.save(`OpsForge_ShiftHandoff_${dateStr}_${timeStr}.pdf`);
    } catch (err) {
      console.error('[ShiftReport] Failed to generate PDF:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGenerate}
      disabled={isGenerating}
      className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-yellow-400 disabled:opacity-60 text-black font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded transition-colors whitespace-nowrap"
    >
      <span className={isGenerating ? 'inline-block animate-spin' : ''}>
        {isGenerating ? '⟳' : '↓'}
      </span>
      {isGenerating ? 'Generating...' : 'Generate Shift Report'}
    </button>
  );
}
