import nodemailer from "nodemailer";

const port = parseInt(process.env.SMTP_PORT || "465", 10);
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "mail.orangelabz.com",
  port: port,
  secure: port === 465, // true for port 465 (SSL/TLS), false for other ports (STARTTLS)
  auth: {
    user: process.env.SMTP_USER || "mail@orangelabz.com",
    pass: process.env.SMTP_PASS || "f7]}OeGUGwlZ",
  },
  tls: {
    // Prevent failure on self-signed certificates or domain mismatch if any
    rejectUnauthorized: false
  }
});

export async function POST(req) {
  try {
    const data = await req.json().catch(() => ({}));
    const { name, email, company, phone, industry, need, brief } = data;

    if (!email || !name) {
      return Response.json({ error: "Name and email are required fields." }, { status: 400 });
    }

    // 1. Notification to hello@orangelabz.com
    const adminMailOptions = {
      from: `"Orange Labz Leads" <${process.env.SMTP_USER || "mail@orangelabz.com"}>`,
      to: "hello@orangelabz.com",
      cc: "rajesh@orangelabz.com",
      subject: `New Lead Alert: ${name} (${company || "No Company"})`,
      text: `You have received a new contact form submission on Orange Labz:

Name: ${name}
Email: ${email}
Company / Role: ${company || "Not provided"}
Phone: ${phone}
Industry: ${industry}
Need: ${need}
Bottleneck/Brief: ${brief || "Not provided"}
`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #FF5A00;">New Lead Notification</h2>
          <p>A new form has been submitted on the Orange Labz website.</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px; border-bottom: 1px solid #f0f0f0;">Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Company / Role:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Phone:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Industry:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${industry}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Need:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${need}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Bottleneck:</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${brief || "Not provided"}</td>
            </tr>
          </table>
        </div>
      `,
    };

    // 2. Confirmation reply to user's email
    const userMailOptions = {
      from: `"Orange Labz" <${process.env.SMTP_USER || "mail@orangelabz.com"}>`,
      to: email,
      replyTo: "hello@orangelabz.com",
      subject: `We've received your request — Orange Labz`,
      text: `Hi ${name},

Thank you for requesting a free AI Audit with Orange Labz. We have received your request and our team is already reviewing your details.

Here is a copy of what you submitted:
- Name: ${name}
- Company: ${company || "Not provided"}
- Need: ${need}
- Bottleneck: ${brief || "Not provided"}

We reply to all inquiries within 4 hours. If you'd like to jump the queue or continue the conversation right now, feel free to message us on WhatsApp:
https://wa.me/917483576808?text=Hi%20Orange%20Labz%2C%20I%20want%20a%20free%20AI%20audit

Best regards,
The Orange Labz Team
Bengaluru, India
`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #FF5A00; margin-bottom: 20px;">AI Audit Request Received</h2>
          <p>Hi ${name},</p>
          <p>Thank you for requesting a free AI Audit with Orange Labz. We've received your details and our team is already reviewing them.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #333;">Your Submission:</h4>
            <p style="margin: 5px 0;"><strong>Company:</strong> ${company || "Not provided"}</p>
            <p style="margin: 5px 0;"><strong>Need:</strong> ${need}</p>
            <p style="margin: 5px 0;"><strong>Bottleneck:</strong> ${brief || "Not provided"}</p>
          </div>

          <p>We reply to all inquiries within <strong>4 hours</strong>. If you want to jump the queue or talk to us immediately, click the button below to message us directly on WhatsApp:</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://wa.me/917483576808?text=Hi%20Orange%20Labz%2C%20I%20want%20a%20free%20AI%20audit" 
               style="background-color: #FF5A00; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
               Continue on WhatsApp
            </a>
          </div>

          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #777;">
            Orange Labz — AI Implementation Firm<br />
            Bengaluru, India<br />
            <a href="https://orangelabz.com" style="color: #FF5A00; text-decoration: none;">orangelabz.com</a>
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    console.log(`Leads sent successfully for: ${name} (${email})`);
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Failed to process lead form submission:", error);
    return Response.json({ error: "Internal Server Error: " + error.message }, { status: 500 });
  }
}
