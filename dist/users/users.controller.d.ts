import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    findAll(): string;
    findOne(id: any): string;
    create(user: CreateUserDto): string;
    delete(id: any): string;
    update(updateUserDto: CreateUserDto, id: any): string;
}
