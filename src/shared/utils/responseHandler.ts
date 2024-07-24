import { Response } from 'express';
import { ApiResponse } from '../types/apiTypes';
import {logger} from "../../config/logger";

export class ResponseHandler {
    static success<T>(res: Response, data: T, message: string = 'Operation successful', statusCode: number = 200): void {
        const response: ApiResponse<T> = {
            success: true,
            message,
            data
        };
        logger.info(`Success response: ${message}, ${JSON.stringify({data, statusCode})}`);
        res.status(statusCode).json(response);
    }

    static error(res: Response, message: string = 'An error occurred', statusCode: number = 500, error?: any): void {
        const response: ApiResponse<null> = {
            success: false,
            message,
            error
        };
        logger.error(`Error response: ${message}, ${JSON.stringify({error, statusCode})}`);
        res.status(statusCode).json(response);
    }
}