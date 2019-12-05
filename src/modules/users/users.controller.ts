import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import bodyParser = require('body-parser');
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly _userService: UsersService) {}

  @UseGuards(AuthGuard())
  @Get()
  async getUsers(@Request() req): Promise<UserDto[]> {
    console.log(req.user);
    return await this._userService.getUsers();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<User> {
    return this._userService.getUser(id);
  }

  /*@Post()
  create(@Body() user: CreateUserDto): Promise<User> {
    return this._userService.createUser(user);
  }*/

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  /* @Put(':id')
  update(@Body() updateUserDto: CreateUserDto, @Param('id') id): string {
    return `Update ${id} - Name:${updateUserDto.fullName}`;
  }*/
}
