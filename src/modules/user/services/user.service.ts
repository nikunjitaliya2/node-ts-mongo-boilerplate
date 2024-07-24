import { IService } from '../../../core/interfaces/service.interface';
import { IUser } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';

export class UserService implements IService<IUser> {
    constructor(private userRepository: UserRepository) {}

    async create(data: Partial<IUser>): Promise<IUser> {
        return this.userRepository.create(data);
    }

    async getById(id: string): Promise<IUser | null> {
        return this.userRepository.findById(id);
    }

    async getOne(filter: Partial<IUser>): Promise<IUser | null> {
        return this.userRepository.findOne(filter);
    }

    async getMany(filter: Partial<IUser>): Promise<IUser[]> {
        return this.userRepository.find(filter);
    }

    async update(id: string, data: Partial<IUser>): Promise<IUser | null> {
        return this.userRepository.update(id, data);
    }

    async delete(id: string): Promise<boolean> {
        return this.userRepository.delete(id);
    }
}