import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(){}
/*
    async getUsers(user:User): Promise<User[]> {
        //return await this.usersRepository.find();
    }

    async getUser(_id:number): Promise<User[]>{
        return await this.usersRepository.find({
            select: ["fullName","email","isActive"],
            where: [{"id":_id}]
        });
    }

    async updateUser(user: User){
        this.usersRepository.save(user);
    }
    
    async deleteUser(user: User){
        this.usersRepository.delete(user);
    }*/
}
