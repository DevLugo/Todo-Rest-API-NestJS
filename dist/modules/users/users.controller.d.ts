import { UsersService } from './users.service';
import { User } from './user.entity';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    findAll(): string;
    findOne(id: any): Promise<User>;
    delete(id: any): string;
}
