import { IsNotEmpty } from 'class-validator';

export class TodoDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  done: boolean;

  @IsNotEmpty()
  createAt: Date;

  @IsNotEmpty()
  updateAt: Date;
}
