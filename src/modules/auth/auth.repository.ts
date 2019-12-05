import { Repository, EntityRepository } from 'typeorm';
import { User } from '../users/user.entity';
import { SignUpDto } from './dto';
import { genSalt, hash } from 'bcryptjs';

@EntityRepository(User)
export class AuthRepository extends Repository<User> {
  async signup(signupDto: SignUpDto) {
    const { username, email, password } = signupDto;
    const user = new User();
    user.username = username;
    user.email = email;

    const salt = await genSalt(10);
    user.password = await hash(password, salt);

    await user.save();
  }
}
