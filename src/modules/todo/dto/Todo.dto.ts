import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
  @IsNotEmpty()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @ApiProperty()
  done: boolean;

  @IsNotEmpty()
  @ApiProperty()
  createAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  updateAt: Date;
}
