import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple helper
function json(status: number, data: any) {
  return NextResponse.json(data, { status });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { nom, email, telephone = "", message, objet = "Contact" , token = "" } = body || {};

    if (!nom || !email || !message) {
      return json(400, { error: "Champs requis manquants (nom, email, message)." });
    }

    // reCAPTCHA v3 verification
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      // If not configured, refuse to proceed in production environments
      return json(500, { error: "reCAPTCHA non configuré côté serveur." });
    }

    if (!token) {
      return json(400, { error: "Token reCAPTCHA manquant." });
    }

    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: recaptchaSecret, response: token }).toString(),
    });

    const verifyData = (await verifyRes.json()) as {
      success?: boolean;
      score?: number;
      action?: string;
      [k: string]: any;
    };

    if (!verifyData?.success || (typeof verifyData.score === "number" && verifyData.score < 0.3)) {
      return json(400, { error: "Échec de vérification reCAPTCHA." });
    }

    // Prepare email transport
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      return json(500, { error: "SMTP non configuré." });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: { user, pass },
    });

    const to = process.env.CONTACT_TO || user;
    const from = process.env.CONTACT_FROM || `"Site Web" <${user}>`;

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:14px;color:#111">
        <h2 style="margin:0 0 12px 0;color:#1A2B6D;">Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${escapeHtml(nom)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Téléphone:</strong> ${escapeHtml(telephone)}</p>
        <p><strong>Objet:</strong> ${escapeHtml(objet)}</p>
        <p><strong>Message:</strong><br/>${nl2br(escapeHtml(message))}</p>
      </div>
    `;

    await transporter.sendMail({
      from,
      to,
      subject: `[Contact] ${objet} — ${nom}`,
      replyTo: email,
      html,
    });

    return json(200, { ok: true });
  } catch (err: any) {
    console.error("/api/contact error", err);
    return json(500, { error: "Erreur serveur lors de l'envoi du message." });
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function nl2br(str: string) {
  return String(str).replace(/\n/g, "<br/>");
}