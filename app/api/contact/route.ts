export const runtime = "nodejs";

import { Resend } from "resend";
import { NextResponse } from "next/server";

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

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // ✅ All three env vars checked
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.EMAIL_TO ||
      !process.env.EMAIL_FROM
    ) {
      return NextResponse.json(
        { success: false, message: "Email environment variables are missing." },
        { status: 500 }
      );
    }

    const fields: [string, string | undefined][] = [
      ["Name", name],
      ["Email", email],
      ["Phone", phone],
      ["Company", company],
      ["Address", address],
      ["Category", category],
      ["Quantity", quantity],
    ];

    const adminHtml = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:24px 0;background:#F2F2F2;font-family:Arial,sans-serif;">
  <table width="100%">
    <tr>
      <td align="center">
        <table width="560" style="max-width:560px;width:100%;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e8e8e8;">
          <tr>
            <td style="background:#111;padding:32px 40px;text-align:center;">
              <div style="font-size:26px;font-weight:700;color:#F5C800;">iMarrt</div>
              <div style="font-size:10px;color:rgba(255,255,255,.45);letter-spacing:.18em;text-transform:uppercase;margin-top:6px;">
                New Enquiry Received
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 40px;">
              <div style="font-size:11px;font-weight:700;color:#111;letter-spacing:.12em;text-transform:uppercase;padding-bottom:10px;border-bottom:2px solid #F5C800;display:inline-block;margin-bottom:20px;">
                Contact Details
              </div>
              ${fields
                .map(
                  ([key, val]) => `
                <table width="100%" style="margin-bottom:2px;border-radius:6px;overflow:hidden;">
                  <tr>
                    <td width="110" style="background:#F5F5F5;padding:12px 16px;font-size:10px;font-weight:700;color:#999;letter-spacing:.1em;text-transform:uppercase;">
                      ${escapeHtml(key)}
                    </td>
                    <td style="background:#FAFAFA;padding:12px 16px;font-size:13px;color:#111;border-left:2px solid #fff;">
                      ${val ? escapeHtml(val) : "—"}
                    </td>
                  </tr>
                </table>`
                )
                .join("")}
              <table width="100%" style="margin-top:16px;border-radius:6px;overflow:hidden;">
                <tr>
                  <td width="110" style="background:#F5F5F5;padding:14px 16px;font-size:10px;font-weight:700;color:#999;letter-spacing:.1em;text-transform:uppercase;vertical-align:top;">
                    Message
                  </td>
                  <td style="background:#FAFAFA;padding:14px 16px;font-size:13px;color:#111;line-height:1.7;border-left:2px solid #fff;vertical-align:top;">
                    ${message ? escapeHtml(message).replaceAll("\n", "<br />") : "—"}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#F9F9F9;padding:18px 40px;text-align:center;border-top:1px solid #eee;">
              <p style="margin:0;font-size:11px;color:#bbb;">
                Sent via <a href="https://www.imarrt.com" style="color:#D4A800;text-decoration:none;font-weight:700;">imarrt.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const confirmationHtml = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:24px 0;background:#F2F2F2;font-family:Arial,sans-serif;">
  <table width="100%">
    <tr>
      <td align="center">
        <table width="560" style="max-width:560px;width:100%;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e8e8e8;">
          <tr>
            <td style="background:#111;padding:32px 40px;text-align:center;">
              <div style="font-size:26px;font-weight:700;color:#F5C800;">iMarrt</div>
              <div style="font-size:10px;color:rgba(255,255,255,.45);letter-spacing:.18em;text-transform:uppercase;margin-top:6px;">
                Enquiry Confirmation
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 40px;">
              <p style="font-size:15px;color:#111;font-weight:600;margin:0 0 12px;">
                Hi ${escapeHtml(name)},
              </p>
              <p style="font-size:13px;color:#555;line-height:1.8;margin:0 0 20px;">
                Thank you for reaching out to <strong>iMarrt</strong>. We've received your enquiry and our team will get back to you within <strong>24 hours</strong> with pricing and details.
              </p>
              <table width="100%" style="border-radius:8px;overflow:hidden;background:#FFFBEA;border:1px solid #F5C800;">
                <tr>
                  <td style="padding:16px 20px;">
                    <div style="font-size:10px;font-weight:700;color:#999;letter-spacing:.1em;text-transform:uppercase;margin-bottom:6px;">Your Enquiry Summary</div>
                    <div style="font-size:13px;color:#111;"><strong>Category:</strong> ${escapeHtml(category)}</div>
                    ${quantity ? `<div style="font-size:13px;color:#111;margin-top:4px;"><strong>Quantity:</strong> ${escapeHtml(quantity)} pcs</div>` : ""}
                    ${company ? `<div style="font-size:13px;color:#111;margin-top:4px;"><strong>Company:</strong> ${escapeHtml(company)}</div>` : ""}
                  </td>
                </tr>
              </table>
              <p style="font-size:13px;color:#555;line-height:1.8;margin:20px 0 0;">
                If you have any urgent questions, feel free to call us at <strong>+91 86754 50005</strong>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#F9F9F9;padding:18px 40px;text-align:center;border-top:1px solid #eee;">
              <p style="margin:0;font-size:11px;color:#bbb;">
                © iMarrt · <a href="https://www.imarrt.com" style="color:#D4A800;text-decoration:none;font-weight:700;">imarrt.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // ✅ from: uses EMAIL_FROM (your verified domain), not the customer's email
    const { error: adminError } = await resend.emails.send({
      from: `iMarrt Enquiry <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Enquiry — ${name} (${company || "Individual"})`,
      html: adminHtml,
    });

    if (adminError) {
      console.error("Resend admin email error:", adminError);
      return NextResponse.json(
        { success: false, message: "Failed to send email." },
        { status: 500 }
      );
    }

    // ✅ from: uses EMAIL_FROM (your verified domain), not the customer's email
    try {
      await resend.emails.send({
        from: `iMarrt <${process.env.EMAIL_FROM}>`,
        to: email,
        subject: "We received your enquiry — iMarrt",
        html: confirmationHtml,
      });
    } catch (confirmError) {
      console.warn("Confirmation email failed (non-critical):", confirmError);
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