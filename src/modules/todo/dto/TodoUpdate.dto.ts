import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean } from 'class-validator';

export class TodoUpdateDto {
  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsBoolean()
  done: boolean;
}
