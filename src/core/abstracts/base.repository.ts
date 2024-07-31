import { Model, Document } from 'mongoose';
import { IRepository } from '../interfaces/repository.interface';

export abstract class BaseRepository<T extends Document> implements IRepository<T> {
     protected constructor(protected readonly model: Model<T>) {}

    async create(data: Partial<T>): Promise<T> {
        const created = new this.model(data);
        return created.save();
    }

    async findById(id: string): Promise<T | null> {
        return this.model.findById(id).exec();
    }

    async findOne(filter: Partial<T>): Promise<T | null> {
        return this.model.findOne(filter as any).exec();
    }

    async find(filter: Partial<T>): Promise<T[]> {
        return this.model.find(filter as any).exec();
    }

    async update(id: string, data: Partial<T>): Promise<T | null> {
        return this.model.findByIdAndUpdate(id, data as any, { new: true }).exec();
    }

    async delete(id: string): Promise<boolean> {
        const result = await this.model.findByIdAndDelete(id).exec();
        return !!result;
    }
}