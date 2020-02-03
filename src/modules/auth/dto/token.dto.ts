import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ToekenDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  token: string;
}
