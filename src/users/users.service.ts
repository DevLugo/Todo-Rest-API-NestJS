import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository,
    ){}
/*
    async getUsers(user:User): Promise<User[]> {
        //return await this.usersRepository.find();
    }*/

    async getUser(_id:number): Promise<User>{
        return await this.usersRepository.getUserById(_id);
    }
    
    async createUser(userDto:CreateUserDto): Promise<User>{
        return await this.usersRepository.createUser(userDto);
    }
    

    /*

    async updateUser(user: User){
        this.usersRepository.save(user);
    }
    
    async deleteUser(user: User){
        this.usersRepository.delete(user);
    }*/
}
