import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { SignUpDto } from './dto';
export declare class AuthRepository extends Repository<User> {
    signup(signupDto: SignUpDto): Promise<void>;
}
