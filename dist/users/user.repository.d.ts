import { Repository } from "typeorm";
import { User } from "./user.entity";
export declare class UserRepository extends Repository<User> {
    getUserById(id: string): Promise<User>;
}
