import { TodoService } from './todo.service';
import { TodoCreateDto } from './dto/TodoCreate.dto';
import { TodoDto } from './dto/Todo.dto';
export declare class TodoController {
    private readonly _todoService;
    constructor(_todoService: TodoService);
    createTodo(todoCreateDto: TodoCreateDto): Promise<TodoCreateDto>;
    getTodos(): Promise<TodoDto[]>;
}
