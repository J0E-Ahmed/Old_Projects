import { UserService } from './user.service';
import { User } from './interfaces/save-user.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    deleteById(id: string, user: User): Promise<string>;
    getMe(req: any): Promise<{
        email: string;
        username: string;
        _id: import("mongoose").Types.ObjectId;
        products: string[];
    }>;
}
