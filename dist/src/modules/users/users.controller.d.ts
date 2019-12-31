import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
export declare class UsersController {
    private readonly _userService;
    constructor(_userService: UsersService);
    getUsers(req: any): Promise<UserDto[]>;
    findOne(id: any): Promise<User>;
    delete(id: any): string;
}
