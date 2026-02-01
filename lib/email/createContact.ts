import { createTransporter } from "./transporter";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const transporter = createTransporter({
  user: process.env.SMTP_SUPPORT_USER!,
  pass: process.env.SMTP_SUPPORT_PASS!,
});

export async function createContact(data: ContactPayload) {
  const { name, email, subject, message } = data;

  await transporter.sendMail({
    from: `"ScholarBrood Support" <${process.env.SMTP_SUPPORT_USER}>`,
    to: process.env.SMTP_SUPPORT_USER, // support inbox
    replyTo: email,
    subject: `[Contact] ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6">
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `,
  });
}
