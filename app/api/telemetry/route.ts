import { NextResponse } from "next/server";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Biometrics {
  heartRate:   number; // BPM
  respiration: number; // breaths/min
  posture:     string; // 'standing' | 'sitting' | 'fallen' | 'unknown'
}

interface AmbientHazards {
  voc:      number; // mg/m³
  humidity: number; // % RH
}

interface TelemetryPayload {
  stationId:       string;
  operatorPresent: boolean;
  biometrics:      Biometrics;
  ambientHazards:  AmbientHazards;
}

type SafetyStatus = "safe" | "lockout";

// ── Safety thresholds ─────────────────────────────────────────────────────────

const THRESHOLDS = {
  voc:          0.50,  // mg/m³ — ENG-CHEM-019-REV2
  humidity:     80,    // % RH  — stop-work threshold, SOP-2047
  heartRateHigh: 120,  // BPM   — tachycardia distress threshold
} as const;

const VALID_POSTURES = new Set(["standing", "sitting", "fallen", "unknown"]);

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

  // ── biometrics block ──────────────────────────────────────────────────────
  if (!b.biometrics || typeof b.biometrics !== "object" || Array.isArray(b.biometrics)) {
    return { ok: false, error: "biometrics: required object." };
  }
  const bio = b.biometrics as Record<string, unknown>;

  if (typeof bio.heartRate !== "number" || bio.heartRate < 0) {
    return { ok: false, error: "biometrics.heartRate: required non-negative number (BPM)." };
  }
  if (typeof bio.respiration !== "number" || bio.respiration < 0) {
    return { ok: false, error: "biometrics.respiration: required non-negative number (breaths/min)." };
  }
  if (typeof bio.posture !== "string" || !VALID_POSTURES.has(bio.posture)) {
    return {
      ok: false,
      error: `biometrics.posture: must be one of: ${[...VALID_POSTURES].join(", ")}.`,
    };
  }

  // ── ambientHazards block ──────────────────────────────────────────────────
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
      stationId:       b.stationId.trim(),
      operatorPresent: b.operatorPresent,
      biometrics: {
        heartRate:   bio.heartRate,
        respiration: bio.respiration,
        posture:     bio.posture,
      },
      ambientHazards: { voc: h.voc, humidity: h.humidity },
    },
  };
}

// ── Safety evaluation ─────────────────────────────────────────────────────────

interface SafetyResult {
  status: SafetyStatus;
  flags:  string[];
}

function evaluateSafety(p: TelemetryPayload): SafetyResult {
  const flags: string[] = [];

  // Biometric distress: fallen posture or tachycardia (heartRate > 120 BPM
  // indicates distress in an operator detected as stationary by RuView CSI).
  if (p.biometrics.posture === "fallen" || p.biometrics.heartRate > THRESHOLDS.heartRateHigh) {
    flags.push("BIOMETRIC_DISTRESS");
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
  // await supabase.from('telemetry').insert({
  //   station_id:        payload.stationId,
  //   operator_present:  payload.operatorPresent,
  //   heart_rate_bpm:    payload.biometrics.heartRate,
  //   respiration_rate:  payload.biometrics.respiration,
  //   posture_state:     payload.biometrics.posture,
  //   voc:               payload.ambientHazards.voc,
  //   humidity:          payload.ambientHazards.humidity,
  //   safety_status:     status,
  //   flags:             flags,
  //   created_at:        timestamp,
  // });

  // ── Extension point: broadcast to local WebSocket layer ───────────────────
  // wss.clients.forEach((client) => {
  //   if (client.readyState === WebSocket.OPEN) {
  //     client.send(JSON.stringify({ type: "telemetry_update", stationId: payload.stationId, status, flags }));
  //   }
  // });

  return NextResponse.json(
    {
      ok:        true,
      stationId: payload.stationId,
      status,
      flags,
      biometrics: payload.biometrics,
      timestamp,
    },
    { status: 200 },
  );
}
