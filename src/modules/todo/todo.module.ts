import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoRepository } from './todo.repository';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([TodoRepository]), AuthModule],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
