'use client';

import React, { useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { AlertTriangle, AlertOctagon, BadgeCheck, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TagDef {
  icon: LucideIcon;
  color: string;
  label: string;
}

const TAGS: Record<string, TagDef> = {
  SAFETY:    { icon: AlertTriangle, color: '#ef4444', label: 'SAFETY' },
  CRITICAL:  { icon: AlertOctagon,  color: '#f97316', label: 'CRITICAL' },
  QUALITY:   { icon: BadgeCheck,    color: '#D4AF37', label: 'QUALITY' },
  MANDATORY: { icon: ShieldCheck,   color: '#3b82f6', label: 'MANDATORY' },
};

function injectTokens(markdown: string): string {
  return markdown.replace(
    /\[(SAFETY|CRITICAL|QUALITY|MANDATORY)\]/g,
    '`TAG:$1`',
  );
}

function TagBadge({ tagKey }: { tagKey: string }) {
  const def = TAGS[tagKey];
  if (!def) return null;
  const Icon = def.icon;
  return (
    <span
      className="inline-flex items-center gap-1 font-bold text-xs align-middle px-1.5 py-0.5 rounded"
      style={{ color: def.color, backgroundColor: `${def.color}1a`, border: `1px solid ${def.color}4d` }}
    >
      <Icon size={12} strokeWidth={2.5} />
      {def.label}
    </span>
  );
}

const STEP_TH_STYLE: React.CSSProperties = {
  background: '#1c1c1c',
  color: '#D4AF37',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  padding: '0.5rem 0.75rem',
  border: '1px solid #3f3f46',
  textAlign: 'center',
  fontSize: '0.75rem',
  whiteSpace: 'nowrap',
};

const STEP_TD_STYLE: React.CSSProperties = {
  padding: '0.5rem 0.75rem',
  border: '1px solid #3f3f46',
  color: '#D4AF37',
  fontWeight: 700,
  textAlign: 'center',
  verticalAlign: 'top',
  fontSize: '0.875rem',
  whiteSpace: 'nowrap',
};

export default function TagRenderer({ content }: { content: string }) {
  // Ref-based counter resets per tbody so multi-table docs number correctly
  const rowCounter = useRef(0);

  return (
    <div className="sop-output">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ children, className }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
            const text = String(children);
            if (text.startsWith('TAG:')) {
              return <TagBadge tagKey={text.slice(4)} />;
            }
            return <code className={className}>{children}</code>;
          },

          // Reset the counter at the start of every tbody
          tbody({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
            rowCounter.current = 0;
            return <tbody {...props}>{children}</tbody>;
          },

          // Inject Step # header into thead rows; inject numbered cell into tbody rows
          tr({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
            const isHeaderRow = React.Children.toArray(children).some(
              (child) => React.isValidElement(child) && child.type === 'th',
            );

            if (isHeaderRow) {
              return (
                <tr {...props}>
                  <th style={STEP_TH_STYLE}>Step #</th>
                  {children}
                </tr>
              );
            }

            rowCounter.current += 1;
            return (
              <tr {...props}>
                <td style={STEP_TD_STYLE}>{rowCounter.current}</td>
                {children}
              </tr>
            );
          },
        }}
      >
        {injectTokens(content)}
      </ReactMarkdown>
    </div>
  );
}
