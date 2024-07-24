import dotenv from 'dotenv';
import app from './app';
import { connectDatabase } from './config/database';
import { logger } from './config/logger';

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDatabase();
        app.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        logger.error('Failed to start server:', error);
        process.exit(1);
    }
};

// Explicitly handle the promise returned by startServer
startServer().catch((error) => {
    logger.error('Unhandled error in startServer:', error);
    process.exit(1);
});
