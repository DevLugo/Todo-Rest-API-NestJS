import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { RpcException } from '@nestjs/microservices';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  getUserById = async (id: number): Promise<User> => {
    const found = await this.findOne(id);
    if (!found) throw new RpcException(`Product with ID ${id} not found`);
    return found;
  };
}
