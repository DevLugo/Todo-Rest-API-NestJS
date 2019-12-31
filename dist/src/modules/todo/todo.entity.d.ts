import { BaseEntity } from 'typeorm';
import { User } from '../users/user.entity';
export declare class Todo extends BaseEntity {
    id: number;
    description: string;
    status: string;
    done: boolean;
    createAt: Date;
    updateAt: Date;
    user: User;
}
