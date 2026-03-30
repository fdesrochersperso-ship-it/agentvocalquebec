import { NextResponse } from "next/server";

const RETELL_CREATE_WEB_CALL_URL = "https://api.retellai.com/v2/create-web-call";

interface RetellCreateWebCallResponse {
  access_token: string;
  call_id: string;
  agent_id: string;
}

function getRequiredEnv(name: "RETELL_API_KEY" | "RETELL_AGENT_ID"): string | null {
  const value = process.env[name]?.trim();
  return value || null;
}

function getOptionalAgentVersion(): number | null {
  const raw = process.env.RETELL_AGENT_VERSION?.trim();
  if (!raw) return null;
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

export async function POST(request: Request) {
  const apiKey = getRequiredEnv("RETELL_API_KEY");
  const agentId = getRequiredEnv("RETELL_AGENT_ID");

  if (!apiKey || !agentId) {
    return NextResponse.json(
      {
        ok: false,
        error: "retell_non_configure",
        missing: {
          RETELL_API_KEY: !apiKey,
          RETELL_AGENT_ID: !agentId,
        },
      },
      { status: 503 }
    );
  }

  let body: unknown = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }

  const payload =
    body && typeof body === "object" && !Array.isArray(body)
      ? (body as Record<string, unknown>)
      : {};

  const businessName =
    typeof payload.businessName === "string" && payload.businessName.trim()
      ? payload.businessName.trim()
      : "Entreprise de démonstration";
  const industry =
    typeof payload.industry === "string" && payload.industry.trim()
      ? payload.industry.trim()
      : "Services";
  const city =
    typeof payload.city === "string" && payload.city.trim()
      ? payload.city.trim()
      : "Montréal";
  const offerFocus =
    typeof payload.offerFocus === "string" && payload.offerFocus.trim()
      ? payload.offerFocus.trim()
      : "prise de rendez-vous";

  const upstreamBody: Record<string, unknown> = {
    agent_id: agentId,
    metadata: {
      source: "agentvocalquebec-demo",
      requested_at: new Date().toISOString(),
    },
    retell_llm_dynamic_variables: {
      business_name: businessName,
      industry,
      city,
      offer_focus: offerFocus,
      locale: "fr-CA",
    },
  };

  const agentVersion = getOptionalAgentVersion();
  if (agentVersion) {
    upstreamBody.agent_version = agentVersion;
  }

  const res = await fetch(RETELL_CREATE_WEB_CALL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(upstreamBody),
  });

  if (!res.ok) {
    const upstreamText = await res.text().catch(() => "");
    console.error("retell-web-call upstream error", res.status, upstreamText);
    return NextResponse.json(
      {
        ok: false,
        error: "retell_creation_echouee",
        upstreamStatus: res.status,
      },
      { status: 502 }
    );
  }

  const data = (await res.json()) as RetellCreateWebCallResponse;

  return NextResponse.json({
    ok: true,
    accessToken: data.access_token,
    callId: data.call_id,
    agentId: data.agent_id,
  });
}
