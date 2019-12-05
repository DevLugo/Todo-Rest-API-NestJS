import { AuthRepository } from './auth.repository';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto, SignInDto } from './dto';
export declare class AuthService {
    private readonly _authRepository;
    private readonly _jwtService;
    constructor(_authRepository: AuthRepository, _jwtService: JwtService);
    signup(SignUpDto: SignUpDto): Promise<void>;
    signin(signinDto: SignInDto): Promise<{
        token: string;
    }>;
}
