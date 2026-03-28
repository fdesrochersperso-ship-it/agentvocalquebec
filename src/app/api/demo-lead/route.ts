import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";

function getNotifyTo(): string {
  return process.env.DEMO_LEAD_TO ?? "francis@hellodarwin.com";
}

function getFromAddress(): string | undefined {
  return process.env.DEMO_EMAIL_FROM;
}

function formatPayloadForEmail(payload: Record<string, unknown>): string {
  return JSON.stringify(payload, null, 2);
}

export async function POST(request: Request) {
  const secret = process.env.RESEND_API_KEY;
  const from = getFromAddress();

  if (!secret || !from) {
    console.error(
      "demo-lead: missing RESEND_API_KEY or DEMO_EMAIL_FROM — configure in env"
    );
    return NextResponse.json(
      { ok: false, error: "configuration_serveur" },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "json_invalide" }, {
      status: 400,
    });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "corps_invalide" }, {
      status: 400,
    });
  }

  const b = body as Record<string, unknown>;

  if (typeof b._honeypot === "string" && b._honeypot.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const company = typeof b.company === "string" ? b.company.trim() : "";
  const phone = typeof b.phone === "string" ? b.phone.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const companyType =
    typeof b.companyType === "string" ? b.companyType.trim() : "";
  const message =
    typeof b.message === "string" ? b.message.trim() : undefined;

  if (!name || !company || !phone || !email || !companyType) {
    return NextResponse.json({ ok: false, error: "champs_requis" }, {
      status: 400,
    });
  }

  const context =
    b.context && typeof b.context === "object" && !Array.isArray(b.context)
      ? (b.context as Record<string, unknown>)
      : {};

  const serverMeta = {
    receivedAt: new Date().toISOString(),
    ip:
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      null,
    userAgent: request.headers.get("user-agent") ?? null,
  };

  const payload = {
    form: {
      name,
      company,
      phone,
      email,
      companyType,
      message: message || null,
    },
    clientSession: context,
    server: serverMeta,
  };

  const to = getNotifyTo();
  const subject = `Demande de démo — ${company} (${name})`;
  const text = formatPayloadForEmail(payload);

  const res = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    console.error("Resend error:", res.status, errText);
    return NextResponse.json({ ok: false, error: "envoi_echec" }, {
      status: 502,
    });
  }

  return NextResponse.json({ ok: true });
}
