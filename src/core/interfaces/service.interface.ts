export interface IService<T> {
    create(data: Partial<T>): Promise<T>;
    getById(id: string): Promise<T | null>;
    getOne(filter: Partial<T>): Promise<T | null>;
    getMany(filter: Partial<T>): Promise<T[]>;
    update(id: string, data: Partial<T>): Promise<T | null>;
    delete(id: string): Promise<boolean>;
}