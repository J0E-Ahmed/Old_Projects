import { UserService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpCredentialDto } from 'src/users/dto/SignUp.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    createUser(createUser: SignUpCredentialDto): Promise<import("../users/interfaces/save-user.interface").User>;
}
