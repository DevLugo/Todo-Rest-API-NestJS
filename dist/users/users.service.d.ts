import { User } from './user.entity';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getUser(_id: number): Promise<User>;
    createUser(userDto: CreateUserDto): Promise<User>;
}
