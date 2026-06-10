'use client';

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

// Replace [TAG] with inline-code tokens react-markdown can intercept
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

export default function TagRenderer({ content }: { content: string }) {
  return (
    <div className="sop-output">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ children, className }) {
            const text = String(children);
            if (text.startsWith('TAG:')) {
              return <TagBadge tagKey={text.slice(4)} />;
            }
            return <code className={className}>{children}</code>;
          },
        }}
      >
        {injectTokens(content)}
      </ReactMarkdown>
    </div>
  );
}
