import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getPostHogClient } from "@/lib/posthog-server";

const CONTACT_TO = "info@corioli.it";

function envTrim(value: string | undefined): string | undefined {
  if (value === undefined) return undefined;
  return value.replace(/^\uFEFF/, "").trim();
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Richiesta non valida" },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Dati mancanti" }, { status: 400 });
  }

  const { nome, email, specializzazione, messaggio } = body as Record<
    string,
    unknown
  >;

  if (typeof nome !== "string" || !nome.trim()) {
    return NextResponse.json({ error: "Nome obbligatorio" }, { status: 400 });
  }
  if (typeof email !== "string" || !email.trim()) {
    return NextResponse.json({ error: "Email obbligatoria" }, { status: 400 });
  }
  if (typeof specializzazione !== "string" || !specializzazione.trim()) {
    return NextResponse.json(
      { error: "Specializzazione obbligatoria" },
      { status: 400 },
    );
  }

  const note = typeof messaggio === "string" ? messaggio.trim() : "";

  const skipEmail =
    process.env.CONTACT_SKIP_EMAIL === "true" ||
    process.env.CONTACT_SKIP_EMAIL === "1";

  if (skipEmail) {
    console.info(
      "[contatto] invio email disattivato (CONTACT_SKIP_EMAIL); richiesta non inviata a mail:",
      {
        nome: nome.trim(),
        email: email.trim(),
        specializzazione,
        haNote: Boolean(note),
      },
    );
    const posthog = getPostHogClient();
    posthog.capture({
      distinctId: email.trim(),
      event: "contact_form_submitted",
      properties: { specializzazione, has_note: Boolean(note), skip_email: true },
    });
    posthog.identify({ distinctId: email.trim(), properties: { name: nome.trim(), specializzazione } });
    return NextResponse.json({ ok: true });
  }

  const SMTP_HOST = envTrim(process.env.SMTP_HOST);
  const SMTP_PORT = envTrim(process.env.SMTP_PORT);
  const SMTP_SECURE = envTrim(process.env.SMTP_SECURE);
  const SMTP_USER = envTrim(process.env.SMTP_USER);
  const SMTP_PASS = envTrim(process.env.SMTP_PASS);
  const SMTP_FROM = envTrim(process.env.SMTP_FROM);
  const smtpAuthMethod = envTrim(process.env.SMTP_AUTH_METHOD)?.toUpperCase();

  if (process.env.CONTACT_SMTP_DEBUG === "1") {
    console.info("[contatto] SMTP (terminale server, mai il browser):", {
      host: SMTP_HOST,
      port: SMTP_PORT ?? "587",
      secure: SMTP_SECURE,
      user: SMTP_USER,
      SMTP_AUTH_METHOD: smtpAuthMethod ?? "(auto, come da server)",
      passLength: SMTP_PASS?.length ?? 0,
    });
  }

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error(
      "Contatto: variabili SMTP mancanti (SMTP_HOST, SMTP_USER, SMTP_PASS)",
    );
    return NextResponse.json(
      { error: "Invio email non configurato sul server" },
      { status: 503 },
    );
  }

  const port = Number(SMTP_PORT ?? 587);
  const useSecure = SMTP_SECURE === "true" || port === 465;

  const auth: { user: string; pass: string; method?: string } = {
    user: SMTP_USER,
    pass: SMTP_PASS,
  };
  if (smtpAuthMethod === "LOGIN" || smtpAuthMethod === "PLAIN") {
    auth.method = smtpAuthMethod;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: useSecure,
    auth,
  });

  const from = SMTP_FROM ?? `"Sito Corioli" <${SMTP_USER}>`;
  const subject = `[Corioli] Richiesta demo — ${nome.trim()}`;
  const text = [
    `Nuova richiesta dal modulo contatti.`,
    ``,
    `Nome: ${nome.trim()}`,
    `Email: ${email.trim()}`,
    `Specializzazione: ${specializzazione}`,
    ``,
    note ? `Note:\n${note}` : "(Nessuna nota aggiuntiva)",
  ].join("\n");

  const html = `
    <p>Nuova richiesta dal modulo <strong>Contatti</strong> (sito Corioli).</p>
    <ul>
      <li><strong>Nome:</strong> ${escapeHtml(nome.trim())}</li>
      <li><strong>Email:</strong> ${escapeHtml(email.trim())}</li>
      <li><strong>Specializzazione:</strong> ${escapeHtml(specializzazione)}</li>
    </ul>
    <p><strong>Note:</strong></p>
    <p>${note ? escapeHtml(note).replace(/\n/g, "<br/>") : "(Nessuna nota aggiuntiva)"}</p>
  `;

  try {
    await transporter.sendMail({
      from,
      to: CONTACT_TO,
      replyTo: email.trim(),
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error("Contatto: invio SMTP fallito", err);
    return NextResponse.json(
      { error: "Impossibile inviare la richiesta. Riprova più tardi." },
      { status: 502 },
    );
  }

  const posthog = getPostHogClient();
  posthog.capture({
    distinctId: email.trim(),
    event: "contact_form_submitted",
    properties: { specializzazione, has_note: Boolean(note) },
  });
  posthog.identify({ distinctId: email.trim(), properties: { name: nome.trim(), specializzazione } });

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
