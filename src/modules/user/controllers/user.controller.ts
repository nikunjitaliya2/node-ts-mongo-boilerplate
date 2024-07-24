import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { ResponseHandler } from '../../../shared/utils/responseHandler';

export class UserController {
    constructor(private userService: UserService) {}

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.userService.create(req.body);
            ResponseHandler.success(res, user, 'User created successfully', 201);
        } catch (error) {
            ResponseHandler.error(res, 'Error creating user', 400, error.message);
        }
    }

    async getUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.userService.getById(req.params.id);
            if (user) {
                ResponseHandler.success(res, user, 'User retrieved successfully');
            } else {
                ResponseHandler.error(res, 'User not found', 404);
            }
        } catch (error) {
            ResponseHandler.error(res, 'Error retrieving user', 500, error.message);
        }
    }

    async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.userService.getMany({});
            if (users && users.length > 0) {
                ResponseHandler.success(res, users, 'Users retrieved successfully');
            } else {
                ResponseHandler.success(res, [], 'No users found', 200);
            }
        } catch (error) {
            ResponseHandler.error(res, 'Error retrieving users', 500, error.message);
        }
    }

    // Implement other CRUD operations...
}