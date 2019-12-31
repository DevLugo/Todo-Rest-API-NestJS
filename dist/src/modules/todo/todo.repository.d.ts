import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoCreateDto } from './dto/TodoCreate.dto';
export declare class TodoRepository extends Repository<Todo> {
    createTodo(todo: TodoCreateDto): Promise<Todo>;
    getAllByUserId(id: number): Promise<Todo[]>;
}
