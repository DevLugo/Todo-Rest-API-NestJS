import {IsNotEmpty, IsNumber, IsPositive, IsString, IsEmail, IsBoolean} from 'class-validator';

export class CreateUserDto{
    @IsNotEmpty({message: 'Required field'})
    @IsString({message: 'Field need be a string'})
    name:string
    
    @IsEmail()
    email:string;

    @IsBoolean({message: 'Field need be a Boolean'})
    isActive:boolean;
}