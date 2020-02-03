import { TodoRepository } from './todo.repository';
import { TodoDto } from './dto/Todo.dto';
import { TodoCreateDto } from './dto/TodoCreate.dto';
import { TodoUpdateDto } from './dto/TodoUpdate.dto';
export declare class TodoService {
    private readonly _todoRepository;
    constructor(_todoRepository: TodoRepository);
    createTodo(todo: TodoCreateDto): Promise<TodoDto>;
    getTodosByUserId(id: string): Promise<TodoDto[]>;
    updateTodo(id: Number, userId: Number, todoUpdateDto: TodoUpdateDto): Promise<TodoDto>;
    removeTodo(id: Number, userId: Number): Promise<void>;
}
