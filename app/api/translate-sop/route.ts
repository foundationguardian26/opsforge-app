import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://anmkzachozworppovcxi.supabase.co';
const supabase = createClient(supabaseUrl, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

const SYSTEM_PROMPT = `You are a professional industrial translator specializing in factory-floor documentation.

Translate the following TWI Job Instruction Markdown from English into clear, factory-floor appropriate Mexican Spanish.

Rules — follow them exactly:
- Preserve ALL markdown formatting: headers (#, ##), tables (|---|), bold (**), bullet lists
- Do NOT translate these literal tag tokens: [SAFETY] [CRITICAL] [QUALITY] [MANDATORY]
- Do NOT translate proper nouns, part numbers, or measurement units (mm, psi, N·m, etc.)
- Use direct, imperative language appropriate for skilled tradespeople
- Translate "Major Step" → "Paso Principal", "Key Point" → "Punto Clave", "Reason" → "Razón", "Symbols" → "Símbolos", "Step #" → "Paso #", "PPE Required" → "EPP Requerido", "Escalation" → "Escalada"
- Output raw Markdown only — no preamble, no explanation`;

export async function POST(request: Request) {
  let sopId: string;

  try {
    const body = await request.json();
    sopId = String(body.sopId ?? '').trim();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (!sopId) {
    return NextResponse.json({ error: 'sopId is required.' }, { status: 422 });
  }

  // ── Cache check: return saved translation if it exists ───────────────────
  try {
    const { data } = await supabase
      .from('sops')
      .select('description_es')
      .eq('id', sopId)
      .single();

    if (data?.description_es) {
      return NextResponse.json({ translation: data.description_es, cached: true });
    }
  } catch {
    // Column may not exist yet — fall through to translation
  }

  // ── Fetch English source ─────────────────────────────────────────────────
  const { data: sop, error: fetchError } = await supabase
    .from('sops')
    .select('description')
    .eq('id', sopId)
    .single();

  if (fetchError || !sop?.description) {
    return NextResponse.json({ error: 'SOP not found.' }, { status: 404 });
  }

  // ── Translate ────────────────────────────────────────────────────────────
  try {
    const { text } = await generateText({
      model: openai('gpt-4o'),
      system: SYSTEM_PROMPT,
      prompt: sop.description,
    });

    // ── Attempt to cache in DB (requires description_es column on sops) ────
    try {
      await supabase
        .from('sops')
        .update({ description_es: text })
        .eq('id', sopId);
    } catch {
      // Fail silently — column doesn't exist yet
    }

    return NextResponse.json({ translation: text, cached: false });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Translation failed.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
