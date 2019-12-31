import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersRepository extends Repository<User> {
    getUserById: (id: number) => Promise<User>;
}
