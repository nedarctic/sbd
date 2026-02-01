import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST!;
const port = Number(process.env.SMTP_PORT!);

export function createTransporter({
  user,
  pass,
}: {
  user: string;
  pass: string;
}) {
  return nodemailer.createTransport({
    host,
    port,
    secure: true, // 465 = SSL
    auth: {
      user,
      pass,
    },
  });
}
