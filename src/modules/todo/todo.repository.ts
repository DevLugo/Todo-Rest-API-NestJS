import { Repository, EntityRepository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoCreateDto } from './dto/TodoCreate.dto';
import { TodoDto } from './dto/Todo.dto';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
  async createTodo(todoDto: TodoCreateDto): Promise<Todo> {
    return this.save(todoDto);
  }

  async getAllByUserId(id: number): Promise<Todo[]> {
    return this.find({
      where: { user: id },
    });
  }

  async updateTodo(id: number, todoDto: TodoDto): Promise<Todo> {
    return this.save({
      ...todoDto,
      id,
    });
  }
}
