import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
    constructor(private userService: UserService) {}

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.userService.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.userService.getById(req.params.id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Implement other CRUD operations...
}