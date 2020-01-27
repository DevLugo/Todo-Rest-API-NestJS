import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SignUpDto, SignInDto } from './dto';
import { AuthService } from './auth.service';
import { ApiResponse } from '@nestjs/swagger';
import { ToekenDto } from './dto/token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly _authservice: AuthService) {}

  @Post('/signup')
  @UsePipes(ValidationPipe)
  async signup(@Body() signUpDto: SignUpDto): Promise<void> {
    return this._authservice.signup(signUpDto);
  }

  @ApiResponse({ status: 200, type: ToekenDto })
  @Post('/signin')
  @UsePipes(ValidationPipe)
  async signin(@Body() signInDto: SignInDto) {
    return this._authservice.signin(signInDto);
  }
}
