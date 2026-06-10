import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(request: Request) {
  let markdown: string;

  try {
    const body = await request.json();
    markdown = typeof body.markdown === 'string' ? body.markdown.trim() : '';
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (!markdown) {
    return NextResponse.json({ error: 'markdown is required.' }, { status: 422 });
  }

  // Pull the job title from the first # heading the AI always emits
  const titleMatch = markdown.match(/^#\s+(.+)/m);
  const title = titleMatch ? titleMatch[1].trim() : 'Untitled SOP';

  const { data, error } = await supabase
    .from('sops')
    .insert([{ title, description: markdown, status: 'Active' }])
    .select('id, title')
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ id: data.id, title: data.title });
}
