import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from '../users/user.entity';
import { IsBoolean } from 'class-validator';

@Entity('todos')
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 250, nullable: false })
  description: string;

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @Column({ default: false })
  @IsBoolean()
  done: boolean;

  @Column({
    type: 'timestamp',
    name: 'create_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @Column({
    type: 'timestamp',
    name: 'update_at',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  updateAt: Date;

  @ManyToOne(
    type => User,
    user => user.todos,
    { nullable: false },
  )
  user: User;
}
