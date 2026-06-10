import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are an expert industrial training writer specializing in TWI (Training Within Industry) Job Instruction methodology.

Given a raw transcript or set of notes, produce a complete TWI Job Instruction sheet in Markdown.

Output format — follow this structure exactly:

# [Job Title]

## PPE Required
- [List each PPE item on its own bullet]

## Job Instruction Steps

| Major Step | Key Point | Reason | Symbols |
|---|---|---|---|
| [action verb + object] | [how / how much / critical detail] | [why this key point matters] | [⚠️ safety / 🔑 quality / ♻️ process / leave blank] |

Add as many rows as needed. Every distinct action should be its own Major Step row.

## Escalation
- **Stop-work triggers:** [list conditions that require immediate work stoppage]
- **Notify supervisor if:** [list abnormal conditions requiring escalation]
- **Emergency contacts:** [list as applicable, or state "See station emergency card"]

Rules:
- Major Steps use action verbs (Pick up, Insert, Torque, Inspect, etc.)
- Key Points contain the measurable or perceptible detail — never leave blank
- Reasons are short (≤10 words), focused on safety or quality outcome
- Symbols: use ⚠️ for safety-critical steps, 🔑 for quality-critical steps, ♻️ for process-flow steps; leave blank if none apply
- Do not add commentary, preamble, or explanation outside the format above
- Output raw Markdown only`;

export async function POST(request: Request) {
  let transcript: string;

  try {
    const body = await request.json();
    transcript = typeof body.transcript === 'string' ? body.transcript.trim() : '';
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (!transcript) {
    return NextResponse.json({ error: 'transcript is required.' }, { status: 422 });
  }

  try {
    const { text } = await generateText({
      model: openai('gpt-4o'),
      system: SYSTEM_PROMPT,
      prompt: transcript,
    });

    return NextResponse.json({ sop: text });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'AI generation failed.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
