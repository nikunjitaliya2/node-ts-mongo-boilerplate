import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { UserRepository } from '../repositories/user.repository';

const router = Router();
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.post('/', userController.createUser.bind(userController));
router.get('/:id', userController.getUser.bind(userController));
// Add other routes...

export default router;