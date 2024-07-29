import nodemailer from 'nodemailer';
import {mailConfig} from '../../config/mail';

interface MailOptions {
    from: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
}

class MailHelper {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport(mailConfig);
    }

    async sendMail(mailOptions: MailOptions) {
        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log('Message sent: %s', info.messageId);
            return info;
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }
}

export default new MailHelper();
