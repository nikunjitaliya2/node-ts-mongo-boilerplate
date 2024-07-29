import cron from 'node-cron';

const cleanupCron = () => {
    console.log("cleanup cron");
    // Schedule the task to run every Sunday at 3 AM
    cron.schedule('0 3 * * 0', () => {
        console.log('Running weekly cleanup cron job');
        // Add your cleanup logic here
    });
};

export default cleanupCron;
