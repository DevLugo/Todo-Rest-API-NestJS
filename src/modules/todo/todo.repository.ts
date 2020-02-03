import { Repository, EntityRepository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoCreateDto } from './dto/TodoCreate.dto';
import { TodoDto } from './dto/Todo.dto';
import { RpcException } from '@nestjs/microservices';

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

  async deleteById(id: string): Promise<object> {
    const result = await this.delete(id);

    if (result.affected === 0) {
      throw new RpcException(`Todo with ID ${id} not found`);
    }
    return {
      success: true,
    };
  }
}
