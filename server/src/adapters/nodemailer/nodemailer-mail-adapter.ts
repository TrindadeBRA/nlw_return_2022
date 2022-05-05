import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "40e1f9c2b0f0b2",
      pass: "cbdcb9328ed147"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'TrinityWeb <noreply@thetrinityweb.com.br>',
            to: 'Lucas Trindade <trindadebra@gmail.com>',
            subject,
            html: body,
        });
    }
}