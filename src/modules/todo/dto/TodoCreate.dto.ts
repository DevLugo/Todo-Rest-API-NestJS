import { IsNotEmpty, IsString } from 'class-validator';

export class TodoCreateDto {
  @IsNotEmpty({ message: 'Required field' })
  @IsString({ message: 'Field need be a string' })
  description: string;
}
