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
}
