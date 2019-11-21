import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import {CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
    @Get()
    findAll(): string {
        return 'Get All Items';
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Item ${id}`;
    }

    @Post()
    create(@Body() user: CreateUserDto): string {
        return `Name: ${user.name} Email: ${user.email};`
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete ${id}`;
    }

    @Put(':id')
    update(@Body() updateUserDto: CreateUserDto, @Param('id') id): string{
        return `Update ${id} - Name:${updateUserDto.name}`;
    }
}
