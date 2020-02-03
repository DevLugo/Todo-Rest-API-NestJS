import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoCreateDto } from './dto/TodoCreate.dto';
import { TodoDto } from './dto/Todo.dto';
export declare class TodoRepository extends Repository<Todo> {
    createTodo(todoDto: TodoCreateDto): Promise<Todo>;
    getAllByUserId(id: number): Promise<Todo[]>;
    updateTodo(id: number, todoDto: TodoDto): Promise<Todo>;
    deleteById(id: string): Promise<object>;
}
