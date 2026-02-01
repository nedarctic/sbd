import { createTransporter } from "./transporter";

type OrderPayload = {
  name: string;
  email: string;
  service: string;
  details: string;
  files: File[];
  paypalOrderId?: string;
};

const transporter = createTransporter({
  user: process.env.SMTP_ORDER_USER!,
  pass: process.env.SMTP_ORDER_PASS!,
});

export async function sendOrderEmail(data: OrderPayload) {
  // Convert files to attachments
  const attachments = await Promise.all(
    data.files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
    }))
  );

  // Send the email
  await transporter.sendMail({
    from: `"ScholarBrood Orders" <${process.env.SMTP_ORDER_USER}>`,
    to: process.env.SMTP_ORDER_USER,
    replyTo: data.email,
    subject: `New Order Request — ${data.service}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Order Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        ${data.paypalOrderId ? `<p><strong>PayPal Order ID:</strong> ${data.paypalOrderId}</p>` : ""}
        <hr />
        <p>${data.details.replace(/\n/g, "<br />")}</p>
      </div>
    `,
    attachments,
  });
}
