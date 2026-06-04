export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactForm = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  address?: string;
  category?: string;
  quantity?: string;
  message?: string;
};

const escapeHtml = (value?: string) =>
  String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export async function POST(req: Request) {
  try {
    const body: ContactForm = await req.json();

    const {
      name,
      email,
      phone,
      company,
      address,
      category,
      quantity,
      message,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.EMAIL_TO;
    const emailFrom = process.env.EMAIL_FROM || "onboarding@resend.dev";

    if (!resendApiKey || !emailTo) {
      return NextResponse.json(
        { success: false, message: "Email environment variables are missing." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const fields = [
      ["Name", name],
      ["Email", email],
      ["Phone", phone],
      ["Company", company],
      ["Address", address],
      ["Category", category],
      ["Quantity", quantity],
    ];

    const html = `
      <div style="font-family:Arial,sans-serif;background:#f2f2f2;padding:24px;">
        <div style="max-width:560px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e8e8e8;">
          <div style="background:#111111;padding:32px;text-align:center;">
            <h1 style="margin:0;color:#F5C800;font-size:28px;">iMarrt</h1>
            <p style="margin:6px 0 0;color:#ffffff80;font-size:11px;letter-spacing:2px;text-transform:uppercase;">
              New Enquiry Received
            </p>
          </div>

          <div style="padding:32px;">
            <h2 style="font-size:16px;margin:0 0 20px;color:#111;border-bottom:2px solid #F5C800;padding-bottom:10px;">
              Contact Details
            </h2>

            ${fields
              .map(
                ([key, val]) => `
                <div style="display:flex;border-bottom:1px solid #eee;">
                  <div style="width:120px;background:#f5f5f5;padding:12px;font-size:12px;font-weight:bold;color:#777;">
                    ${escapeHtml(key)}
                  </div>
                  <div style="flex:1;background:#fafafa;padding:12px;font-size:14px;color:#111;">
                    ${val ? escapeHtml(val) : "—"}
                  </div>
                </div>
              `
              )
              .join("")}

            <div style="margin-top:18px;">
              <strong>Message</strong>
              <div style="margin-top:8px;background:#fafafa;padding:14px;line-height:1.7;">
                ${message ? escapeHtml(message).replaceAll("\n", "<br />") : "—"}
              </div>
            </div>
          </div>

          <div style="background:#f9f9f9;padding:16px;text-align:center;font-size:12px;color:#999;">
            Sent via imarrt.com
          </div>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: `iMarrt Enquiry <${emailFrom}>`,
      to: emailTo,
      replyTo: email,
      subject: `New Enquiry — ${name} (${company || "Individual"})`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}