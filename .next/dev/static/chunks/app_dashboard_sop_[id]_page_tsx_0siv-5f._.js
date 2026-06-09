(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/dashboard/sop/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SopDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TAKT_SECONDS = 45;
const ROTATION_SECONDS = 1755;
const BRANCH_STEP = 6;
const MOCK_PIN = "1234";
const MOCK_EMP_ID = "EMP-4471";
// ── UI strings ────────────────────────────────────────────────────────────────
const ui = {
    EN: {
        taktLabel: "Takt",
        cycleLabel: "Cycle",
        objectiveLabel: "Objective",
        cycleTimeLabel: "Cycle Time",
        videoCaption: "Video Demo: Inner Door Panel Installation",
        seqLabel: "SEQ",
        trimLabel: "Trim",
        colorLabel: "Color",
        destLabel: "Dest.",
        engineLabel: "Engine",
        buildLabel: "Build",
        pickListHeading: "Trim-Specific Pick List",
        pnLabel: "Part No.",
        descLabel: "Description",
        specLabel: "Spec",
        ergoHeading: "Ergonomic Risk & Rotation",
        strainLabel: "Strain Rating",
        jointsLabel: "Affected Joints",
        recLabel: "Recommendation",
        rotationLabel: "Next Rotation In",
        rotationNumLabel: "Rotation",
        rotationOfLabel: "of",
        toolsHeading: "Required Tools & Safety Gear",
        toolsLabel: "Tools",
        ppeLabel: "PPE — Mandatory",
        validationHeading: "Tool Validation & Spec Match",
        validationSpecSheet: "Spec Sheet",
        validationAllClear: "All Tools Verified",
        validationCal: "Cal.",
        validationVerified: "Verified",
        // Variable condition
        varCondHeading: "Variable Condition Input",
        varCondDesc: "Enter measured ambient conditions before proceeding. Calculated values update in real time and govern material quantities for this cycle.",
        humidityLabel: "Ambient Humidity",
        humidityUnit: "% RH",
        humidityNominal: "Nominal (40–60%)",
        humidityLow: "Below nominal — dry conditions",
        humidityHigh: "Above nominal — humid conditions",
        catalystLabel: "Adjusted Catalyst Weight",
        catalystUnit: "g",
        catalystBase: "Base: 250.0 g",
        catalystFormula: "Correction factor applied per ENG-CHEM-019-REV2",
        varCondNote: "Do not proceed if humidity exceeds 80% — pause production and notify Process Engineering.",
        stepsHeading: "Step-by-Step Execution",
        stepPass: "Pass",
        stepFail: "Fail",
        reworkHeading: "Rework Required — Step 6 Failure",
        reworkStep1: "Back off all partially engaged clips using the trim clip removal tool. Do not pry against the panel face.",
        reworkStep2: "Inspect all 8 clip housings for deformation or cracking. Replace any damaged housing from line-side stock before continuing.",
        reworkStep3: "Re-verify panel alignment at the top two retention corners. Gap must be uniform before clip re-engagement.",
        reworkStep4: "Re-engage all 8 clips in original sequence (top corners inward). Confirm audible click at every position.",
        reworkStep5: "Team Lead inspection required. Tag the unit with a yellow hold tag. Do not advance until TL signs off on clip engagement.",
        mappingHeading: "Fastener & Component Mapping Grid",
        mappingCaption: "Retention clip positions and harness connector routing — inner panel, body side. Positions C3 and C7 are flagged under active quality alert.",
        legendClip: "Retention Clip",
        legendHarness: "Harness Connector",
        legendRoute: "Harness Route",
        legendAlert: "Alert Position",
        checksHeading: "Critical Quality & Safety Checks",
        escalationHeading: "Escalation Protocol",
        escalationIf: "If:",
        // Life-safety mesh
        lifeSafetyHeading: "Life-Safety Mesh & Ambient Monitoring",
        lifeSafetyDesc: "Real-time WiFi-based presence sensing and chemical/particulate monitoring. System alerts supervisor automatically on threshold breach.",
        presenceHeading: "WiFi Presence & Biometric Mesh",
        ambientHeading: "VOC & Particulate Monitoring",
        telemetryCameras: "NVR Camera Feeds",
        telemetryNormal: "Normal",
        telemetryCaution: "Caution",
        telemetryCritical: "Critical",
        telemetryShow: "Show",
        telemetryHide: "Hide",
        passdownHeading: "Shift Passdown Log",
        passdownShow: "Show",
        passdownHide: "Hide",
        // E-signature
        eSignHeading: "Secure E-Signature Authorization",
        eSignDesc: "Regulatory compliance requires operator PIN authorization. This record is tamper-evident and logged to the QMS audit trail.",
        eSignLabel: "Enter Operator PIN",
        eSignPlaceholder: "4-digit PIN",
        eSignError: "Incorrect PIN. Authorization denied. Attempt logged.",
        eSignConfirmed: "Authorization Confirmed",
        eSignConfirmedDesc: "Operator signature recorded. Unit cleared for advancement.",
        eSignHint: "Demo PIN: 1234",
        eSignAuthorize: "Authorize & Submit",
        escalateBtn: "Escalate to Team Lead",
        footerBy: "Last updated by Quality Engineering",
        footerHelp: "For questions contact your Team Lead or scan for support.",
        alertLabel: "Active Quality Alert",
        alertUnits: "units flagged this shift",
        alertSince: "Active Since",
        // Supervisor mode
        supervisorBtn: "Supervisor",
        supervisorHeading: "Takt-Time Financial Impact",
        financialStationValue: "Expected Station Value",
        financialCostMin: "Lost Throughput Cost / Min",
        financialShiftProgress: "Shift Progress",
        financialOEE: "OEE Estimate",
        financialTaktOn: "On Target",
        financialTaktRisk: "At Risk",
        // Tools grid
        toolsGridHeading: "Physical Tools Reference",
        toolsGridSub: "Confirm all tools match specification before starting.",
        // Live IoT
        iotHeading: "Live IoT Life-Safety Feed",
        iotMeshLabel: "WiFi Mesh",
        iotBreathLabel: "Breathing Detection",
        iotPresenceLabel: "Presence Lock",
        iotPresenceVal: "Active — Zone A",
        // Voice
        voiceHeading: "Voice Control Active",
        voiceListening: "Listening for command...",
        voiceLastCmd: "Last Confirmed Command",
        // 3D viewer
        viewer3dHeading: "Interactive 3D Component Map",
        viewer3dBadge: "WebGL Canvas Active",
        viewer3dSub: "Tap and drag to rotate · Pinch to zoom · Double-tap to reset",
        // Compliance gate
        complianceHeading: "Compliance Gate",
        complianceSub: "Quality Verification Checkpoint",
        compliancePassBtn: "Pass — Advance Unit",
        complianceFailBtn: "Fail / Rework",
        complianceReworkHeading: "Conditional Rework Protocol — Initiated",
        complianceRework1: "Stop unit advancement immediately. Apply red hold tag and note position on the floor layout map.",
        complianceRework2: "Document the specific failure mode on the QMS tablet using form QMS-RF-014. Documentation is mandatory before any rework begins.",
        complianceRework3: "Notify Team Lead. TL assesses whether rework or scrap disposition applies based on defect class and severity.",
        complianceRework4: "If rework authorized: complete all corrective actions per the applicable SOP section. Re-run all affected quality checks.",
        complianceRework5: "Re-run this compliance gate. Team Lead counter-signature required before unit is cleared to advance down the line.",
        // E-sign additions
        eSignEmpLabel: "Employee ID",
        eSignEmpPlaceholder: "e.g. EMP-4471"
    },
    ES: {
        taktLabel: "Takt",
        cycleLabel: "Ciclo",
        objectiveLabel: "Objetivo",
        cycleTimeLabel: "Tiempo de Ciclo",
        videoCaption: "Video Demostrativo: Instalación del Panel Interior de la Puerta",
        seqLabel: "SEQ",
        trimLabel: "Acabado",
        colorLabel: "Color",
        destLabel: "Destino",
        engineLabel: "Motor",
        buildLabel: "Fabricación",
        pickListHeading: "Lista de Piezas por Nivel de Acabado",
        pnLabel: "N° Pieza",
        descLabel: "Descripción",
        specLabel: "Especificación",
        ergoHeading: "Riesgo Ergonómico y Rotación",
        strainLabel: "Nivel de Tensión",
        jointsLabel: "Articulaciones Afectadas",
        recLabel: "Recomendación",
        rotationLabel: "Próxima Rotación En",
        rotationNumLabel: "Rotación",
        rotationOfLabel: "de",
        toolsHeading: "Herramientas Requeridas y EPP",
        toolsLabel: "Herramientas",
        ppeLabel: "EPP — Obligatorio",
        validationHeading: "Validación de Herramientas y Especificaciones",
        validationSpecSheet: "Hoja de Especificaciones",
        validationAllClear: "Todas las Herramientas Verificadas",
        validationCal: "Cal.",
        validationVerified: "Verificado",
        varCondHeading: "Entrada de Condiciones Variables",
        varCondDesc: "Ingrese las condiciones ambientales medidas antes de continuar. Los valores calculados se actualizan en tiempo real y rigen las cantidades de materiales para este ciclo.",
        humidityLabel: "Humedad Ambiental",
        humidityUnit: "% HR",
        humidityNominal: "Nominal (40–60%)",
        humidityLow: "Por debajo nominal — condiciones secas",
        humidityHigh: "Por encima nominal — condiciones húmedas",
        catalystLabel: "Peso Ajustado de Catalizador",
        catalystUnit: "g",
        catalystBase: "Base: 250.0 g",
        catalystFormula: "Factor de corrección aplicado según ENG-CHEM-019-REV2",
        varCondNote: "No continúe si la humedad supera el 80% — detenga la producción y notifique a Ingeniería de Procesos.",
        stepsHeading: "Ejecución Paso a Paso",
        stepPass: "Aprobado",
        stepFail: "Falla",
        reworkHeading: "Retrabajo Requerido — Falla Paso 6",
        reworkStep1: "Retire todos los clips parcialmente enganchados con la herramienta de clips. No haga palanca contra la cara del panel.",
        reworkStep2: "Inspeccione las 8 carcasas de clips por deformación o grietas. Reemplace cualquier carcasa dañada del stock en línea antes de continuar.",
        reworkStep3: "Verifique nuevamente la alineación del panel en las dos esquinas superiores de retención. El espacio debe ser uniforme antes de reengancharse.",
        reworkStep4: "Reenganche los 8 clips en la secuencia original (esquinas superiores hacia adentro). Confirme clic audible en cada posición.",
        reworkStep5: "Se requiere inspección del Líder de Equipo. Etiquete la unidad con etiqueta amarilla de espera. No avanzar hasta que el LT firme el enganche de clips.",
        mappingHeading: "Mapa de Sujetadores y Componentes",
        mappingCaption: "Posiciones de clips de retención y rutas del arnés — panel interior, lado carrocería. Las posiciones C3 y C7 están marcadas bajo alerta de calidad activa.",
        legendClip: "Clip de Retención",
        legendHarness: "Conector de Arnés",
        legendRoute: "Ruta del Arnés",
        legendAlert: "Posición en Alerta",
        checksHeading: "Verificaciones Críticas de Calidad y Seguridad",
        escalationHeading: "Protocolo de Escalamiento",
        escalationIf: "Si:",
        lifeSafetyHeading: "Malla de Seguridad de Vida y Monitoreo Ambiental",
        lifeSafetyDesc: "Detección de presencia por WiFi y monitoreo de compuestos químicos y partículas en tiempo real. El sistema alerta al supervisor automáticamente al superar umbrales.",
        presenceHeading: "Malla de Presencia y Biométrica WiFi",
        ambientHeading: "Monitoreo de COV y Partículas",
        telemetryCameras: "Cámaras NVR",
        telemetryNormal: "Normal",
        telemetryCaution: "Precaución",
        telemetryCritical: "Crítico",
        telemetryShow: "Ver",
        telemetryHide: "Ocultar",
        passdownHeading: "Registro de Traspaso de Turno",
        passdownShow: "Ver",
        passdownHide: "Ocultar",
        eSignHeading: "Autorización de Firma Electrónica Segura",
        eSignDesc: "El cumplimiento normativo requiere autorización PIN del operador. Este registro es a prueba de manipulación y se registra en la pista de auditoría del SGC.",
        eSignLabel: "Ingrese PIN de Operador",
        eSignPlaceholder: "PIN de 4 dígitos",
        eSignError: "PIN incorrecto. Autorización denegada. Intento registrado.",
        eSignConfirmed: "Autorización Confirmada",
        eSignConfirmedDesc: "Firma del operador registrada. Unidad autorizada para avance.",
        eSignHint: "PIN demo: 1234",
        eSignAuthorize: "Autorizar y Enviar",
        escalateBtn: "Escalar al Líder de Equipo",
        footerBy: "Última actualización por Ingeniería de Calidad",
        footerHelp: "Para preguntas, contacte a su Líder de Equipo o escanee para soporte.",
        alertLabel: "Alerta de Calidad Activa",
        alertUnits: "unidades marcadas este turno",
        alertSince: "Activa Desde",
        supervisorBtn: "Supervisor",
        supervisorHeading: "Impacto Financiero del Tiempo Takt",
        financialStationValue: "Valor Esperado de Estación",
        financialCostMin: "Costo Pérdida Producción / Min",
        financialShiftProgress: "Progreso de Turno",
        financialOEE: "Estimado OEE",
        financialTaktOn: "En Meta",
        financialTaktRisk: "En Riesgo",
        toolsGridHeading: "Referencia de Herramientas Físicas",
        toolsGridSub: "Confirme que todas las herramientas cumplan las especificaciones antes de comenzar.",
        iotHeading: "Feed IoT de Seguridad de Vida en Vivo",
        iotMeshLabel: "Malla WiFi",
        iotBreathLabel: "Detección de Respiración",
        iotPresenceLabel: "Bloqueo de Presencia",
        iotPresenceVal: "Activo — Zona A",
        voiceHeading: "Control de Voz Activo",
        voiceListening: "Escuchando comandos...",
        voiceLastCmd: "Último Comando Confirmado",
        viewer3dHeading: "Mapa 3D Interactivo de Componentes",
        viewer3dBadge: "Lienzo WebGL Activo",
        viewer3dSub: "Toque y arrastre para rotar · Pellizque para zoom · Doble toque para restablecer",
        complianceHeading: "Compuerta de Cumplimiento",
        complianceSub: "Punto de Verificación de Calidad",
        compliancePassBtn: "Aprobado — Avanzar Unidad",
        complianceFailBtn: "Falla / Retrabajo",
        complianceReworkHeading: "Protocolo de Retrabajo Condicional — Iniciado",
        complianceRework1: "Detenga el avance de la unidad inmediatamente. Aplique etiqueta roja de retención y anote la posición en el mapa del piso.",
        complianceRework2: "Documente el modo de falla específico en la tablet del SGC usando el formulario QMS-RF-014. La documentación es obligatoria antes de cualquier retrabajo.",
        complianceRework3: "Notifique al Líder de Equipo. El LT evalúa si aplica retrabajo o descarte según la clase y severidad del defecto.",
        complianceRework4: "Si el retrabajo es autorizado: complete todas las acciones correctivas según la sección del SOP aplicable. Re-ejecute todas las verificaciones de calidad afectadas.",
        complianceRework5: "Re-ejecute esta compuerta de cumplimiento. Se requiere la contrafirma del Líder de Equipo antes de que la unidad sea autorizada para avanzar.",
        eSignEmpLabel: "ID de Empleado",
        eSignEmpPlaceholder: "ej. EMP-4471"
    }
};
// ── Unit / trim data ──────────────────────────────────────────────────────────
const unitBase = {
    sequence: "00847",
    vinMasked: "JHM ZT15···MX0",
    buildDate: "Jun 7, 2026",
    engine: "2.0L i-VTEC Turbo",
    colorCode: "NH-0096P",
    trim: "TOURING ELITE"
};
const unitLocale = {
    EN: {
        color: "Pearl White Tricoat",
        destination: "Dealer #1147 — Phoenix Metro North",
        pickList: [
            {
                pn: "83501-T3L-A01",
                desc: "Door Panel Liner",
                spec: "Soft-Touch Black"
            },
            {
                pn: "83591-T3L-A11",
                desc: "Door Grip Insert",
                spec: "Piano Black Premium"
            },
            {
                pn: "35750-T3L-A01",
                desc: "Switch Panel Assembly",
                spec: "Illuminated / Leather-Wrapped"
            },
            {
                pn: "34260-T3L-A01",
                desc: "Ambient Light Strip",
                spec: "Installed — Node B"
            }
        ]
    },
    ES: {
        color: "Blanco Perla Tricoat",
        destination: "Concesionario #1147 — Phoenix Metro Norte",
        pickList: [
            {
                pn: "83501-T3L-A01",
                desc: "Forro de Panel de Puerta",
                spec: "Negro Suave al Tacto"
            },
            {
                pn: "83591-T3L-A11",
                desc: "Inserto de Agarre de Puerta",
                spec: "Negro Piano Premium"
            },
            {
                pn: "35750-T3L-A01",
                desc: "Ensamble de Panel de Interruptores",
                spec: "Iluminado / Envuelto en Cuero"
            },
            {
                pn: "34260-T3L-A01",
                desc: "Tira de Luz Ambiental",
                spec: "Instalado — Nodo B"
            }
        ]
    }
};
// ── Ergonomic data ────────────────────────────────────────────────────────────
const ergoBase = {
    strainLevel: "HIGH",
    rotationNumber: 4,
    totalRotations: 8
};
const ergoLocale = {
    EN: {
        joints: "Wrist / Shoulder / Lower Back",
        shift: "Days Shift",
        recommendation: "Alternate grip technique every 3–4 installs. Engage core support belt. Use elbow rest pad during harness routing (Step 4). Report any pain or numbness immediately."
    },
    ES: {
        joints: "Muñeca / Hombro / Zona Lumbar",
        shift: "Turno Día",
        recommendation: "Alterne técnica de agarre cada 3–4 instalaciones. Use cinturón de soporte lumbar. Use almohadilla de descanso de codo durante el enrutado del arnés (Paso 4). Reporte cualquier dolor o entumecimiento de inmediato."
    }
};
// ── Life-safety mesh sensors ──────────────────────────────────────────────────
const presenceSensors = [
    {
        id: "PRESENCE",
        EN: "Personnel Detected",
        ES: "Personal Detectado",
        value: "2 Operators",
        status: "normal",
        sub: "Zone A · Station 14"
    },
    {
        id: "BREATH",
        EN: "Breathing Rate Avg",
        ES: "Frec. Resp. Prom.",
        value: "14 bpm",
        status: "normal",
        sub: "WiFi passive sensing"
    },
    {
        id: "MOTION",
        EN: "Motion Envelope",
        ES: "Envoltura de Movim.",
        value: "Active — normal",
        status: "normal",
        sub: "No intrusion detected"
    }
];
const ambientSensors = [
    {
        id: "VOC",
        EN: "Total VOC",
        ES: "COV Total",
        value: "0.44 mg/m³",
        status: "caution",
        threshold: "Limit: 0.50 mg/m³"
    },
    {
        id: "FORM",
        EN: "Formaldehyde",
        ES: "Formaldehído",
        value: "0.07 ppm",
        status: "normal",
        threshold: "Limit: 0.10 ppm"
    },
    {
        id: "PM25",
        EN: "PM 2.5",
        ES: "PM 2.5",
        value: "11 μg/m³",
        status: "normal",
        threshold: "Limit: 35 μg/m³"
    },
    {
        id: "O2",
        EN: "Oxygen",
        ES: "Oxígeno",
        value: "20.9%",
        status: "normal",
        threshold: "Min: 19.5%"
    }
];
// Legacy sensors still shown in secondary grid
const auxSensors = [
    {
        id: "TEMP",
        EN: "Ambient Temp",
        ES: "Temp. Ambiental",
        value: "72°F / 22°C",
        status: "normal"
    },
    {
        id: "NOISE",
        EN: "Noise Level",
        ES: "Nivel de Ruido",
        value: "81 dB",
        status: "caution"
    },
    {
        id: "HUM",
        EN: "Humidity",
        ES: "Humedad",
        value: "45% RH",
        status: "normal"
    },
    {
        id: "VIB",
        EN: "Vibration",
        ES: "Vibración",
        value: "0.3g RMS",
        status: "normal"
    }
];
// ── Quality alert ─────────────────────────────────────────────────────────────
const qualityAlert = {
    code: "QA-2026-117",
    severity: "HIGH",
    title: "Trending: Loose Retention Clip Engagement at C3 & C7",
    message: "3 units flagged this shift for insufficient clip retention at positions C3 and C7. All 8 clips must be individually confirmed before unit advancement. Do not sign off without Team Lead verification of flagged positions.",
    flaggedCount: 3,
    activeSince: "14:22",
    shift: "3rd Shift"
};
// ── Tool validation ───────────────────────────────────────────────────────────
const SPEC_SHEET = "ENG-SPEC-2047-REV4.1";
const toolValidation = [
    {
        id: "TW-09",
        name: "Torque Wrench",
        spec: "15 Nm ± 0.5 Nm",
        calibrated: "Jun 5, 2026"
    },
    {
        id: "JIG-04",
        name: "Panel Alignment Jig",
        spec: "P/N 2047-JIG-R4",
        calibrated: "Jun 1, 2026"
    },
    {
        id: "HCT-12",
        name: "Harness Connector Tool",
        spec: "5-pin / 8-pin compat.",
        calibrated: "May 30, 2026"
    },
    {
        id: "GG-03",
        name: "Gap Gauge",
        spec: "Max 3.0 mm tolerance",
        calibrated: "Jun 3, 2026"
    }
];
// ── SOP data ──────────────────────────────────────────────────────────────────
const sop = {
    id: "SOP-2047",
    revision: "Rev 4.1",
    EN: {
        title: "Inner Door Panel Installation",
        objective: "Ensure proper fitment, alignment, and retention of inner door panel assemblies on the passenger vehicle production line, meeting dimensional and functional quality specifications.",
        station: "Station 14 — Body Assembly",
        cycleTime: "6 min 30 sec",
        tools: [
            "Trim clip removal tool",
            "Torque wrench (15 Nm)",
            "Panel alignment jig",
            "Wire harness connector tool",
            "Plastic pry bar"
        ],
        safetyGear: [
            "Cut-resistant gloves (Level A4)",
            "Safety glasses (ANSI Z87.1)",
            "Steel-toed boots",
            "Hearing protection (85 dB+ zones)"
        ],
        steps: [
            {
                number: 1,
                title: "Verify Part Number",
                description: "Confirm the door panel part number on the label matches the current build sheet. Do not proceed with a mismatched part.",
                warning: null
            },
            {
                number: 2,
                title: "Inspect Door Aperture",
                description: "Clear the door aperture of any debris, loose fasteners, or obstructions. Verify aperture alignment is within spec before panel installation.",
                warning: null
            },
            {
                number: 3,
                title: "Connect Electrical Harness",
                description: "Connect window regulator, mirror, and door lock harness connectors. Each connector must produce an audible click when fully seated.",
                warning: "Verify connector orientation before pressing — forced mis-seated connectors require full harness replacement."
            },
            {
                number: 4,
                title: "Route & Clip Wiring",
                description: "Route harness through the door grommet and seat all wire clips in their retaining brackets. Ensure no wiring is pinched against sheet metal.",
                warning: null
            },
            {
                number: 5,
                title: "Align Panel to Aperture",
                description: "Position panel at the top two retention points first. Verify gap uniformity along the top edge before proceeding to clip engagement.",
                warning: null
            },
            {
                number: 6,
                title: "Engage All Retention Clips",
                description: "Press firmly at each of the 8 clip locations in sequence, starting from the top corners and working inward. Listen for click confirmation at each clip.",
                warning: null
            },
            {
                number: 7,
                title: "Install Screw Fasteners",
                description: "Install all screw fasteners using the torque wrench. Torque spec is 15 Nm. Do not impact-drive — hand-thread first to prevent cross-threading.",
                warning: null
            },
            {
                number: 8,
                title: "Verify Trim Gaps",
                description: "Inspect all panel-to-aperture gaps with the gap gauge. Maximum allowable gap is 3 mm. Check door seal interface for any separation or kinking.",
                warning: null
            }
        ],
        qualityChecks: [
            "All 8 clips engaged — no rattle when panel face is firmly pressed",
            "All 3 harness connectors fully seated (audible click confirmed)",
            "No visible gap at door seal interface",
            "Window and mirror controls operational",
            "Door lock and unlock function confirmed",
            "Trim gap ≤ 3 mm at all measurement points"
        ],
        escalation: [
            {
                trigger: "Panel alignment gap exceeds 3 mm",
                action: "Stop. Red-tag the unit. Notify Team Lead immediately. Do not send down the line."
            },
            {
                trigger: "Harness connector will not seat",
                action: "Do not force. Set aside and call Electrical Specialist (Ext. 4412). Forcing causes pin damage."
            },
            {
                trigger: "Any clip breakage or missing clip",
                action: "Replace clip from line-side stock. If stock is depleted, notify Material Handler (Ext. 4480)."
            },
            {
                trigger: "Injury or near-miss event",
                action: "Stop work immediately. Notify supervisor and call Safety (Ext. 911). Complete incident report before resuming."
            }
        ]
    },
    ES: {
        title: "Instalación del Panel Interior de la Puerta",
        objective: "Garantizar el ajuste, alineación y retención correctos de los ensambles del panel interior de la puerta en la línea de producción, cumpliendo las especificaciones dimensionales y funcionales de calidad.",
        station: "Estación 14 — Ensamble de Carrocería",
        cycleTime: "6 min 30 seg",
        tools: [
            "Herramienta para clips de panel",
            "Llave de torsión (15 Nm)",
            "Plantilla de alineación de panel",
            "Herramienta para conectores de arnés",
            "Palanca de plástico"
        ],
        safetyGear: [
            "Guantes resistentes a cortes (Nivel A4)",
            "Gafas de seguridad (ANSI Z87.1)",
            "Botas con punta de acero",
            "Protección auditiva (zonas +85 dB)"
        ],
        steps: [
            {
                number: 1,
                title: "Verificar Número de Pieza",
                description: "Confirme que el número de pieza del panel coincide con la hoja de producción actual. No continúe con una pieza incorrecta.",
                warning: null
            },
            {
                number: 2,
                title: "Inspeccionar la Abertura",
                description: "Limpie la abertura de la puerta de escombros, tornillos sueltos u obstrucciones. Verifique la alineación antes de instalar el panel.",
                warning: null
            },
            {
                number: 3,
                title: "Conectar el Arnés Eléctrico",
                description: "Conecte los arneses del elevador de ventana, espejo y cerradura. Cada conector debe producir un clic audible al asentarse completamente.",
                warning: "Verifique la orientación del conector antes de presionar — un conector mal asentado requiere reemplazo completo del arnés."
            },
            {
                number: 4,
                title: "Enrutar y Sujetar el Cableado",
                description: "Pase el arnés por el ojal de la puerta y asiente todos los clips en sus soportes. Asegúrese de que ningún cable esté pinzado contra la chapa metálica.",
                warning: null
            },
            {
                number: 5,
                title: "Alinear el Panel a la Abertura",
                description: "Posicione el panel en los dos puntos de retención superiores primero. Verifique la uniformidad del espacio en el borde superior antes de continuar.",
                warning: null
            },
            {
                number: 6,
                title: "Enganchar los Clips de Retención",
                description: "Presione firmemente en cada una de las 8 ubicaciones de clips en secuencia, comenzando por las esquinas superiores. Escuche el clic de confirmación en cada clip.",
                warning: null
            },
            {
                number: 7,
                title: "Instalar Tornillos de Sujeción",
                description: "Instale todos los tornillos con la llave de torsión. Especificación: 15 Nm. No use impacto — enrosque a mano primero para evitar daño a las roscas.",
                warning: null
            },
            {
                number: 8,
                title: "Verificar Espacios del Panel",
                description: "Inspeccione todos los espacios panel-abertura con el calibrador. El máximo permitido es 3 mm. Revise la interfaz del sellado de la puerta.",
                warning: null
            }
        ],
        qualityChecks: [
            "Los 8 clips enganchados — sin traqueteo al presionar el panel",
            "Los 3 conectores del arnés completamente asentados (clic audible confirmado)",
            "Sin espacio visible en la interfaz del sello de la puerta",
            "Controles de ventana y espejo operativos",
            "Función de bloqueo/desbloqueo de puerta confirmada",
            "Espacio del panel ≤ 3 mm en todos los puntos de medición"
        ],
        escalation: [
            {
                trigger: "El espacio del panel excede 3 mm",
                action: "Detener. Etiquetar la unidad en rojo. Notificar al Líder de Equipo. No enviar a la línea."
            },
            {
                trigger: "El conector del arnés no asienta",
                action: "No forzar. Llamar al Especialista Eléctrico (Ext. 4412). Forzar daña los pines del conector."
            },
            {
                trigger: "Clip roto o faltante",
                action: "Reemplazar clip del stock en línea. Si el stock está agotado, notificar al Manejador de Materiales (Ext. 4480)."
            },
            {
                trigger: "Lesión o casi-accidente",
                action: "Detener trabajo inmediatamente. Notificar al supervisor y llamar a Seguridad (Ext. 911). Completar reporte antes de reanudar."
            }
        ]
    }
};
// ── Tools visual grid ────────────────────────────────────────────────────────
const toolsGrid = [
    {
        id: "T1",
        name: "Non-Marring Trim Tool",
        spec: "Panel clip removal · interior surfaces",
        target: null,
        ppe: false
    },
    {
        id: "T2",
        name: "Digital Torque Driver",
        spec: "Calibrated · ±0.3 Nm accuracy",
        target: "5 Nm",
        ppe: false
    },
    {
        id: "T3",
        name: "Panel Alignment Jig",
        spec: "P/N JIG-R4 · ±0.5 mm tolerance",
        target: null,
        ppe: false
    },
    {
        id: "T4",
        name: "Harness Connector Tool",
        spec: "5-pin / 8-pin compatible",
        target: null,
        ppe: false
    },
    {
        id: "T5",
        name: "Precision Gap Gauge",
        spec: "Max tolerance: 3.0 mm",
        target: "≤ 3.0 mm",
        ppe: false
    },
    {
        id: "T6",
        name: "Cut-Resistant Gloves L4",
        spec: "ANSI A4 · MANDATORY PPE",
        target: null,
        ppe: true
    }
];
// ── Financial / supervisor data ───────────────────────────────────────────────
const financial = {
    stationValuePerHr: 24500,
    lostCostPerMin: 450,
    dailyTarget: 73,
    completedThisShift: 42,
    oee: 74.8
};
// ── Passdown log ──────────────────────────────────────────────────────────────
const passdownLog = [
    {
        id: 1,
        author: "Maddie R.",
        shift: "2nd Shift",
        time: "22:14",
        date: "Jun 6",
        severity: "warning",
        note: "Heads up — torque wrench #TW-08 is reading ~2 Nm high. Verified against the calibration unit. Pulled it from line-side and tagged it out. Use TW-09 instead until Tooling verifies in the morning."
    },
    {
        id: 2,
        author: "Darnell K.",
        shift: "1st Shift",
        time: "14:03",
        date: "Jun 6",
        severity: "info",
        note: "8mm retention clip stock is getting low at this station. Material handler was notified at 13:45. Resupply expected by start of 3rd shift."
    }
];
// ── Helpers ───────────────────────────────────────────────────────────────────
function fmt(s) {
    return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}
const statusStyle = {
    normal: {
        dot: "bg-green-500",
        text: "text-green-400",
        bg: "bg-green-900/20 border-green-700/30"
    },
    caution: {
        dot: "bg-amber-500",
        text: "text-amber-400",
        bg: "bg-amber-900/20 border-amber-700/30"
    },
    critical: {
        dot: "bg-red-500",
        text: "text-red-400",
        bg: "bg-red-900/30 border-red-700/40"
    }
};
function statusLabel(s, t) {
    return s === "normal" ? t.telemetryNormal : s === "caution" ? t.telemetryCaution : t.telemetryCritical;
}
// Catalyst weight formula: base 250g, humidity-corrected per ENG-CHEM-019-REV2
function calcCatalyst(hStr) {
    const h = parseFloat(hStr);
    if (isNaN(h) || hStr === "") return {
        weight: "—",
        factor: "—",
        state: "nominal"
    };
    if (h > 80) return {
        weight: "⛔",
        factor: "—",
        state: "danger"
    };
    if (h < 40) return {
        weight: (250 * 1.08).toFixed(1),
        factor: "×1.08",
        state: "low"
    };
    if (h > 60) return {
        weight: (250 * 0.94).toFixed(1),
        factor: "×0.94",
        state: "high"
    };
    return {
        weight: (250 * 1.00).toFixed(1),
        factor: "×1.00",
        state: "nominal"
    };
}
function SopDetailPage() {
    _s();
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("EN");
    const [elapsed, setElapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cycles, setCycles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [rotationLeft, setRotationLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ROTATION_SECONDS);
    const [telemetryOpen, setTelemetryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logOpen, setLogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Variable condition
    const [humidity, setHumidity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("45");
    // Step outcomes
    const [stepOutcomes, setStepOutcomes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // E-signature
    const [supervisorMode, setSupervisorMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [iotTick, setIotTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [complianceOutcome, setComplianceOutcome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [employeeId, setEmployeeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [pin, setPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [pinError, setPinError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pinRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const sopId = params.id;
    const [sopLoading, setSopLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [sopNotFound, setSopNotFound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sopTitle, setSopTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [dbSteps, setDbSteps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SopDetailPage.useEffect": ()=>{
            const id = setInterval({
                "SopDetailPage.useEffect.id": ()=>{
                    setElapsed({
                        "SopDetailPage.useEffect.id": (prev)=>{
                            if (prev >= TAKT_SECONDS * 10 - 1) {
                                setCycles({
                                    "SopDetailPage.useEffect.id": (c)=>c + 1
                                }["SopDetailPage.useEffect.id"]);
                                return 0;
                            }
                            return prev + 1;
                        }
                    }["SopDetailPage.useEffect.id"]);
                }
            }["SopDetailPage.useEffect.id"], 100);
            return ({
                "SopDetailPage.useEffect": ()=>clearInterval(id)
            })["SopDetailPage.useEffect"];
        }
    }["SopDetailPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SopDetailPage.useEffect": ()=>{
            const id = setInterval({
                "SopDetailPage.useEffect.id": ()=>{
                    setRotationLeft({
                        "SopDetailPage.useEffect.id": (prev)=>prev > 0 ? prev - 1 : ROTATION_SECONDS
                    }["SopDetailPage.useEffect.id"]);
                }
            }["SopDetailPage.useEffect.id"], 1000);
            return ({
                "SopDetailPage.useEffect": ()=>clearInterval(id)
            })["SopDetailPage.useEffect"];
        }
    }["SopDetailPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SopDetailPage.useEffect": ()=>{
            const id = setInterval({
                "SopDetailPage.useEffect.id": ()=>setIotTick({
                        "SopDetailPage.useEffect.id": (n)=>n + 1
                    }["SopDetailPage.useEffect.id"])
            }["SopDetailPage.useEffect.id"], 3000);
            return ({
                "SopDetailPage.useEffect": ()=>clearInterval(id)
            })["SopDetailPage.useEffect"];
        }
    }["SopDetailPage.useEffect"], []);
    const t = ui[lang];
    const d = sop[lang];
    const ud = unitLocale[lang];
    const eg = ergoLocale[lang];
    const taktProgress = elapsed / (TAKT_SECONDS * 10) * 100;
    const elapsedSec = Math.floor(elapsed / 10);
    const isTaktUrgent = taktProgress >= 80;
    const rotBarWidth = rotationLeft / ROTATION_SECONDS * 100;
    const isRotUrgent = rotationLeft < ROTATION_SECONDS * 0.15;
    const isRotWarning = rotationLeft < ROTATION_SECONDS * 0.35;
    const catalyst = calcCatalyst(humidity);
    const mockBpm = [
        13,
        14,
        14,
        15,
        14,
        14,
        13,
        15
    ][iotTick % 8];
    const mockOperators = iotTick % 7 === 0 ? 1 : 2;
    const meshSignal = iotTick % 9 === 0 ? "Good" : "Strong";
    function handlePinChange(v) {
        if (submitted) return;
        const digits = v.replace(/\D/g, "").slice(0, 4);
        setPin(digits);
        setPinError(false);
    }
    function handleAuthorize() {
        if (pin === MOCK_PIN && employeeId.trim().toUpperCase() === MOCK_EMP_ID) {
            setSubmitted(true);
            setPinError(false);
        } else {
            setPinError(true);
            setPin("");
            pinRef.current?.focus();
        }
    }
    function setOutcome(stepNum, outcome) {
        setStepOutcomes((prev)=>({
                ...prev,
                [stepNum]: prev[stepNum] === outcome ? null : outcome
            }));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#121212] text-white font-sans pb-64",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes alert-flash {
          0%,100% { background-color: rgba(120,20,20,0.55); }
          50%      { background-color: rgba(180,25,25,0.72); }
        }
        .qa-alert { animation: alert-flash 0.9s ease-in-out infinite; }
        @keyframes breath-wave {
          0%   { transform: scaleY(0.6) scaleX(1); opacity: 0.5; }
          50%  { transform: scaleY(1) scaleX(1.04); opacity: 1; }
          100% { transform: scaleY(0.6) scaleX(1); opacity: 0.5; }
        }
        .breath-bar { animation: breath-wave 4s ease-in-out infinite; transform-origin: bottom center; }
        @keyframes voice-ring {
          0%   { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        .voice-ring { animation: voice-ring 2s ease-out infinite; transform-origin: center; }
        @keyframes model-rock {
          0%,100% { transform: skewX(0deg) skewY(0deg); }
          25%     { transform: skewX(0.6deg) skewY(0.2deg); }
          75%     { transform: skewX(-0.6deg) skewY(-0.2deg); }
        }
        .model-rock { animation: model-rock 6s ease-in-out infinite; }
      `
            }, void 0, false, {
                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                lineNumber: 489,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-20 bg-[#0a0a0a] border-b border-red-600/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pt-3 pb-2 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500 text-xs font-bold tracking-widest uppercase",
                                children: "OpsForge"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 517,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSupervisorMode((v)=>!v),
                                        title: "Supervisor Mode",
                                        className: `flex items-center gap-1 px-2 py-1 rounded-sm border text-xs font-bold uppercase tracking-widest transition-colors ${supervisorMode ? "border-amber-600/80 bg-amber-900/30 text-amber-400" : "border-white/10 text-white/20 hover:text-white/40"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-3 h-3 shrink-0",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: 2.5,
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 0 1 21.75 8.25Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 523,
                                                columnNumber: 13
                                            }, this),
                                            t.supervisorBtn
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 520,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center border border-red-600/40 rounded-sm overflow-hidden",
                                        children: [
                                            "EN",
                                            "ES"
                                        ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setLang(l),
                                                className: `px-3 py-1 text-xs font-black tracking-widest transition-colors ${lang === l ? "bg-red-600 text-white" : "text-[#9CA3AF] hover:text-white"}`,
                                                children: l
                                            }, l, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 530,
                                                columnNumber: 15
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 528,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 518,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-3 space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#9CA3AF] text-xs font-bold uppercase tracking-widest",
                                        children: [
                                            t.taktLabel,
                                            " · ",
                                            sop.id,
                                            " · ",
                                            t.cycleLabel,
                                            " #",
                                            cycles
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 540,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-mono text-xs font-bold tabular-nums ${isTaktUrgent ? "text-red-400" : "text-[#9CA3AF]"}`,
                                        children: [
                                            elapsedSec,
                                            "s / ",
                                            TAKT_SECONDS,
                                            "s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 543,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 539,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 bg-white/10 rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-full rounded-full transition-[width] duration-100 ${isTaktUrgent ? "bg-red-500 animate-pulse" : "bg-red-700"}`,
                                    style: {
                                        width: `${taktProgress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 548,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 547,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 538,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                lineNumber: 515,
                columnNumber: 7
            }, this),
            supervisorMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-amber-950/30 border-b border-amber-600/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto px-4 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-3.5 h-3.5 text-amber-400 shrink-0",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 2.5,
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 560,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 559,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-amber-400 text-xs font-black uppercase tracking-widest",
                                    children: t.supervisorHeading
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 562,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `ml-auto text-xs font-black uppercase tracking-widest px-2 py-0.5 rounded-sm border ${isTaktUrgent ? "border-red-600/60 bg-red-900/30 text-red-400" : "border-green-700/50 bg-green-900/20 text-green-400"}`,
                                    children: isTaktUrgent ? t.financialTaktRisk : t.financialTaktOn
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 563,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                            lineNumber: 558,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
                            children: [
                                {
                                    label: t.financialStationValue,
                                    value: `$${financial.stationValuePerHr.toLocaleString()}`,
                                    unit: "/ hr"
                                },
                                {
                                    label: t.financialCostMin,
                                    value: `$${financial.lostCostPerMin}`,
                                    unit: "/ min"
                                },
                                {
                                    label: t.financialShiftProgress,
                                    value: `${financial.completedThisShift} / ${financial.dailyTarget}`,
                                    unit: "units"
                                },
                                {
                                    label: t.financialOEE,
                                    value: `${financial.oee}%`,
                                    unit: "OEE"
                                }
                            ].map(({ label, value, unit })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-black/30 border border-amber-700/30 rounded-sm px-3 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-amber-500/60 text-xs uppercase tracking-widest mb-0.5",
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 575,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-amber-300 text-lg font-black tabular-nums leading-tight",
                                            children: value
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 576,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-amber-600/50 text-xs",
                                            children: unit
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 577,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, label, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 574,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                            lineNumber: 567,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                    lineNumber: 557,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                lineNumber: 556,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#0d0d0d] border-b border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto px-4 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#9CA3AF] text-xs uppercase tracking-widest",
                                            children: t.seqLabel
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 590,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white text-lg font-black tracking-tight tabular-nums",
                                            children: [
                                                "#",
                                                unitBase.sequence
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 591,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 589,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 w-px bg-white/15 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 593,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "border border-amber-600/60 bg-amber-900/20 text-amber-400 text-xs font-black uppercase tracking-widest px-2 py-0.5 rounded-sm",
                                    children: unitBase.trim
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 594,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 w-px bg-white/15 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 595,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#9CA3AF] text-xs font-mono",
                                    children: unitBase.colorCode
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 596,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                            lineNumber: 588,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-x-4 gap-y-0.5 mt-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#9CA3AF] text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/40 uppercase tracking-wider text-[10px]",
                                            children: [
                                                t.colorLabel,
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 599,
                                            columnNumber: 54
                                        }, this),
                                        ud.color
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 599,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#9CA3AF] text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/40 uppercase tracking-wider text-[10px]",
                                            children: [
                                                t.engineLabel,
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 600,
                                            columnNumber: 54
                                        }, this),
                                        unitBase.engine
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 600,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#9CA3AF] text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/40 uppercase tracking-wider text-[10px]",
                                            children: [
                                                t.destLabel,
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 601,
                                            columnNumber: 54
                                        }, this),
                                        ud.destination
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 601,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                            lineNumber: 598,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                    lineNumber: 587,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                lineNumber: 586,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "qa-alert border-b border-red-600/60",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto px-4 py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mt-0.5 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 611,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-full bg-red-400 animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 612,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 610,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-2 flex-wrap mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-red-400 text-xs font-black uppercase tracking-widest",
                                                children: t.alertLabel
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 616,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#9CA3AF] text-xs font-mono",
                                                        children: qualityAlert.code
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 618,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-red-600 text-white text-xs font-black uppercase tracking-wider px-1.5 py-0.5 rounded-sm",
                                                        children: qualityAlert.severity
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 617,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 615,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white text-sm font-bold leading-snug mb-1",
                                        children: qualityAlert.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 622,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-200/70 text-xs leading-relaxed",
                                        children: qualityAlert.message
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 623,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mt-2 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-400 text-xs font-bold",
                                                children: [
                                                    "▲ ",
                                                    qualityAlert.flaggedCount,
                                                    " ",
                                                    t.alertUnits
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 625,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#9CA3AF] text-xs",
                                                children: [
                                                    t.alertSince,
                                                    ": ",
                                                    qualityAlert.activeSince,
                                                    " · ",
                                                    qualityAlert.shift
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 626,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 624,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 614,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 609,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                    lineNumber: 608,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                lineNumber: 607,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto px-4 pt-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500 text-xs font-bold tracking-widest uppercase border border-red-600/50 px-2 py-0.5 rounded-sm",
                                        children: sop.revision
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 639,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#9CA3AF] text-xs",
                                        children: d.station
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 640,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 638,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-black tracking-tight leading-tight text-white uppercase mt-2",
                                children: d.title
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 642,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 border-l-4 border-red-600 pl-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold text-red-500 uppercase tracking-widest mb-1",
                                        children: t.objectiveLabel
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 644,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#9CA3AF] text-sm leading-relaxed",
                                        children: d.objective
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 645,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 643,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#9CA3AF] text-xs uppercase tracking-wider",
                                        children: [
                                            t.cycleTimeLabel,
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 648,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-xs font-bold",
                                        children: d.cycleTime
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 649,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 647,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 637,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 653,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mb-1",
                                children: t.toolsGridHeading
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 657,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#9CA3AF]/50 text-xs mb-4",
                                children: t.toolsGridSub
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 658,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
                                children: toolsGrid.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `bg-[#0f0f0f] rounded-sm border overflow-hidden ${tool.ppe ? "border-red-700/50" : "border-white/10"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-center justify-center h-16 border-b ${tool.ppe ? "border-red-700/30 bg-red-950/20" : "border-white/10 bg-[#080808]"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 64 64",
                                                    className: "w-10 h-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            width: "64",
                                                            height: "64",
                                                            fill: "transparent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 665,
                                                            columnNumber: 21
                                                        }, this),
                                                        tool.id === "T1" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M 14,50 L 14,20 Q 14,12 22,12 L 36,12 Q 44,12 44,20 L 44,26",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "3.5",
                                                                    fill: "none",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 666,
                                                                    columnNumber: 44
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "44",
                                                                    cy: "30",
                                                                    r: "5",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "2.5",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 666,
                                                                    columnNumber: 184
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        tool.id === "T2" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "32",
                                                                    y1: "8",
                                                                    x2: "32",
                                                                    y2: "54",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "4",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 667,
                                                                    columnNumber: 44
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "16",
                                                                    y1: "8",
                                                                    x2: "48",
                                                                    y2: "8",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "4",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 667,
                                                                    columnNumber: 137
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "26",
                                                                    y: "46",
                                                                    width: "12",
                                                                    height: "8",
                                                                    rx: "2",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "2",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 667,
                                                                    columnNumber: 229
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        tool.id === "T3" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M 12,52 L 12,12 L 52,12",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "3.5",
                                                                    fill: "none",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 668,
                                                                    columnNumber: 44
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M 22,52 L 22,22 L 52,22",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "1.5",
                                                                    fill: "none",
                                                                    strokeLinecap: "round",
                                                                    strokeDasharray: "5,3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 668,
                                                                    columnNumber: 148
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        tool.id === "T4" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "16",
                                                                    y: "26",
                                                                    width: "32",
                                                                    height: "22",
                                                                    rx: "4",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "2.5",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 669,
                                                                    columnNumber: 44
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "24",
                                                                    y1: "26",
                                                                    x2: "24",
                                                                    y2: "16",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "2.5",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 669,
                                                                    columnNumber: 142
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "40",
                                                                    y1: "26",
                                                                    x2: "40",
                                                                    y2: "16",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "2.5",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 669,
                                                                    columnNumber: 238
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "24",
                                                                    cy: "13",
                                                                    r: "3",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "2",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 669,
                                                                    columnNumber: 334
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "40",
                                                                    cy: "13",
                                                                    r: "3",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "2",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 669,
                                                                    columnNumber: 410
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        tool.id === "T5" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "8",
                                                                    y: "28",
                                                                    width: "48",
                                                                    height: "10",
                                                                    rx: "5",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "2.5",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 670,
                                                                    columnNumber: 44
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "24",
                                                                    y1: "28",
                                                                    x2: "24",
                                                                    y2: "38",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "1.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 670,
                                                                    columnNumber: 141
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "40",
                                                                    y1: "28",
                                                                    x2: "40",
                                                                    y2: "38",
                                                                    stroke: "#ef4444",
                                                                    strokeWidth: "1.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 670,
                                                                    columnNumber: 215
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: "32",
                                                                    y: "24",
                                                                    textAnchor: "middle",
                                                                    fontSize: "8",
                                                                    fill: "#ef4444",
                                                                    fontFamily: "monospace",
                                                                    children: "3mm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 670,
                                                                    columnNumber: 289
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        tool.id === "T6" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M 18,54 L 18,28 Q 18,18 26,18 L 30,18 Q 32,18 32,22 L 32,26 L 36,18 Q 36,13 41,13 Q 46,13 46,18 L 46,26 L 46,54 Z",
                                                                stroke: "#ef4444",
                                                                strokeWidth: "2.5",
                                                                fill: "none",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 671,
                                                                columnNumber: 44
                                                            }, this)
                                                        }, void 0, false)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 663,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white text-xs font-bold leading-snug",
                                                        children: tool.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 675,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#9CA3AF] text-xs mt-0.5 leading-snug",
                                                        children: tool.spec
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 676,
                                                        columnNumber: 19
                                                    }, this),
                                                    tool.target && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block mt-1.5 text-xs font-black text-red-400 border border-red-700/50 bg-red-950/20 px-1.5 py-0.5 rounded-sm",
                                                        children: tool.target
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 678,
                                                        columnNumber: 21
                                                    }, this),
                                                    tool.ppe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block mt-1.5 text-xs font-black text-red-400 border border-red-700/50 bg-red-950/30 px-1.5 py-0.5 rounded-sm",
                                                        children: "REQUIRED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 674,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, tool.id, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 661,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 659,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 656,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 689,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xs font-bold text-[#9CA3AF] uppercase tracking-widest",
                                                children: t.iotHeading
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 695,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1 bg-red-900/30 border border-red-700/40 rounded-sm px-1.5 py-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-400 text-xs font-bold uppercase",
                                                        children: "Live"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 698,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 696,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 694,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#9CA3AF]/40 text-xs font-mono tabular-nums",
                                        children: "↺ 3s"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 701,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 693,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-2 sm:grid-cols-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#0a0a0a] border border-green-700/30 rounded-sm px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#9CA3AF] text-xs uppercase tracking-widest mb-1",
                                                children: t.iotMeshLabel
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 705,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white text-sm font-bold",
                                                children: meshSignal
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 706,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-400 text-xs font-bold",
                                                        children: "802.11ax · 4 nodes active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 709,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 707,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 704,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#0a0a0a] border border-green-700/30 rounded-sm px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#9CA3AF] text-xs uppercase tracking-widest mb-1",
                                                children: t.iotBreathLabel
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 713,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white text-sm font-bold tabular-nums",
                                                children: [
                                                    mockBpm,
                                                    " bpm"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 714,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 716,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-400 text-xs font-bold",
                                                        children: [
                                                            "Normal · ",
                                                            mockOperators,
                                                            " operator",
                                                            mockOperators > 1 ? "s" : ""
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 717,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 715,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 712,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#0a0a0a] border border-green-700/30 rounded-sm px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#9CA3AF] text-xs uppercase tracking-widest mb-1",
                                                children: t.iotPresenceLabel
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 721,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white text-sm font-bold",
                                                children: t.iotPresenceVal
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 722,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-400 text-xs font-bold",
                                                        children: "Secured · no intrusion"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 725,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 723,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 720,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 703,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 692,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 731,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#0a0a0a] border border-white/10 rounded-sm px-4 py-4 flex items-center gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative shrink-0 flex items-center justify-center w-12 h-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "voice-ring absolute w-8 h-8 rounded-full border border-red-500/60"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 738,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "voice-ring absolute w-8 h-8 rounded-full border border-red-500/40",
                                            style: {
                                                animationDelay: "0.7s"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 739,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "voice-ring absolute w-8 h-8 rounded-full border border-red-500/20",
                                            style: {
                                                animationDelay: "1.4s"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 740,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 w-8 h-8 rounded-full bg-red-700/30 border border-red-600/70 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 text-red-400",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: 2,
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 742,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 741,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 737,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white text-xs font-black uppercase tracking-widest",
                                                    children: t.voiceHeading
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 749,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-400 text-xs animate-pulse",
                                                    children: "●"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 750,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 748,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#9CA3AF] text-sm",
                                            children: t.voiceListening
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 752,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#9CA3AF]/40 text-xs mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/30 uppercase tracking-wider text-[10px]",
                                                    children: [
                                                        t.voiceLastCmd,
                                                        ": "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 754,
                                                    columnNumber: 17
                                                }, this),
                                                '"Step 6 confirmed — all clips engaged"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 753,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 747,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                            lineNumber: 735,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 734,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 761,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-bold text-[#9CA3AF] uppercase tracking-widest",
                                        children: t.viewer3dHeading
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 766,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1 border border-red-600/50 bg-red-950/20 text-red-400 text-xs font-black uppercase tracking-widest px-2 py-0.5 rounded-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 768,
                                                columnNumber: 15
                                            }, this),
                                            t.viewer3dBadge
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 767,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 765,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#050505] border border-white/10 rounded-sm overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "model-rock",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 400 260",
                                            className: "w-full",
                                            "aria-label": "3D component map placeholder",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                            id: "grid3d",
                                                            width: "20",
                                                            height: "20",
                                                            patternUnits: "userSpaceOnUse",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M 20 0 L 0 0 0 20",
                                                                fill: "none",
                                                                stroke: "rgba(255,255,255,0.025)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 777,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 776,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                                            id: "glow3d",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                                    stdDeviation: "2",
                                                                    result: "blur"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 780,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                                            in: "blur"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                            lineNumber: 781,
                                                                            columnNumber: 30
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                                            in: "SourceGraphic"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                            lineNumber: 781,
                                                                            columnNumber: 54
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 781,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 779,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 775,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "400",
                                                    height: "260",
                                                    fill: "#040404"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 785,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "400",
                                                    height: "260",
                                                    fill: "url(#grid3d)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                    points: "100,55 280,55 280,210 100,210",
                                                    fill: "#0a0a0a",
                                                    stroke: "#7f1d1d",
                                                    strokeWidth: "1.5",
                                                    filter: "url(#glow3d)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 788,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                    points: "100,55 280,55 306,34 126,34",
                                                    fill: "#0d0d0d",
                                                    stroke: "#dc2626",
                                                    strokeWidth: "1.2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 790,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                    points: "280,55 306,34 306,189 280,210",
                                                    fill: "#080808",
                                                    stroke: "#991b1b",
                                                    strokeWidth: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 792,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "120",
                                                    y: "72",
                                                    width: "140",
                                                    height: "60",
                                                    rx: "3",
                                                    fill: "#060606",
                                                    stroke: "rgba(239,68,68,0.3)",
                                                    strokeWidth: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 794,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "120",
                                                    y1: "148",
                                                    x2: "260",
                                                    y2: "148",
                                                    stroke: "rgba(255,255,255,0.04)",
                                                    strokeWidth: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 796,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "120",
                                                    y1: "170",
                                                    x2: "260",
                                                    y2: "170",
                                                    stroke: "rgba(255,255,255,0.03)",
                                                    strokeWidth: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 797,
                                                    columnNumber: 17
                                                }, this),
                                                [
                                                    [
                                                        108,
                                                        63
                                                    ],
                                                    [
                                                        272,
                                                        63
                                                    ],
                                                    [
                                                        100,
                                                        130
                                                    ],
                                                    [
                                                        100,
                                                        185
                                                    ],
                                                    [
                                                        272,
                                                        130
                                                    ],
                                                    [
                                                        272,
                                                        185
                                                    ],
                                                    [
                                                        120,
                                                        202
                                                    ],
                                                    [
                                                        260,
                                                        202
                                                    ]
                                                ].map(([x, y], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: x,
                                                                cy: y,
                                                                r: 5,
                                                                fill: i === 2 || i === 6 ? "#3b0808" : "#1a0505",
                                                                stroke: i === 2 || i === 6 ? "#ef4444" : "#dc2626",
                                                                strokeWidth: i === 2 || i === 6 ? "1.5" : "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 801,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: x,
                                                                cy: y,
                                                                r: 2,
                                                                fill: i === 2 || i === 6 ? "#fca5a5" : "#ef4444"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 802,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 800,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "120",
                                                    y1: "55",
                                                    x2: "146",
                                                    y2: "34",
                                                    stroke: "rgba(220,38,38,0.2)",
                                                    strokeWidth: "0.75",
                                                    strokeDasharray: "3,3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 806,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "200",
                                                    y1: "55",
                                                    x2: "226",
                                                    y2: "34",
                                                    stroke: "rgba(220,38,38,0.2)",
                                                    strokeWidth: "0.75",
                                                    strokeDasharray: "3,3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 807,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "260",
                                                    y1: "55",
                                                    x2: "286",
                                                    y2: "34",
                                                    stroke: "rgba(220,38,38,0.2)",
                                                    strokeWidth: "0.75",
                                                    strokeDasharray: "3,3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 808,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "340",
                                                    y: "220",
                                                    fontSize: "8",
                                                    fill: "rgba(239,68,68,0.4)",
                                                    fontFamily: "monospace",
                                                    children: "X"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 810,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "350",
                                                    y: "210",
                                                    fontSize: "8",
                                                    fill: "rgba(239,68,68,0.3)",
                                                    fontFamily: "monospace",
                                                    children: "Y"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 811,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "350",
                                                    y: "230",
                                                    fontSize: "8",
                                                    fill: "rgba(239,68,68,0.25)",
                                                    fontFamily: "monospace",
                                                    children: "Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 812,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "344",
                                                    y1: "218",
                                                    x2: "368",
                                                    y2: "218",
                                                    stroke: "rgba(239,68,68,0.3)",
                                                    strokeWidth: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 813,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "344",
                                                    y1: "218",
                                                    x2: "344",
                                                    y2: "195",
                                                    stroke: "rgba(239,68,68,0.25)",
                                                    strokeWidth: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 814,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "344",
                                                    y1: "218",
                                                    x2: "326",
                                                    y2: "232",
                                                    stroke: "rgba(239,68,68,0.2)",
                                                    strokeWidth: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 815,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "100",
                                                    y1: "230",
                                                    x2: "280",
                                                    y2: "230",
                                                    stroke: "rgba(255,255,255,0.06)",
                                                    strokeWidth: "0.75"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 817,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "100",
                                                    y1: "226",
                                                    x2: "100",
                                                    y2: "234",
                                                    stroke: "rgba(255,255,255,0.06)",
                                                    strokeWidth: "0.75"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 818,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "280",
                                                    y1: "226",
                                                    x2: "280",
                                                    y2: "234",
                                                    stroke: "rgba(255,255,255,0.06)",
                                                    strokeWidth: "0.75"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 819,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "190",
                                                    y: "242",
                                                    textAnchor: "middle",
                                                    fontSize: "7",
                                                    fill: "rgba(156,163,175,0.3)",
                                                    fontFamily: "monospace",
                                                    children: [
                                                        "PANEL WIDTH — ",
                                                        sop.id,
                                                        "-R4.1"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 820,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M 36,130 Q 30,110 46,100",
                                                    stroke: "rgba(255,255,255,0.08)",
                                                    strokeWidth: "1.5",
                                                    fill: "none",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 822,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M 44,99 L 46,100 L 44,104",
                                                    stroke: "rgba(255,255,255,0.08)",
                                                    strokeWidth: "1.5",
                                                    fill: "none",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 823,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 774,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 773,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 border-t border-white/10 bg-[#080808] flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#9CA3AF]/40 text-xs",
                                                children: t.viewer3dSub
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 827,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#9CA3AF]/30 text-xs font-mono",
                                                children: [
                                                    "v",
                                                    sop.revision
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 828,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 826,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 772,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 764,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 833,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mb-3",
                                children: t.pickListHeading
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 837,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#0f0f0f] border border-amber-600/30 rounded-sm overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-[auto_1fr_auto] gap-3 px-4 py-2 border-b border-white/10 bg-amber-950/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-500/70 text-xs font-bold uppercase tracking-widest",
                                                children: t.pnLabel
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 840,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-500/70 text-xs font-bold uppercase tracking-widest",
                                                children: t.descLabel
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 841,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-500/70 text-xs font-bold uppercase tracking-widest",
                                                children: t.specLabel
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 842,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 839,
                                        columnNumber: 13
                                    }, this),
                                    ud.pickList.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-[auto_1fr_auto] gap-3 px-4 py-3 border-b border-white/10 last:border-0 items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-amber-400 text-xs font-mono whitespace-nowrap",
                                                    children: item.pn
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 846,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-xs font-bold",
                                                    children: item.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 847,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#9CA3AF] text-xs text-right whitespace-nowrap",
                                                    children: item.spec
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 848,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 845,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 838,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 836,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 854,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#0f0f0f] border border-white/10 rounded-sm overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-3 border-b border-white/10 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 text-red-500 shrink-0",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: 2.5,
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 861,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 860,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xs font-black text-white uppercase tracking-widest",
                                            children: t.ergoHeading
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 863,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 859,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 pt-3 pb-0 grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#9CA3AF] text-xs uppercase tracking-widest mb-1",
                                                    children: t.strainLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 867,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1.5 bg-red-900/40 border border-red-600/60 text-red-400 text-xs font-black uppercase tracking-wider px-2 py-1 rounded-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-red-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 869,
                                                            columnNumber: 19
                                                        }, this),
                                                        ergoBase.strainLevel
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 868,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 866,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#9CA3AF] text-xs uppercase tracking-widest mb-1",
                                                    children: t.jointsLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 873,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white text-xs font-bold leading-snug",
                                                    children: eg.joints
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 874,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 872,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 865,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 pt-3 pb-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#9CA3AF] text-xs uppercase tracking-widest mb-1",
                                            children: t.recLabel
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 878,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#9CA3AF] text-xs leading-relaxed",
                                            children: eg.recommendation
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 879,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 877,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 pt-4 pb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#9CA3AF] text-xs uppercase tracking-widest",
                                                    children: t.rotationLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 883,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `font-mono text-sm font-black tabular-nums ${isRotUrgent ? "text-red-400" : "text-white"}`,
                                                            children: fmt(rotationLeft)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 885,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#9CA3AF] text-xs",
                                                            children: [
                                                                t.rotationNumLabel,
                                                                " #",
                                                                ergoBase.rotationNumber,
                                                                " ",
                                                                t.rotationOfLabel,
                                                                " ",
                                                                ergoBase.totalRotations,
                                                                " · ",
                                                                eg.shift
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 886,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 884,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 882,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-2.5 bg-white/10 rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `h-full rounded-full transition-[width] duration-1000 ${isRotUrgent ? "bg-red-500 animate-pulse" : isRotWarning ? "bg-red-600" : "bg-red-800"}`,
                                                style: {
                                                    width: `${rotBarWidth}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 890,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 889,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 881,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                            lineNumber: 858,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 857,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 897,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-sm border border-red-600 bg-black overflow-hidden",
                            style: {
                                boxShadow: "0 0 24px 2px rgba(220,38,38,0.25)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full",
                                    style: {
                                        paddingBottom: "56.25%"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        className: "absolute inset-0 w-full h-full",
                                        src: "https://www.w3schools.com/html/mov_bbb.mp4",
                                        controls: true,
                                        playsInline: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 903,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 902,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-2 border-t border-red-600/30 bg-[#0d0d0d]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#9CA3AF] text-xs tracking-wide",
                                        children: t.videoCaption
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 906,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 905,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                            lineNumber: 901,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 900,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 911,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-red-600 bg-red-600/5 rounded-sm p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5 text-red-500 shrink-0",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: 2.5,
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 918,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 917,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-red-500 text-sm font-black uppercase tracking-widest",
                                            children: t.toolsHeading
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 920,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 916,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-500/70 text-xs font-bold uppercase tracking-widest mb-2",
                                                    children: t.toolsLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 924,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-1.5",
                                                    children: d.tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-2 text-sm text-white",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 928,
                                                                    columnNumber: 23
                                                                }, this),
                                                                tool
                                                            ]
                                                        }, tool, true, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 927,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 925,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 923,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-500/70 text-xs font-bold uppercase tracking-widest mb-2",
                                                    children: t.ppeLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 934,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-1.5",
                                                    children: d.safetyGear.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-2 text-sm text-white",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 938,
                                                                    columnNumber: 23
                                                                }, this),
                                                                item
                                                            ]
                                                        }, item, true, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 937,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 935,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 933,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 922,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                            lineNumber: 915,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 914,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 947,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#0f0f0f] border border-white/10 rounded-sm overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-3 border-b border-white/10 flex items-start justify-between gap-3 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xs font-black text-white uppercase tracking-widest",
                                                    children: t.validationHeading
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 954,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#9CA3AF] text-xs mt-0.5",
                                                    children: [
                                                        t.validationSpecSheet,
                                                        ": ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-red-400",
                                                            children: SPEC_SHEET
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 955,
                                                            columnNumber: 87
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 955,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 953,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 rounded-full bg-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 958,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-400 text-xs font-bold uppercase tracking-widest",
                                                    children: t.validationAllClear
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 959,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 957,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 952,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "divide-y divide-white/10",
                                    children: toolValidation.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-3 flex items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white text-sm font-bold leading-tight",
                                                            children: tool.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 966,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#9CA3AF] text-xs mt-0.5",
                                                            children: tool.spec
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 967,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 965,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#9CA3AF] text-xs font-mono",
                                                            children: tool.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 970,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1 justify-end mt-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-3 h-3 text-green-500 shrink-0",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    strokeWidth: 3,
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "M4.5 12.75l6 6 9-13.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                        lineNumber: 973,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 972,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-green-400 text-xs font-bold uppercase tracking-wider",
                                                                    children: t.validationVerified
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 975,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 971,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#9CA3AF]/50 text-xs mt-0.5",
                                                            children: [
                                                                t.validationCal,
                                                                " ",
                                                                tool.calibrated
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 977,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 969,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, tool.id, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 964,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 962,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                            lineNumber: 951,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 950,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 985,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#0c0c0c] border border-red-700/40 rounded-sm overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-3 border-b border-red-700/30 bg-red-950/10 flex items-center justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 text-red-500 shrink-0",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 2,
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1 1 .03 2.81-1.407 2.674A21.447 21.447 0 0 1 12 19.5a21.447 21.447 0 0 1-8.793-.624c-1.439-.137-2.408-1.674-1.407-2.674L5 14.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 994,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 993,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xs font-black text-white uppercase tracking-widest",
                                                    children: t.varCondHeading
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 996,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 992,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500/60 text-xs font-mono",
                                            children: "ENG-CHEM-019-REV2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 998,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 991,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 pt-4 pb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#9CA3AF] text-xs leading-relaxed mb-4",
                                            children: t.varCondDesc
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1002,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[#9CA3AF] text-xs uppercase tracking-widest block mb-2",
                                                            children: t.humidityLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1008,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    max: "100",
                                                                    step: "1",
                                                                    value: humidity,
                                                                    onChange: (e)=>setHumidity(e.target.value),
                                                                    className: "w-full bg-[#080808] border border-white/20 rounded-sm text-white text-lg font-black tabular-nums px-3 py-2.5 pr-12 focus:outline-none focus:border-red-500 transition-colors appearance-none",
                                                                    style: {
                                                                        MozAppearance: "textfield"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1012,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute right-3 text-[#9CA3AF] text-xs font-bold pointer-events-none",
                                                                    children: t.humidityUnit
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1019,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1011,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `h-full rounded-full transition-all duration-300 ${catalyst.state === "danger" ? "bg-red-500" : catalyst.state === "nominal" ? "bg-green-600" : "bg-amber-500"}`,
                                                                style: {
                                                                    width: `${Math.min(100, Math.max(0, parseFloat(humidity) || 0))}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1023,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1022,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs mt-1.5 font-bold ${catalyst.state === "danger" ? "text-red-400" : catalyst.state === "nominal" ? "text-green-400" : "text-amber-400"}`,
                                                            children: catalyst.state === "danger" ? "⛔ " + t.varCondNote.split("—")[0].trim() : catalyst.state === "low" ? t.humidityLow : catalyst.state === "high" ? t.humidityHigh : t.humidityNominal
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1031,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1007,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#9CA3AF] text-xs uppercase tracking-widest mb-2",
                                                            children: t.catalystLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1043,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `rounded-sm border px-4 py-2.5 flex items-end gap-2 transition-colors ${catalyst.state === "danger" ? "border-red-600/60 bg-red-950/30" : catalyst.state === "nominal" ? "border-green-700/40 bg-green-950/20" : "border-amber-700/40 bg-amber-950/20"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-3xl font-black tabular-nums leading-none ${catalyst.state === "danger" ? "text-red-400" : catalyst.state === "nominal" ? "text-green-400" : "text-amber-400"}`,
                                                                    children: catalyst.weight
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1049,
                                                                    columnNumber: 21
                                                                }, this),
                                                                catalyst.weight !== "—" && catalyst.weight !== "⛔" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[#9CA3AF] text-sm font-bold mb-0.5",
                                                                    children: t.catalystUnit
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1054,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1044,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#9CA3AF]/60 text-xs mt-1.5",
                                                            children: t.catalystBase
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1057,
                                                            columnNumber: 19
                                                        }, this),
                                                        catalyst.factor !== "—" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#9CA3AF] text-xs font-mono mt-0.5",
                                                            children: [
                                                                "Factor: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `font-bold ${catalyst.state === "nominal" ? "text-green-400" : "text-amber-400"}`,
                                                                    children: catalyst.factor
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1060,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1059,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1042,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1005,
                                            columnNumber: 15
                                        }, this),
                                        catalyst.state === "danger" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex items-start gap-2 border border-red-600 bg-red-950/40 rounded-sm px-3 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 text-red-500 shrink-0 mt-0.5",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 2.5,
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1070,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1069,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-300 text-xs leading-relaxed font-bold",
                                                    children: t.varCondNote
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1072,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1068,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#9CA3AF]/40 text-xs mt-3 mb-4",
                                            children: t.catalystFormula
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1076,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 1001,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                            lineNumber: 989,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 988,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 1081,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mb-4",
                                children: t.stepsHeading
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 1085,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "space-y-4",
                                children: d.steps.map((step)=>{
                                    const outcome = stepOutcomes[step.number] ?? null;
                                    const isBranch = step.number === BRANCH_STEP;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: `border rounded-sm overflow-hidden transition-colors ${outcome === "pass" ? "border-green-700/60 bg-green-950/10" : outcome === "fail" ? "border-red-600/60 bg-red-950/15" : "border-white/10 bg-[#1a1a1a]"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-stretch",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex items-center justify-center w-16 shrink-0 border-r ${outcome === "pass" ? "bg-green-950/30 border-green-700/40" : outcome === "fail" ? "bg-red-950/30 border-red-700/40" : "bg-[#0f0f0f] border-white/10"}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-4xl font-black leading-none ${outcome === "pass" ? "text-green-500" : outcome === "fail" ? "text-red-500" : "text-red-500"}`,
                                                            children: step.number
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1103,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1098,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white text-sm font-bold uppercase tracking-wide mb-1",
                                                                children: step.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1109,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[#9CA3AF] text-sm leading-relaxed",
                                                                children: step.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1110,
                                                                columnNumber: 23
                                                            }, this),
                                                            step.warning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex items-start gap-2 border border-red-600/40 bg-red-600/5 rounded-sm px-3 py-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-4 h-4 text-red-500 shrink-0 mt-0.5",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        strokeWidth: 2.5,
                                                                        stroke: "currentColor",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                            lineNumber: 1114,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                        lineNumber: 1113,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-red-400 text-xs leading-relaxed",
                                                                        children: step.warning
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                        lineNumber: 1116,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1112,
                                                                columnNumber: 25
                                                            }, this),
                                                            isBranch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#9CA3AF] text-xs uppercase tracking-widest shrink-0",
                                                                        children: "Step Result:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                        lineNumber: 1122,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setOutcome(BRANCH_STEP, "pass"),
                                                                        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-black uppercase tracking-widest border transition-all ${outcome === "pass" ? "bg-green-700 border-green-500 text-white" : "border-green-700/50 text-green-500 hover:bg-green-950/40"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3.5 h-3.5 shrink-0",
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                strokeWidth: 3,
                                                                                stroke: "currentColor",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    d: "M4.5 12.75l6 6 9-13.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                                    lineNumber: 1128,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                                lineNumber: 1127,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            t.stepPass
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                        lineNumber: 1123,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setOutcome(BRANCH_STEP, "fail"),
                                                                        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-black uppercase tracking-widest border transition-all ${outcome === "fail" ? "bg-red-700 border-red-500 text-white" : "border-red-700/50 text-red-500 hover:bg-red-950/40"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3.5 h-3.5 shrink-0",
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                strokeWidth: 3,
                                                                                stroke: "currentColor",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    d: "M6 18 18 6M6 6l12 12"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                                    lineNumber: 1137,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                                lineNumber: 1136,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            t.stepFail
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                        lineNumber: 1132,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1121,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1108,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1097,
                                                columnNumber: 19
                                            }, this),
                                            isBranch && outcome === "fail" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t border-red-600/40 bg-red-950/25 px-4 py-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4 text-red-500 shrink-0",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                strokeWidth: 2,
                                                                stroke: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1151,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1150,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-red-400 text-xs font-black uppercase tracking-widest",
                                                                children: t.reworkHeading
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1153,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1149,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                        className: "space-y-2.5",
                                                        children: [
                                                            t.reworkStep1,
                                                            t.reworkStep2,
                                                            t.reworkStep3,
                                                            t.reworkStep4,
                                                            t.reworkStep5
                                                        ].map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-start gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-5 h-5 rounded-full bg-red-800/60 border border-red-600/50 text-red-300 text-xs font-black flex items-center justify-center shrink-0 mt-0.5",
                                                                        children: i + 1
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                        lineNumber: 1158,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: `text-xs leading-relaxed ${i === 4 ? "text-red-300 font-bold" : "text-red-200/80"}`,
                                                                        children: step
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                        lineNumber: 1159,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1157,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1155,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1148,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, step.number, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1091,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 1086,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 1084,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 1171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mb-4",
                                children: t.mappingHeading
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 1175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#080808] border border-white/10 rounded-sm overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 300 420",
                                            className: "w-full max-h-[500px]",
                                            "aria-label": "Fastener and harness mapping diagram",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                        id: "eng-grid",
                                                        width: "20",
                                                        height: "20",
                                                        patternUnits: "userSpaceOnUse",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M 20 0 L 0 0 0 20",
                                                            fill: "none",
                                                            stroke: "rgba(255,255,255,0.03)",
                                                            strokeWidth: "0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1181,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1180,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1179,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "300",
                                                    height: "420",
                                                    fill: "#070707"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1184,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "300",
                                                    height: "420",
                                                    fill: "url(#eng-grid)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1185,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "14",
                                                    y: "14",
                                                    width: "272",
                                                    height: "392",
                                                    rx: "5",
                                                    fill: "#0c0c0c",
                                                    stroke: "#7f1d1d",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1186,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "32",
                                                    y: "36",
                                                    width: "236",
                                                    height: "348",
                                                    rx: "3",
                                                    fill: "none",
                                                    stroke: "rgba(255,255,255,0.06)",
                                                    strokeWidth: "1",
                                                    strokeDasharray: "6,4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1187,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "62",
                                                    y1: "28",
                                                    x2: "238",
                                                    y2: "28",
                                                    stroke: "rgba(220,38,38,0.18)",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1188,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "62",
                                                    y1: "392",
                                                    x2: "238",
                                                    y2: "392",
                                                    stroke: "rgba(220,38,38,0.18)",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1189,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "28",
                                                    y1: "150",
                                                    x2: "28",
                                                    y2: "265",
                                                    stroke: "rgba(220,38,38,0.18)",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1190,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "272",
                                                    y1: "150",
                                                    x2: "272",
                                                    y2: "265",
                                                    stroke: "rgba(220,38,38,0.18)",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1191,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M 124,150 L 124,242",
                                                    stroke: "rgba(239,68,68,0.28)",
                                                    strokeWidth: "2",
                                                    strokeDasharray: "5,3",
                                                    fill: "none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1192,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M 124,196 L 170,196",
                                                    stroke: "rgba(239,68,68,0.28)",
                                                    strokeWidth: "2",
                                                    strokeDasharray: "5,3",
                                                    fill: "none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1193,
                                                    columnNumber: 17
                                                }, this),
                                                [
                                                    [
                                                        124,
                                                        170
                                                    ],
                                                    [
                                                        124,
                                                        220
                                                    ],
                                                    [
                                                        148,
                                                        196
                                                    ]
                                                ].map(([cx, cy], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: cx,
                                                                cy: cy,
                                                                r: 4,
                                                                fill: "none",
                                                                stroke: "rgba(239,68,68,0.45)",
                                                                strokeWidth: "1.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1196,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: cx - 3,
                                                                y1: cy,
                                                                x2: cx + 3,
                                                                y2: cy,
                                                                stroke: "rgba(239,68,68,0.45)",
                                                                strokeWidth: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1197,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: cx,
                                                                y1: cy - 3,
                                                                x2: cx,
                                                                y2: cy + 3,
                                                                stroke: "rgba(239,68,68,0.45)",
                                                                strokeWidth: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1198,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1195,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "86",
                                                    y: "122",
                                                    width: "76",
                                                    height: "28",
                                                    rx: "3",
                                                    fill: "#170505",
                                                    stroke: "#991b1b",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1201,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "124",
                                                    y: "132",
                                                    textAnchor: "middle",
                                                    dominantBaseline: "central",
                                                    fontSize: 9,
                                                    fontWeight: "bold",
                                                    fill: "#ef4444",
                                                    fontFamily: "monospace",
                                                    children: "H1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1202,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "124",
                                                    y: "144",
                                                    textAnchor: "middle",
                                                    dominantBaseline: "central",
                                                    fontSize: 7,
                                                    fill: "#9ca3af",
                                                    fontFamily: "monospace",
                                                    children: "WINDOW"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1203,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "170",
                                                    y: "182",
                                                    width: "72",
                                                    height: "28",
                                                    rx: "3",
                                                    fill: "#170505",
                                                    stroke: "#991b1b",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1204,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "206",
                                                    y: "192",
                                                    textAnchor: "middle",
                                                    dominantBaseline: "central",
                                                    fontSize: 9,
                                                    fontWeight: "bold",
                                                    fill: "#ef4444",
                                                    fontFamily: "monospace",
                                                    children: "H2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1205,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "206",
                                                    y: "204",
                                                    textAnchor: "middle",
                                                    dominantBaseline: "central",
                                                    fontSize: 7,
                                                    fill: "#9ca3af",
                                                    fontFamily: "monospace",
                                                    children: "MIRROR"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1206,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "86",
                                                    y: "242",
                                                    width: "76",
                                                    height: "28",
                                                    rx: "3",
                                                    fill: "#170505",
                                                    stroke: "#991b1b",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1207,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "124",
                                                    y: "252",
                                                    textAnchor: "middle",
                                                    dominantBaseline: "central",
                                                    fontSize: 9,
                                                    fontWeight: "bold",
                                                    fill: "#ef4444",
                                                    fontFamily: "monospace",
                                                    children: "H3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1208,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "124",
                                                    y: "264",
                                                    textAnchor: "middle",
                                                    dominantBaseline: "central",
                                                    fontSize: 7,
                                                    fill: "#9ca3af",
                                                    fontFamily: "monospace",
                                                    children: "LOCK"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1209,
                                                    columnNumber: 17
                                                }, this),
                                                [
                                                    [
                                                        62,
                                                        52,
                                                        "C1"
                                                    ],
                                                    [
                                                        238,
                                                        52,
                                                        "C2"
                                                    ],
                                                    [
                                                        272,
                                                        150,
                                                        "C4"
                                                    ],
                                                    [
                                                        272,
                                                        265,
                                                        "C6"
                                                    ],
                                                    [
                                                        238,
                                                        378,
                                                        "C8"
                                                    ]
                                                ].map(([cx, cy, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: cx,
                                                                cy: cy,
                                                                r: 14,
                                                                fill: "#180808",
                                                                stroke: "#dc2626",
                                                                strokeWidth: "1.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1212,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: cx,
                                                                y: cy,
                                                                textAnchor: "middle",
                                                                dominantBaseline: "central",
                                                                fontSize: 8,
                                                                fontWeight: "bold",
                                                                fill: "#ef4444",
                                                                fontFamily: "monospace",
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1213,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, label, true, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1211,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: 28,
                                                    cy: 265,
                                                    r: 14,
                                                    fill: "#180808",
                                                    stroke: "#dc2626",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1216,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: 28,
                                                    y: 265,
                                                    textAnchor: "middle",
                                                    dominantBaseline: "central",
                                                    fontSize: 8,
                                                    fontWeight: "bold",
                                                    fill: "#ef4444",
                                                    fontFamily: "monospace",
                                                    children: "C5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1217,
                                                    columnNumber: 17
                                                }, this),
                                                [
                                                    [
                                                        28,
                                                        150,
                                                        "C3"
                                                    ],
                                                    [
                                                        62,
                                                        378,
                                                        "C7"
                                                    ]
                                                ].map(([cx, cy, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: cx,
                                                                cy: cy,
                                                                r: 22,
                                                                fill: "none",
                                                                stroke: "rgba(239,68,68,0.22)",
                                                                strokeWidth: "1",
                                                                strokeDasharray: "3,3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1220,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: cx,
                                                                cy: cy,
                                                                r: 14,
                                                                fill: "#2a0505",
                                                                stroke: "#ef4444",
                                                                strokeWidth: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1221,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: cx,
                                                                y: cy,
                                                                textAnchor: "middle",
                                                                dominantBaseline: "central",
                                                                fontSize: 8,
                                                                fontWeight: "bold",
                                                                fill: "#fca5a5",
                                                                fontFamily: "monospace",
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1222,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, label, true, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1219,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "150",
                                                    y: "412",
                                                    textAnchor: "middle",
                                                    dominantBaseline: "central",
                                                    fontSize: 6,
                                                    fill: "rgba(156,163,175,0.35)",
                                                    letterSpacing: "1.5",
                                                    fontFamily: "monospace",
                                                    children: [
                                                        "BODY SIDE — INT. VIEW — ",
                                                        sop.id,
                                                        "-R4.1"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1225,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1178,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pt-3 pb-4 border-t border-white/10 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#9CA3AF] text-xs leading-relaxed",
                                                children: t.mappingCaption
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1229,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-x-5 gap-y-2",
                                                children: [
                                                    {
                                                        swatch: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-4 rounded-full border border-red-600 bg-[#180808] shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1232,
                                                            columnNumber: 29
                                                        }, this),
                                                        label: t.legendClip
                                                    },
                                                    {
                                                        swatch: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-5 h-3 rounded-sm border border-red-900 bg-[#170505] shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1233,
                                                            columnNumber: 29
                                                        }, this),
                                                        label: t.legendHarness
                                                    },
                                                    {
                                                        swatch: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "20",
                                                            height: "8",
                                                            viewBox: "0 0 20 8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "4",
                                                                x2: "20",
                                                                y2: "4",
                                                                stroke: "rgba(239,68,68,0.4)",
                                                                strokeWidth: "2",
                                                                strokeDasharray: "4,3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1234,
                                                                columnNumber: 75
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1234,
                                                            columnNumber: 29
                                                        }, this),
                                                        label: t.legendRoute
                                                    },
                                                    {
                                                        swatch: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-4 rounded-full border-2 border-red-400 bg-[#2a0505] shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1235,
                                                            columnNumber: 29
                                                        }, this),
                                                        label: t.legendAlert,
                                                        red: true
                                                    }
                                                ].map(({ swatch, label, red })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            swatch,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs ${red ? "text-red-400 font-bold" : "text-[#9CA3AF]"}`,
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1239,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, label, true, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1237,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1230,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1228,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 1176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 1174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 1247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mb-4",
                                children: t.checksHeading
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 1251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#1a1a1a] border border-white/10 rounded-sm divide-y divide-white/10",
                                children: d.qualityChecks.map((check, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3 px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-0.5 w-5 h-5 rounded-sm border-2 border-red-600/60 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1255,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white text-sm leading-snug",
                                                children: check
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1256,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1254,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 1252,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 1250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-sm overflow-hidden border-2 transition-colors ${complianceOutcome === "pass" ? "border-green-600/60" : complianceOutcome === "fail" ? "border-red-600" : "border-white/15"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `px-4 py-3 border-b flex items-center justify-between flex-wrap gap-2 ${complianceOutcome === "pass" ? "border-green-700/40 bg-green-950/20" : complianceOutcome === "fail" ? "border-red-700/50 bg-red-950/25" : "border-white/10 bg-[#0f0f0f]"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xs font-black text-white uppercase tracking-widest",
                                                    children: t.complianceHeading
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1267,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#9CA3AF] text-xs mt-0.5",
                                                    children: t.complianceSub
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1268,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1266,
                                            columnNumber: 15
                                        }, this),
                                        complianceOutcome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-xs font-black uppercase tracking-widest px-2 py-1 rounded-sm border ${complianceOutcome === "pass" ? "border-green-600/60 bg-green-900/30 text-green-400" : "border-red-600/60 bg-red-900/30 text-red-400"}`,
                                            children: complianceOutcome === "pass" ? "✓ PASSED" : "✗ REWORK INITIATED"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1271,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 1265,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-4 grid grid-cols-2 gap-3 bg-[#0a0a0a]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setComplianceOutcome(complianceOutcome === "pass" ? null : "pass"),
                                            className: `flex items-center justify-center gap-2 py-4 rounded-sm border-2 font-black text-sm uppercase tracking-widest transition-all active:scale-[0.98] ${complianceOutcome === "pass" ? "border-green-500 bg-green-700 text-white" : "border-green-700/50 text-green-500 hover:bg-green-950/30"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 shrink-0",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 3,
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M4.5 12.75l6 6 9-13.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1281,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1280,
                                                    columnNumber: 17
                                                }, this),
                                                t.compliancePassBtn
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1278,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setComplianceOutcome(complianceOutcome === "fail" ? null : "fail"),
                                            className: `flex items-center justify-center gap-2 py-4 rounded-sm border-2 font-black text-sm uppercase tracking-widest transition-all active:scale-[0.98] ${complianceOutcome === "fail" ? "border-red-500 bg-red-700 text-white" : "border-red-700/50 text-red-500 hover:bg-red-950/30"}`,
                                            style: complianceOutcome === "fail" ? {
                                                boxShadow: "0 0 16px 2px rgba(220,38,38,0.3)"
                                            } : {},
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 shrink-0",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 3,
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M6 18 18 6M6 6l12 12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1289,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1288,
                                                    columnNumber: 17
                                                }, this),
                                                t.complianceFailBtn
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1285,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 1277,
                                    columnNumber: 13
                                }, this),
                                complianceOutcome === "fail" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-red-700/40 bg-red-950/20 px-4 py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 text-red-500 shrink-0",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 2,
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1299,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1298,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-400 text-xs font-black uppercase tracking-widest",
                                                    children: t.complianceReworkHeading
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1301,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1297,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                            className: "space-y-3",
                                            children: [
                                                t.complianceRework1,
                                                t.complianceRework2,
                                                t.complianceRework3,
                                                t.complianceRework4,
                                                t.complianceRework5
                                            ].map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-5 h-5 rounded-full bg-red-800/60 border border-red-600/50 text-red-300 text-xs font-black flex items-center justify-center shrink-0 mt-0.5",
                                                            children: i + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1306,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs leading-relaxed ${i === 4 ? "text-red-300 font-bold" : "text-red-200/80"}`,
                                                            children: step
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1307,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1305,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1303,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 1296,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                            lineNumber: 1264,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 1263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 1316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mb-4",
                                children: t.escalationHeading
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 1320,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: d.escalation.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-red-900/50 bg-red-950/20 rounded-sm p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-red-400 text-xs font-bold uppercase tracking-wider mb-1",
                                                children: [
                                                    t.escalationIf,
                                                    " ",
                                                    item.trigger
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1324,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white text-sm leading-relaxed",
                                                children: item.action
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1325,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1323,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 1321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 1319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 1331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setTelemetryOpen((v)=>!v),
                                className: "w-full flex items-center justify-between py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 text-red-500 shrink-0",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: 2,
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1339,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1338,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-[#9CA3AF] uppercase tracking-widest",
                                                children: t.lifeSafetyHeading
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1341,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1 bg-red-900/40 border border-red-700/50 rounded-sm px-1.5 py-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1343,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-400 text-xs font-bold uppercase tracking-wider",
                                                        children: "Live"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1344,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1342,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1337,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500 text-xs font-bold uppercase tracking-widest shrink-0",
                                        children: [
                                            telemetryOpen ? t.telemetryHide : t.telemetryShow,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1",
                                                style: {
                                                    display: "inline-block",
                                                    transform: telemetryOpen ? "rotate(180deg)" : "rotate(0deg)",
                                                    transition: "transform 0.2s"
                                                },
                                                children: "↓"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1349,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1347,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 1335,
                                columnNumber: 11
                            }, this),
                            telemetryOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#9CA3AF] text-xs leading-relaxed",
                                        children: t.lifeSafetyDesc
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1355,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mb-3",
                                                children: t.presenceHeading
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1359,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#060606] border border-white/10 rounded-sm p-4 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-end gap-1 h-10 justify-center mb-2",
                                                        children: [
                                                            0.4,
                                                            0.6,
                                                            0.85,
                                                            1,
                                                            0.85,
                                                            0.65,
                                                            0.5,
                                                            0.7,
                                                            0.9,
                                                            0.95,
                                                            0.75,
                                                            0.55,
                                                            0.45,
                                                            0.65,
                                                            0.8,
                                                            0.92,
                                                            0.78,
                                                            0.6,
                                                            0.5,
                                                            0.4
                                                        ].map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "breath-bar bg-red-600/70 rounded-sm w-2 shrink-0",
                                                                style: {
                                                                    height: `${h * 100}%`,
                                                                    animationDelay: `${i * 0.2}s`
                                                                }
                                                            }, i, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1364,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1362,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-center text-[#9CA3AF]/60 text-xs tracking-wide",
                                                        children: "WiFi-RADAR passive breathing monitor · 2.4 GHz mesh · Zone A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1368,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1361,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 gap-2 sm:grid-cols-3",
                                                children: presenceSensors.map((s)=>{
                                                    const st = statusStyle[s.status];
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `border rounded-sm px-3 py-2.5 ${st.bg}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[#9CA3AF] text-xs uppercase tracking-widest mb-1",
                                                                children: s[lang]
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1375,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white text-sm font-bold",
                                                                children: s.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1376,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `w-1.5 h-1.5 rounded-full shrink-0 ${st.dot}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                        lineNumber: 1378,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-xs font-bold uppercase tracking-wide ${st.text}`,
                                                                        children: statusLabel(s.status, t)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                        lineNumber: 1379,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1377,
                                                                columnNumber: 25
                                                            }, this),
                                                            s.sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[#9CA3AF]/50 text-xs mt-0.5",
                                                                children: s.sub
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1381,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, s.id, true, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1374,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1370,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1358,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mb-3",
                                                children: t.ambientHeading
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1390,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
                                                children: ambientSensors.map((s)=>{
                                                    const st = statusStyle[s.status];
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `border rounded-sm px-3 py-2.5 ${st.bg}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[#9CA3AF] text-xs uppercase tracking-widest mb-1",
                                                                children: s[lang]
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1396,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white text-sm font-bold tabular-nums",
                                                                children: s.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1397,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `w-1.5 h-1.5 rounded-full shrink-0 ${st.dot}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                        lineNumber: 1399,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-xs font-bold uppercase tracking-wide ${st.text}`,
                                                                        children: statusLabel(s.status, t)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                        lineNumber: 1400,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1398,
                                                                columnNumber: 25
                                                            }, this),
                                                            s.threshold && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[#9CA3AF]/40 text-xs mt-0.5",
                                                                children: s.threshold
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1402,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, s.id, true, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1395,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1391,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1389,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mb-3",
                                                children: "Environmental Conditions"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1411,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
                                                children: auxSensors.map((s)=>{
                                                    const st = statusStyle[s.status];
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-[#0f0f0f] border border-white/10 rounded-sm px-3 py-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[#9CA3AF] text-xs uppercase tracking-widest mb-1",
                                                                children: s[lang]
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1417,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white text-sm font-bold tabular-nums",
                                                                children: s.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1418,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `w-1.5 h-1.5 rounded-full shrink-0 ${st.dot}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                        lineNumber: 1420,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-xs font-bold uppercase tracking-wide ${st.text}`,
                                                                        children: statusLabel(s.status, t)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                        lineNumber: 1421,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1419,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, s.id, true, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1416,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1412,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1410,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mb-3",
                                                children: t.telemetryCameras
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1431,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-sm overflow-hidden border border-white/10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 280 158",
                                                            className: "w-full",
                                                            "aria-label": "CAM-01 Station Entry feed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                                            id: "scan1",
                                                                            width: "280",
                                                                            height: "3",
                                                                            patternUnits: "userSpaceOnUse",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                y: "2",
                                                                                width: "280",
                                                                                height: "1",
                                                                                fill: "rgba(0,0,0,0.22)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                                lineNumber: 1437,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                            lineNumber: 1436,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                                                            id: "vig1",
                                                                            cx: "50%",
                                                                            cy: "50%",
                                                                            r: "70%",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "0%",
                                                                                    stopColor: "black",
                                                                                    stopOpacity: "0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                                    lineNumber: 1440,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "100%",
                                                                                    stopColor: "black",
                                                                                    stopOpacity: "0.65"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                                    lineNumber: 1441,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                            lineNumber: 1439,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1435,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    width: "280",
                                                                    height: "158",
                                                                    fill: "#040507"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1444,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "0",
                                                                    y: "102",
                                                                    width: "280",
                                                                    height: "56",
                                                                    fill: "#050505"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1445,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "0",
                                                                    y1: "102",
                                                                    x2: "280",
                                                                    y2: "102",
                                                                    stroke: "#0e0e0e",
                                                                    strokeWidth: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1446,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "40",
                                                                    y1: "102",
                                                                    x2: "40",
                                                                    y2: "158",
                                                                    stroke: "#111100",
                                                                    strokeWidth: "1.5",
                                                                    strokeDasharray: "8,6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1447,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "240",
                                                                    y1: "102",
                                                                    x2: "240",
                                                                    y2: "158",
                                                                    stroke: "#111100",
                                                                    strokeWidth: "1.5",
                                                                    strokeDasharray: "8,6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1448,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "82",
                                                                    y: "62",
                                                                    width: "116",
                                                                    height: "44",
                                                                    rx: "4",
                                                                    fill: "#090909",
                                                                    stroke: "#111",
                                                                    strokeWidth: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1449,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "96",
                                                                    y: "56",
                                                                    width: "88",
                                                                    height: "16",
                                                                    rx: "3",
                                                                    fill: "#0b0b0b",
                                                                    stroke: "#0f0f0f",
                                                                    strokeWidth: "0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1450,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "4",
                                                                    y: "48",
                                                                    width: "18",
                                                                    height: "66",
                                                                    fill: "#080808",
                                                                    stroke: "#0f0f0f",
                                                                    strokeWidth: "0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1451,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "258",
                                                                    y: "48",
                                                                    width: "18",
                                                                    height: "66",
                                                                    fill: "#080808",
                                                                    stroke: "#0f0f0f",
                                                                    strokeWidth: "0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1452,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "22",
                                                                    y1: "52",
                                                                    x2: "258",
                                                                    y2: "52",
                                                                    stroke: "#0d0d0d",
                                                                    strokeWidth: "3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1453,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "188",
                                                                    cy: "60",
                                                                    r: "5",
                                                                    fill: "#0e0e0e"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1454,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "184",
                                                                    y: "65",
                                                                    width: "8",
                                                                    height: "16",
                                                                    rx: "2",
                                                                    fill: "#0e0e0e"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1455,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "184",
                                                                    y1: "70",
                                                                    x2: "176",
                                                                    y2: "78",
                                                                    stroke: "#0e0e0e",
                                                                    strokeWidth: "2.5",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1456,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "192",
                                                                    y1: "69",
                                                                    x2: "200",
                                                                    y2: "76",
                                                                    stroke: "#0e0e0e",
                                                                    strokeWidth: "2.5",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1457,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    width: "280",
                                                                    height: "158",
                                                                    fill: "url(#scan1)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1458,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    width: "280",
                                                                    height: "158",
                                                                    fill: "url(#vig1)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1459,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M 8,8 L 8,22 M 8,8 L 22,8",
                                                                    stroke: "#dc2626",
                                                                    strokeWidth: "1.5",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1460,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M 272,8 L 272,22 M 272,8 L 258,8",
                                                                    stroke: "#dc2626",
                                                                    strokeWidth: "1.5",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1461,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M 8,150 L 8,136 M 8,150 L 22,150",
                                                                    stroke: "#dc2626",
                                                                    strokeWidth: "1.5",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1462,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M 272,150 L 272,136 M 272,150 L 258,150",
                                                                    stroke: "#dc2626",
                                                                    strokeWidth: "1.5",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1463,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "8",
                                                                    y: "8",
                                                                    width: "30",
                                                                    height: "13",
                                                                    rx: "2",
                                                                    fill: "#dc2626"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1464,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: "23",
                                                                    y: "14.5",
                                                                    textAnchor: "middle",
                                                                    dominantBaseline: "central",
                                                                    fontSize: 7,
                                                                    fontWeight: "bold",
                                                                    fill: "white",
                                                                    fontFamily: "monospace",
                                                                    children: "LIVE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1465,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: "272",
                                                                    y: "14",
                                                                    textAnchor: "end",
                                                                    dominantBaseline: "central",
                                                                    fontSize: 7,
                                                                    fill: "rgba(255,255,255,0.5)",
                                                                    fontFamily: "monospace",
                                                                    children: "CAM-01"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1466,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "140",
                                                                    cy: "79",
                                                                    r: "16",
                                                                    fill: "none",
                                                                    stroke: "rgba(255,255,255,0.06)",
                                                                    strokeWidth: "0.75"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1467,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "130",
                                                                    y1: "79",
                                                                    x2: "124",
                                                                    y2: "79",
                                                                    stroke: "rgba(255,255,255,0.08)",
                                                                    strokeWidth: "0.75"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1468,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "150",
                                                                    y1: "79",
                                                                    x2: "156",
                                                                    y2: "79",
                                                                    stroke: "rgba(255,255,255,0.08)",
                                                                    strokeWidth: "0.75"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1469,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "140",
                                                                    y1: "69",
                                                                    x2: "140",
                                                                    y2: "63",
                                                                    stroke: "rgba(255,255,255,0.08)",
                                                                    strokeWidth: "0.75"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1470,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "140",
                                                                    y1: "89",
                                                                    x2: "140",
                                                                    y2: "95",
                                                                    stroke: "rgba(255,255,255,0.08)",
                                                                    strokeWidth: "0.75"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1471,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: "8",
                                                                    y: "150",
                                                                    textAnchor: "start",
                                                                    dominantBaseline: "central",
                                                                    fontSize: 6,
                                                                    fill: "rgba(255,255,255,0.45)",
                                                                    fontFamily: "monospace",
                                                                    children: "14:32:07"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1472,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: "272",
                                                                    y: "150",
                                                                    textAnchor: "end",
                                                                    dominantBaseline: "central",
                                                                    fontSize: 6,
                                                                    fill: "rgba(255,255,255,0.4)",
                                                                    fontFamily: "monospace",
                                                                    children: "STATION ENTRY"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1473,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1434,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1433,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-sm overflow-hidden border border-white/10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 280 158",
                                                            className: "w-full",
                                                            "aria-label": "CAM-02 Assembly Zone feed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                                            id: "scan2",
                                                                            width: "280",
                                                                            height: "3",
                                                                            patternUnits: "userSpaceOnUse",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                y: "2",
                                                                                width: "280",
                                                                                height: "1",
                                                                                fill: "rgba(0,0,0,0.22)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                                lineNumber: 1480,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                            lineNumber: 1479,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                                                            id: "vig2",
                                                                            cx: "50%",
                                                                            cy: "50%",
                                                                            r: "70%",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "0%",
                                                                                    stopColor: "black",
                                                                                    stopOpacity: "0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                                    lineNumber: 1483,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "100%",
                                                                                    stopColor: "black",
                                                                                    stopOpacity: "0.65"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                                    lineNumber: 1484,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                            lineNumber: 1482,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1478,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    width: "280",
                                                                    height: "158",
                                                                    fill: "#040406"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1487,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "68",
                                                                    y: "18",
                                                                    width: "144",
                                                                    height: "118",
                                                                    rx: "5",
                                                                    fill: "#0a0a0a",
                                                                    stroke: "#121212",
                                                                    strokeWidth: "1.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1488,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "80",
                                                                    y: "28",
                                                                    width: "120",
                                                                    height: "46",
                                                                    rx: "3",
                                                                    fill: "#070707",
                                                                    stroke: "#0d0d0d",
                                                                    strokeWidth: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1489,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "80",
                                                                    y1: "82",
                                                                    x2: "200",
                                                                    y2: "82",
                                                                    stroke: "#0f0f0f",
                                                                    strokeWidth: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1490,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "80",
                                                                    y1: "96",
                                                                    x2: "200",
                                                                    y2: "96",
                                                                    stroke: "#0e0e0e",
                                                                    strokeWidth: "0.75"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1491,
                                                                    columnNumber: 23
                                                                }, this),
                                                                [
                                                                    [
                                                                        82,
                                                                        24
                                                                    ],
                                                                    [
                                                                        200,
                                                                        24
                                                                    ],
                                                                    [
                                                                        82,
                                                                        110
                                                                    ],
                                                                    [
                                                                        200,
                                                                        110
                                                                    ]
                                                                ].map(([x, y], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: x,
                                                                        cy: y,
                                                                        r: 3,
                                                                        fill: "none",
                                                                        stroke: "#1a1a1a",
                                                                        strokeWidth: "1"
                                                                    }, i, false, {
                                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                        lineNumber: 1493,
                                                                        columnNumber: 25
                                                                    }, this)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M 0,95 Q 40,88 68,88",
                                                                    stroke: "#0d0d0d",
                                                                    strokeWidth: "8",
                                                                    strokeLinecap: "round",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1495,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "63",
                                                                    y: "84",
                                                                    width: "14",
                                                                    height: "7",
                                                                    rx: "2",
                                                                    fill: "#111",
                                                                    stroke: "#181818",
                                                                    strokeWidth: "0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1496,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    width: "280",
                                                                    height: "158",
                                                                    fill: "url(#scan2)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1497,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    width: "280",
                                                                    height: "158",
                                                                    fill: "url(#vig2)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1498,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M 8,8 L 8,22 M 8,8 L 22,8",
                                                                    stroke: "#dc2626",
                                                                    strokeWidth: "1.5",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1499,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M 272,8 L 272,22 M 272,8 L 258,8",
                                                                    stroke: "#dc2626",
                                                                    strokeWidth: "1.5",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1500,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M 8,150 L 8,136 M 8,150 L 22,150",
                                                                    stroke: "#dc2626",
                                                                    strokeWidth: "1.5",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1501,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M 272,150 L 272,136 M 272,150 L 258,150",
                                                                    stroke: "#dc2626",
                                                                    strokeWidth: "1.5",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1502,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "8",
                                                                    y: "8",
                                                                    width: "32",
                                                                    height: "13",
                                                                    rx: "2",
                                                                    fill: "#0a0a0a",
                                                                    stroke: "#dc2626",
                                                                    strokeWidth: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1503,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "15",
                                                                    cy: "14.5",
                                                                    r: "3",
                                                                    fill: "#dc2626"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1504,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: "25",
                                                                    y: "14.5",
                                                                    textAnchor: "middle",
                                                                    dominantBaseline: "central",
                                                                    fontSize: 7,
                                                                    fontWeight: "bold",
                                                                    fill: "#dc2626",
                                                                    fontFamily: "monospace",
                                                                    children: "REC"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1505,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: "272",
                                                                    y: "14",
                                                                    textAnchor: "end",
                                                                    dominantBaseline: "central",
                                                                    fontSize: 7,
                                                                    fill: "rgba(255,255,255,0.5)",
                                                                    fontFamily: "monospace",
                                                                    children: "CAM-02"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1506,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: "8",
                                                                    y: "150",
                                                                    textAnchor: "start",
                                                                    dominantBaseline: "central",
                                                                    fontSize: 6,
                                                                    fill: "rgba(255,255,255,0.45)",
                                                                    fontFamily: "monospace",
                                                                    children: "14:32:09"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1507,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: "272",
                                                                    y: "150",
                                                                    textAnchor: "end",
                                                                    dominantBaseline: "central",
                                                                    fontSize: 6,
                                                                    fill: "rgba(255,255,255,0.4)",
                                                                    fontFamily: "monospace",
                                                                    children: "ASSEMBLY ZONE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                    lineNumber: 1508,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                            lineNumber: 1477,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1476,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1432,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#9CA3AF]/50 text-xs mt-2 text-center tracking-wide",
                                                children: "NVR · Station 14 · Retention: 30 days · Motion detection active"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1512,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1430,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 1354,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 1334,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 1518,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setLogOpen((v)=>!v),
                                className: "w-full flex items-center justify-between py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 text-red-500 shrink-0",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: 2,
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1526,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1525,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-[#9CA3AF] uppercase tracking-widest",
                                                children: t.passdownHeading
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1528,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-amber-500 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1529,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1524,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500 text-xs font-bold uppercase tracking-widest",
                                        children: [
                                            logOpen ? t.passdownHide : t.passdownShow,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1",
                                                style: {
                                                    display: "inline-block",
                                                    transform: logOpen ? "rotate(180deg)" : "rotate(0deg)",
                                                    transition: "transform 0.2s"
                                                },
                                                children: "↓"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1533,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1531,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 1522,
                                columnNumber: 11
                            }, this),
                            logOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 pt-1",
                                children: passdownLog.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `rounded-sm p-4 border ${entry.severity === "warning" ? "border-amber-600/40 bg-amber-950/20" : "border-white/10 bg-[#1a1a1a]"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2 flex-wrap gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            entry.severity === "warning" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2 h-2 rounded-full bg-amber-500 shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1542,
                                                                columnNumber: 56
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white text-xs font-bold",
                                                                children: entry.author
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1543,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#9CA3AF] text-xs",
                                                                children: entry.shift
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                                lineNumber: 1544,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1541,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#9CA3AF] text-xs tabular-nums",
                                                        children: [
                                                            entry.date,
                                                            " · ",
                                                            entry.time
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1546,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1540,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#9CA3AF] text-sm leading-relaxed",
                                                children: entry.note
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1548,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, entry.id, true, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1539,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 1537,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 1521,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10 pt-6 text-center pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#9CA3AF] text-xs",
                                children: [
                                    sop.id,
                                    " — ",
                                    sop.revision,
                                    " — ",
                                    t.footerBy
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 1557,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#9CA3AF]/50 text-xs mt-1",
                                children: t.footerHelp
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                lineNumber: 1558,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                        lineNumber: 1556,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                lineNumber: 634,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 z-20 bg-[#080808] border-t border-red-600/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto px-4 py-3 space-y-2.5",
                    children: [
                        submitted ? /* Confirmed state */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 border border-green-700/60 bg-green-950/30 rounded-sm px-4 py-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-full border-2 border-green-500 bg-green-900/40 flex items-center justify-center shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-green-400",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 3,
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M4.5 12.75l6 6 9-13.5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1571,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1570,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 1569,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-green-400 text-xs font-black uppercase tracking-widest",
                                            children: t.eSignConfirmed
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1575,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-green-400/60 text-xs mt-0.5",
                                            children: t.eSignConfirmedDesc
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1576,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 1574,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-green-600/50 text-xs font-mono shrink-0 tabular-nums",
                                    children: new Date().toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 1578,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                            lineNumber: 1568,
                            columnNumber: 13
                        }, this) : /* E-Signature entry */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#0a0a0a] border border-white/10 rounded-sm px-4 py-3 space-y-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-3.5 h-3.5 text-red-500 shrink-0",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 2.5,
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                        lineNumber: 1588,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1587,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-xs font-black uppercase tracking-widest",
                                                    children: t.eSignHeading
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1590,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1586,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#9CA3AF]/40 text-xs",
                                            children: t.eSignHint
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1592,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 1585,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#9CA3AF] text-xs uppercase tracking-widest shrink-0 w-20",
                                            children: t.eSignEmpLabel
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1596,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            maxLength: 12,
                                            value: employeeId,
                                            onChange: (e)=>{
                                                setEmployeeId(e.target.value);
                                                setPinError(false);
                                            },
                                            placeholder: t.eSignEmpPlaceholder,
                                            className: "flex-1 bg-[#111] border border-white/15 rounded-sm text-white text-sm font-mono px-3 py-2 focus:outline-none focus:border-red-500 transition-colors placeholder:text-white/20 uppercase",
                                            onKeyDown: (e)=>{
                                                if (e.key === "Enter") pinRef.current?.focus();
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1597,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 1595,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#9CA3AF] text-xs uppercase tracking-widest shrink-0 w-20",
                                            children: t.eSignLabel
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1608,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 shrink-0",
                                            children: [
                                                0,
                                                1,
                                                2,
                                                3
                                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-2.5 h-2.5 rounded-full border transition-colors ${i < pin.length ? "bg-red-500 border-red-400" : "bg-transparent border-white/20"}`
                                                }, i, false, {
                                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                    lineNumber: 1611,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1609,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: pinRef,
                                            type: "password",
                                            inputMode: "numeric",
                                            maxLength: 4,
                                            value: pin,
                                            onChange: (e)=>handlePinChange(e.target.value),
                                            placeholder: t.eSignPlaceholder,
                                            className: "flex-1 bg-[#111] border border-white/15 rounded-sm text-white text-sm font-bold px-3 py-2 focus:outline-none focus:border-red-500 transition-colors placeholder:text-white/20 tracking-widest",
                                            onKeyDown: (e)=>{
                                                if (e.key === "Enter" && pin.length === 4 && employeeId.trim()) handleAuthorize();
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1614,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleAuthorize,
                                            disabled: pin.length !== 4 || !employeeId.trim(),
                                            className: `shrink-0 px-3 py-2 rounded-sm text-xs font-black uppercase tracking-widest border transition-colors ${pin.length === 4 && employeeId.trim() ? "border-red-600 bg-red-600 text-white hover:bg-red-700" : "border-white/10 bg-white/5 text-white/25 cursor-not-allowed"}`,
                                            children: t.eSignAuthorize
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1622,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 1607,
                                    columnNumber: 15
                                }, this),
                                pinError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3.5 h-3.5 text-red-500 shrink-0",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: 2.5,
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M6 18 18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                                lineNumber: 1633,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1632,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-400 text-xs font-bold",
                                            children: t.eSignError
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                            lineNumber: 1635,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 1631,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                            lineNumber: 1584,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "w-full flex items-center justify-center gap-2 py-3.5 rounded-sm font-black uppercase tracking-widest text-sm text-white border border-red-600 bg-red-600 hover:bg-red-700 active:scale-[0.98] transition-all",
                            style: {
                                boxShadow: "0 0 20px 2px rgba(220,38,38,0.35)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 shrink-0",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 2.5,
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                        lineNumber: 1646,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                                    lineNumber: 1645,
                                    columnNumber: 13
                                }, this),
                                t.escalateBtn
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                            lineNumber: 1642,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                    lineNumber: 1564,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
                lineNumber: 1563,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/sop/[id]/page.tsx",
        lineNumber: 488,
        columnNumber: 5
    }, this);
}
_s(SopDetailPage, "6DOCcVB1J3vXg1wP14tQRHQhGHw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = SopDetailPage;
var _c;
__turbopack_context__.k.register(_c, "SopDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_dashboard_sop_%5Bid%5D_page_tsx_0siv-5f._.js.map