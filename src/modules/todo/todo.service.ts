import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoRepository } from './todo.repository';
import { TodoDto } from './dto/Todo.dto';
import { TodoCreateDto } from './dto/TodoCreate.dto';
import { TodoUpdateDto } from './dto/TodoUpdate.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoRepository)
    private readonly _todoRepository: TodoRepository,
  ) {}

  async createTodo(todo: TodoCreateDto): Promise<TodoDto> {
    return this._todoRepository.createTodo(todo);
  }

  async getTodosByUserId(id: string): Promise<TodoDto[]> {
    return this._todoRepository.getAllByUserId(Number(id));
  }

  async updateTodo(
    id: Number,
    userId: Number,
    todoUpdateDto: TodoUpdateDto,
  ): Promise<TodoDto> {
    let todoToUpdate = await this._todoRepository.findOne({
      where: {
        id,
        user: userId,
      },
    });
    //#todoToUpdate.description = 'Me, my friends and polar bears';
    //todoDto
    let finalObject = { ...todoToUpdate, ...todoUpdateDto };
    let updatedTodo = await this._todoRepository.save(finalObject);
    return updatedTodo;
  }
}
