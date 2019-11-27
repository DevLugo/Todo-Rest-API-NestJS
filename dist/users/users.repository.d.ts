import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class UsersRepository extends Repository<User> {
    getUserById: (id: number) => Promise<User>;
    createUser: (userDto: CreateUserDto) => Promise<CreateUserDto & User>;
}
