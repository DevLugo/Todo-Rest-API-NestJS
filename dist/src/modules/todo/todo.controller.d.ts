import { TodoService } from './todo.service';
import { TodoCreateDto } from './dto/TodoCreate.dto';
import { TodoUpdateDto } from './dto/TodoUpdate.dto';
import { TodoDto } from './dto/Todo.dto';
export declare class TodoController {
    private readonly _todoService;
    constructor(_todoService: TodoService);
    createTodo(todoCreateDto: TodoCreateDto, req: any): Promise<TodoCreateDto>;
    getTodos(req: any): Promise<TodoDto[]>;
    updateTodo(todoUpdateDto: TodoUpdateDto, todoId: string, req: any): Promise<TodoDto>;
    deleteTodo(todoId: string, req: any): Promise<void>;
}
