import cron from 'node-cron';
import MailHelper from '../shared/helpers/mail.helper';

const emailCron = () => {
    console.log("Email cron ");
    // Schedule the task to run every day at midnight
    cron.schedule('0 0 * * *', async () => {
        console.log('Running daily email cron job');
        try {
            // Example email sending logic
            await MailHelper.sendMail({
                from: 'no-reply@example.com',
                to: 'user@example.com',
                subject: 'Daily Report',
                text: 'This is your daily report.',
            });
            console.log('Daily report email sent successfully');
        } catch (error) {
            console.error('Error sending daily report email:', error);
        }
    });
};

export default emailCron;
