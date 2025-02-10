import { UserService } from '../user.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(payload: any): Promise<{
        email: string;
        username: string;
        _id: import("mongoose").Types.ObjectId;
        products: string[];
    }>;
}
export {};
