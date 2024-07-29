import emailCron from './email.cron';
import cleanupCron from './cleanup.cron';

const initCrons = () => {
    emailCron();
    cleanupCron();
};

export default initCrons;
