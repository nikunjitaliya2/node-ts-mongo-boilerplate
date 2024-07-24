import { BaseRepository } from '../../../core/abstracts/base.repository';
import { IUser, UserModel } from '../models/user.model';

export class UserRepository extends BaseRepository<IUser> {
    constructor() {
        super(UserModel);
    }
}