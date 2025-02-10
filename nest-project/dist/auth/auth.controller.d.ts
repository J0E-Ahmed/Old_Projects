import { AuthService } from './auth.service';
import { SignUpCredentialDto } from 'src/users/dto/SignUp.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(req: any): Promise<{
        access_token: string;
    }>;
    createUser(createUser: SignUpCredentialDto): Promise<import("../users/interfaces/save-user.interface").User>;
}
