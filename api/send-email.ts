// /api/send-email.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as nodemailer from 'nodemailer';
import * as path from 'path';
import * as hbs from 'nodemailer-express-handlebars';
import fetch from 'node-fetch';




const handlebarOptions = {
  viewEngine: {
    extName: '.handlebars',
    partialsDir: path.resolve('./templates/'),
    defaultLayout: false,
  },
  viewPath: path.resolve('./templates/'),
  extName: '.handlebars',
};

export default async function sendEmail(req: VercelRequest, res: VercelResponse) {
  const { nameSurname, email, phone, message, token } = req.body;

  const human = await validateHuman(token);
  if (!human) {
    res.status(400).json({ errors: ["It's a bot! ❤️ ❌ 🤖"] });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env['CONTACT_FORM_HOST'],
    port: 465,
    secure: true,
    auth: {
        user: process.env['CONTACT_FORM_SEND_EMAIL'],
        pass: process.env['CONTACT_FORM_PASS'],
    },
    tls: { rejectUnauthorized: false },
});

  transporter.use('compile', hbs(handlebarOptions));
  const contactFormReceiveEmail = process.env['CONTACT_FORM_RECEIVE_EMAIL'];
  try {
    await transporter.sendMail({
      from: `${nameSurname} <${email}>`,
      replyTo: email,
      to: contactFormReceiveEmail,
      subject: `Contact form from ${nameSurname}`,
      template: 'contact',
      context: { nameSurname, email, phone, message },
    });

    // Send confirmation email to the sender
    await transporter.sendMail({
      from: `Your Company Name <${process.env['CONTACT_FORM_SEND_EMAIL']}>`,
      to: email,
      subject: "Thank you for your message",
      template: 'confirmation', // Assuming you have a separate template for confirmations
      context: { nameSurname, email },
    });

    res.status(200).json({ message: 'success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
}

async function validateHuman(token: string) {
  const secret = process.env['RECAPTCHA_SECRET_KEY'];
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {
    method: 'POST',
  });
  const data = await response.json();
  return data.success;
}
