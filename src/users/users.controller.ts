import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import {CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {
    }
    @Get()
    findAll(): string {
        return 'Get All Items';
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<User> {
        return this.userService.getUser(id);
    }

    @Post()
    create(@Body() user: CreateUserDto): Promise<User> {
        return this.userService.createUser(user);
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete ${id}`;
    }

    @Put(':id')
    update(@Body() updateUserDto: CreateUserDto, @Param('id') id): string{
        return `Update ${id} - Name:${updateUserDto.fullName}`;
    }
}
