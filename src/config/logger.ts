import winston from 'winston';
import {createWriteStream, existsSync, mkdirSync} from 'fs';
import path from 'path';

// Ensure the log directory exists
const logDir = 'logs';
if (!existsSync(logDir)) {
    mkdirSync(logDir);
}

// Function to get the current date as a formatted string
const getCurrentDate = (): string => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

// Function to create a write stream with a date-based filename
const createLogStream = (type: string) => {
    const date = getCurrentDate();
    const filename = path.join(logDir, `${date}.${type}.log`);
    return createWriteStream(filename, {flags: 'a'});
};

const logFormat = winston.format.printf(({level, message, timestamp}) => {
    return `${timestamp} ${level}: ${message}`;
});

let errorLogStream = createLogStream('error');
let combinedLogStream = createLogStream('combined');

export const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        logFormat
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.Stream({
            stream: errorLogStream,
            level: 'error'
        }),
        new winston.transports.Stream({
            stream: combinedLogStream
        })
    ]
});

// Function to rotate log files daily
const rotateLogFilesDaily = () => {
    setInterval(() => {
        const newErrorLogStream = createLogStream('error');
        const newCombinedLogStream = createLogStream('combined');

        logger.transports.forEach((transport: any) => {
            if (transport.stream === errorLogStream) {
                transport.stream.end();
                transport.stream = newErrorLogStream;
            } else if (transport.stream === combinedLogStream) {
                transport.stream.end();
                transport.stream = newCombinedLogStream;
            }
        });

        errorLogStream = newErrorLogStream;
        combinedLogStream = newCombinedLogStream;
    }, 24 * 60 * 60 * 1000); // Rotate daily
};

rotateLogFilesDaily();
