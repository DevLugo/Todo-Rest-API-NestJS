import { TodoRepository } from './todo.repository';
import { TodoDto } from './dto/Todo.dto';
import { TodoCreateDto } from './dto/TodoCreate.dto';
export declare class TodoService {
    private readonly _todoRepository;
    constructor(_todoRepository: TodoRepository);
    createTodo(todo: TodoCreateDto): Promise<TodoDto>;
    getTodosByUser(id: number): Promise<TodoDto[]>;
}
