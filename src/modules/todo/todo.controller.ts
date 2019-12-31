import {
  Controller,
  Post,
  Request,
  Body,
  Get,
  UseGuards,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoCreateDto } from './dto/TodoCreate.dto';
import { Todo } from './todo.entity';
import { AuthGuard } from '@nestjs/passport';
import { TodoUpdateDto } from './dto/TodoUpdate.dto';
import { TodoDto } from './dto/Todo.dto';

@Controller('todo')
@UseGuards(AuthGuard())
export class TodoController {
  constructor(private readonly _todoService: TodoService) {}
  @Post('/')
  async createTodo(
    @Body() todoCreateDto: TodoCreateDto,
    @Request() req,
  ): Promise<TodoCreateDto> {
    const todo = new Todo();
    todo.description = todoCreateDto.description;
    todo.user = req.user.id;
    const createdTodo = await this._todoService.createTodo(todo);
    return createdTodo;
  }

  @Get('/')
  async getTodos(@Request() req): Promise<TodoDto[]> {
    const todos = this._todoService.getTodosByUserId(req.user.id);
    return todos;
  }

  @Put('/:id')
  async updateTodo(
    @Body() todoUpdateDto: TodoUpdateDto,
    @Param('id') todoId: string,
    @Request() req,
  ): Promise<TodoDto> {
    const userId = Number(req.user.id);
    const todo = this._todoService.updateTodo(
      Number(todoId),
      userId,
      todoUpdateDto,
    );
    return todo;
  }

  @Delete('/:id')
  async deleteTodo(@Param('id') todoId: string, @Request() req): Promise<void> {
    const userId = Number(req.user.id);
    const todo = this._todoService.removeTodo(Number(todoId), userId);
    return todo;
  }
}
