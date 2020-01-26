import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TodoCreateDto {
  @IsNotEmpty({ message: 'Required field' })
  @IsString({ message: 'Field need be a string' })
  @ApiProperty()
  description: string;
}
