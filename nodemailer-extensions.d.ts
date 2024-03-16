// nodemailer-extensions.d.ts
import 'nodemailer';

declare module 'nodemailer' {
  interface SendMailOptions {
    template?: string;
    context?: any;
  }
}
