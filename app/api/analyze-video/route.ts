import { NextResponse } from 'next/server';
import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';
import path from 'path';
import os from 'os';
import { promises as fs } from 'fs';
import { randomUUID } from 'crypto';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';

// Allow time for: upload buffer → frame extraction → GPT-4o vision call
export const maxDuration = 120;

// Point fluent-ffmpeg at the precompiled binary shipped by ffmpeg-static.
// ffmpeg-static returns null if the current platform has no prebuilt binary.
if (ffmpegStatic) ffmpeg.setFfmpegPath(ffmpegStatic);

// ── Zod schema ────────────────────────────────────────────────────────────────

const StepSchema = z.object({
  important_step: z
    .string()
    .describe('What is happening in this step of the process'),
  key_point: z
    .string()
    .describe('How to perform the step safely and correctly'),
  reason: z
    .string()
    .describe('Why this step must be done this way'),
  target_time_seconds: z
    .number()
    .describe('Duration in seconds this step took, derived from the frame timestamps'),
});

const AnalysisSchema = z.object({
  steps: z.array(StepSchema).min(1),
});

export type TWIStep       = z.infer<typeof StepSchema>;
export type VideoAnalysis = z.infer<typeof AnalysisSchema>;

// ── System prompt ─────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = [
  'You are an elite Industrial Engineer for OpsForge.',
  'You will be shown sequential frames extracted from a manufacturing process video.',
  'Each frame is labelled with its timestamp (e.g. "[Frame at 4s]").',
  'Break the complete process down into standard Training Within Industry (TWI) Job Instruction steps.',
  '',
  'For each step output exactly:',
  '1. important_step      — What is happening',
  '2. key_point           — How to do it safely/correctly',
  '3. reason              — Why we do it this way',
  '4. target_time_seconds — The exact duration in seconds this step occupied,',
  '                         calculated from the frame timestamps shown.',
].join('\n');

// ── Frame extractor ───────────────────────────────────────────────────────────

async function extractFrames(videoBuffer: Buffer, fps = 1): Promise<Buffer[]> {
  const id        = randomUUID();
  const tmpDir    = os.tmpdir();
  const videoPath = path.join(tmpDir, `opf-video-${id}.mp4`);
  const framesDir = path.join(tmpDir, `opf-frames-${id}`);

  await fs.mkdir(framesDir, { recursive: true });
  await fs.writeFile(videoPath, videoBuffer);

  try {
    await new Promise<void>((resolve, reject) => {
      ffmpeg(videoPath)
        .outputOptions([
          `-vf fps=${fps}`, // one frame per second
          '-q:v 5',         // JPEG quality 5 — good clarity, manageable size
        ])
        .output(path.join(framesDir, 'frame-%04d.jpg'))
        .on('end', () => resolve())
        .on('error', (err: Error) =>
          reject(new Error(`ffmpeg frame extraction failed: ${err.message}`)),
        )
        .run();
    });

    const files = (await fs.readdir(framesDir))
      .filter((f) => f.endsWith('.jpg'))
      .sort(); // alphabetical = chronological for %04d naming

    return await Promise.all(
      files.map((f) => fs.readFile(path.join(framesDir, f))),
    );
  } finally {
    // Always clean up temp files, even if an error occurred
    await Promise.allSettled([
      fs.rm(videoPath, { force: true }),
      fs.rm(framesDir, { recursive: true, force: true }),
    ]);
  }
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  // ── 1. Parse multipart form data ──────────────────────────────────────────
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Request body could not be parsed as multipart form data.' },
      { status: 400 },
    );
  }

  const videoFile = formData.get('video');
  if (!videoFile || !(videoFile instanceof File)) {
    return NextResponse.json(
      { ok: false, error: 'Missing required field: "video" (File).' },
      { status: 422 },
    );
  }

  const videoBuffer = Buffer.from(await videoFile.arrayBuffer());

  // ── 2. Extract frames ─────────────────────────────────────────────────────
  // GPT-4o processes images, not raw video bytes. Extracting 1 frame/second
  // and labelling each with its timestamp gives the model the temporal
  // grounding it needs to calculate accurate target_time_seconds values.
  let frames: Buffer[];
  try {
    frames = await extractFrames(videoBuffer);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Frame extraction failed.';
    console.error('[analyze-video] extractFrames failed:', err);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }

  if (frames.length === 0) {
    return NextResponse.json(
      { ok: false, error: 'No frames could be extracted. Check that the uploaded file is a valid video.' },
      { status: 422 },
    );
  }

  // ── 3. Build GPT-4o vision message ────────────────────────────────────────
  // Interleave a text timestamp label before each frame so the model can
  // anchor each step to a specific second in the video.
  type TextPart  = { type: 'text';  text: string };
  type ImagePart = { type: 'image'; image: Buffer; mimeType: string };
  type Part      = TextPart | ImagePart;

  const frameContent: Part[] = frames.flatMap((frame, i): Part[] => [
    { type: 'text',  text: `[Frame at ${i}s]` },
    { type: 'image', image: frame, mimeType: 'image/jpeg' },
  ]);

  // ── 4. Call GPT-4o with structured output ─────────────────────────────────
  try {
    const { object } = await generateObject({
      model: openai('gpt-4o-2024-08-06'),
      schema: AnalysisSchema,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: [
            ...frameContent,
            {
              type: 'text' as const,
              text:
                `The ${frames.length} frames above were extracted at 1 fps ` +
                `(total video duration ≈ ${frames.length}s). ` +
                `Identify every distinct operation step and calculate ` +
                `target_time_seconds precisely from the labelled frame timestamps.`,
            },
          ],
        },
      ],
    });

    return NextResponse.json({ ok: true, steps: object.steps });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'AI analysis failed.';
    console.error('[analyze-video] generateObject failed:', err);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
