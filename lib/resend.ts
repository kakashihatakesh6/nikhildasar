import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_EMAIL;

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendContactEmail({
  name,
  email,
  message,
  ipAddress,
}: {
  name: string;
  email: string;
  message: string;
  ipAddress?: string;
}) {
  if (!resend) {
    throw new Error("Resend API key is missing. Please configure RESEND_API_KEY environment variable.");
  }
  if (!contactEmail) {
    throw new Error("Contact email is missing. Please configure CONTACT_EMAIL environment variable.");
  }

  // Format the date/time in IST for readability in emails
  const dateTime = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'medium',
  }) + ' (IST)';

  return await resend.emails.send({
  from: "Nikhil Dasar Portfolio <onboarding@resend.dev>",
  to: contactEmail,
  replyTo: email,
  subject: "📩 New Contact Form Submission | Nikhil Dasar Portfolio",
  text: `
You have received a new contact form submission from your personal portfolio.

Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from: Nikhil Dasar Portfolio
Time: ${dateTime}
`,
});
}
