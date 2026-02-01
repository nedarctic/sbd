import { createTransporter } from "./transporter";

const transporter = createTransporter({
  user: process.env.SMTP_SUBS_USER!,
  pass: process.env.SMTP_SUBS_PASS!,
});

export async function createSubscription(email: string) {
  // 1️⃣ Notify your team
  await transporter.sendMail({
    from: `"ScholarBrood Subscriptions" <${process.env.SMTP_SUBS_USER}>`,
    to: process.env.SMTP_SUBS_USER,
    subject: "New Newsletter Subscription",
    html: `
      <div style="font-family: Arial, sans-serif">
        <h2>New Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
      </div>
    `,
  });

  // 2️⃣ Optional: confirmation email to user
  await transporter.sendMail({
    from: `"ScholarBrood" <${process.env.SMTP_SUBS_USER}>`,
    to: email,
    subject: "You're subscribed 🎉",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6">
        <h2>Welcome to ScholarBrood!</h2>
        <p>
          Thanks for subscribing to our newsletter.
          You'll receive academic tips, updates, and exclusive offers.
        </p>
        <p>— The ScholarBrood Team</p>
      </div>
    `,
  });
}
