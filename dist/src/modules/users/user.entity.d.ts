import { BaseEntity } from 'typeorm';
import { Todo } from '../todo/todo.entity';
export declare class User extends BaseEntity {
    id: number;
    username: string;
    email: string;
    password: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    todos: Todo[];
}
