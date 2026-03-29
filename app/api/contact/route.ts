export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  type ContactForm = {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    category?: string;
    quantity?: string;
    message?: string;
  };

  const body: ContactForm = await req.json();

  const { name, email, phone, company, category, quantity, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"I-Marrt Enquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Enquiry — ${name} (${company || "Individual"})`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
</head>
<body style="margin:0;padding:24px 0;background:#F2F2F2;font-family:Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0"
        style="max-width:560px;width:100%;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e8e8e8;">

        <!-- Header -->
        <tr>
          <td style="background:#111111;padding:32px 40px;text-align:center;">
            <div style="font-size:26px;font-weight:700;color:#F5C800;letter-spacing:.04em;">iMarrt</div>
            <div style="font-size:10px;color:rgba(255,255,255,.35);letter-spacing:.18em;text-transform:uppercase;margin-top:6px;">
              New Enquiry Received
            </div>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <div style="font-size:11px;font-weight:700;color:#111;letter-spacing:.12em;text-transform:uppercase;
              padding-bottom:10px;border-bottom:2px solid #F5C800;display:inline-block;margin-bottom:20px;">
              Contact Details
            </div>

            <!-- Row macro -->
            ${[
              ["Name", name],
              ["Email", email],
              ["Phone", phone],
              ["Company", company],
              ["Category", category],
              ["Quantity", quantity],
            ]
              .map(
                ([key, val]) => `
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:2px;border-radius:6px;overflow:hidden;">
              <tr>
                <td width="110" style="background:#F5F5F5;padding:12px 16px;font-size:10px;font-weight:700;
                  color:#999;letter-spacing:.1em;text-transform:uppercase;vertical-align:middle;">
                  ${key}
                </td>
                <td style="background:#FAFAFA;padding:12px 16px;font-size:13px;color:#111;
                  border-left:2px solid #fff;vertical-align:middle;">
                  ${val || "—"}
                </td>
              </tr>
            </table>`,
              )
              .join("")}

            <!-- Message -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;border-radius:6px;overflow:hidden;">
              <tr>
                <td width="110" style="background:#F5F5F5;padding:14px 16px;font-size:10px;font-weight:700;
                  color:#999;letter-spacing:.1em;text-transform:uppercase;vertical-align:top;">
                  Message
                </td>
                <td style="background:#FAFAFA;padding:14px 16px;font-size:13px;color:#111;
                  line-height:1.7;border-left:2px solid #fff;vertical-align:top;">
                  ${message || "—"}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#F9F9F9;padding:18px 40px;text-align:center;border-top:1px solid #eee;">
            <p style="margin:0;font-size:11px;color:#bbb;">
              Sent via <a href="https://www.imarrt.com" style="color:#D4A800;text-decoration:none;font-weight:700;">imarrt.com</a>
              &nbsp;·&nbsp; Reply directly to this email to respond to the enquiry.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>
`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
