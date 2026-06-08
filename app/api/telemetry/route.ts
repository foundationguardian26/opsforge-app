import { NextResponse } from "next/server";

// ── Types ─────────────────────────────────────────────────────────────────────

interface AmbientHazards {
  voc: number;      // mg/m³
  humidity: number; // % RH
}

interface TelemetryPayload {
  stationId: string;
  operatorPresent: boolean;
  breathingDetected: boolean;
  motionLevel: number;       // 0.0–10.0 normalised scale
  ambientHazards: AmbientHazards;
}

type SafetyStatus = "safe" | "lockout";

// ── Safety thresholds ─────────────────────────────────────────────────────────

const THRESHOLDS = {
  voc: 0.50,        // mg/m³  — ENG-CHEM-019-REV2
  humidity: 80,     // % RH   — stop-work threshold, SOP-2047
  motionLevel: 5.0, // normalised — above = uncontrolled movement / intrusion
} as const;

// ── Validation ────────────────────────────────────────────────────────────────

type ValidationResult =
  | { ok: true;  payload: TelemetryPayload }
  | { ok: false; error: string };

function validate(raw: unknown): ValidationResult {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return { ok: false, error: "Body must be a JSON object." };
  }

  const b = raw as Record<string, unknown>;

  if (typeof b.stationId !== "string" || !b.stationId.trim()) {
    return { ok: false, error: "stationId: required non-empty string." };
  }
  if (typeof b.operatorPresent !== "boolean") {
    return { ok: false, error: "operatorPresent: required boolean." };
  }
  if (typeof b.breathingDetected !== "boolean") {
    return { ok: false, error: "breathingDetected: required boolean." };
  }
  if (typeof b.motionLevel !== "number" || b.motionLevel < 0) {
    return { ok: false, error: "motionLevel: required non-negative number." };
  }
  if (!b.ambientHazards || typeof b.ambientHazards !== "object" || Array.isArray(b.ambientHazards)) {
    return { ok: false, error: "ambientHazards: required object." };
  }

  const h = b.ambientHazards as Record<string, unknown>;

  if (typeof h.voc !== "number" || h.voc < 0) {
    return { ok: false, error: "ambientHazards.voc: required non-negative number (mg/m³)." };
  }
  if (typeof h.humidity !== "number" || h.humidity < 0 || h.humidity > 100) {
    return { ok: false, error: "ambientHazards.humidity: required number in range 0–100 (% RH)." };
  }

  return {
    ok: true,
    payload: {
      stationId: b.stationId.trim(),
      operatorPresent: b.operatorPresent,
      breathingDetected: b.breathingDetected,
      motionLevel: b.motionLevel,
      ambientHazards: { voc: h.voc, humidity: h.humidity },
    },
  };
}

// ── Safety evaluation ─────────────────────────────────────────────────────────

interface SafetyResult {
  status: SafetyStatus;
  flags: string[];
}

function evaluateSafety(p: TelemetryPayload): SafetyResult {
  const flags: string[] = [];

  // Operator present with no breathing signal = incapacitation risk
  if (p.operatorPresent && !p.breathingDetected) {
    flags.push("PRESENCE_NO_BREATHING");
  }
  if (p.motionLevel > THRESHOLDS.motionLevel) {
    flags.push("MOTION_THRESHOLD_EXCEEDED");
  }
  if (p.ambientHazards.voc > THRESHOLDS.voc) {
    flags.push("VOC_THRESHOLD_EXCEEDED");
  }
  if (p.ambientHazards.humidity > THRESHOLDS.humidity) {
    flags.push("HUMIDITY_STOP_WORK_THRESHOLD");
  }

  return { status: flags.length > 0 ? "lockout" : "safe", flags };
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Request body is not valid JSON." },
      { status: 400 },
    );
  }

  const validation = validate(raw);
  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, error: validation.error },
      { status: 422 },
    );
  }

  const { payload } = validation;
  const { status, flags } = evaluateSafety(payload);
  const timestamp = new Date().toISOString();

  // ── Extension point: persist to database ──────────────────────────────────
  // await db.telemetry.create({ data: { ...payload, status, flags, timestamp } });

  // ── Extension point: broadcast to local WebSocket layer ───────────────────
  // wss.clients.forEach((client) => {
  //   if (client.readyState === WebSocket.OPEN) {
  //     client.send(JSON.stringify({ type: "telemetry_update", stationId: payload.stationId, status, flags }));
  //   }
  // });

  return NextResponse.json(
    { ok: true, stationId: payload.stationId, status, flags, timestamp },
    { status: 200 },
  );
}
