import mongoose from 'mongoose';
import { logger } from './logger';

export const connectDatabase = async (): Promise<void> => {
    try {
        const connectionString = process.env.MONGODB_URI;
        if (!connectionString) {
            throw new Error('MONGODB_URI is not defined in the environment variables');
        }

        await mongoose.connect(connectionString);
        logger.info('Successfully connected to the database');
    } catch (error) {
        logger.error('Error connecting to the database:', error);
        process.exit(1);
    }
};

export const closeDatabase = async (): Promise<void> => {
    await mongoose.connection.close();
    logger.info('Database connection closed');
};