import { SignUpDto, SignInDto } from './dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly _authservice;
    constructor(_authservice: AuthService);
    signup(signUpDto: SignUpDto): Promise<void>;
    signin(signInDto: SignInDto): Promise<{
        token: string;
    }>;
}
