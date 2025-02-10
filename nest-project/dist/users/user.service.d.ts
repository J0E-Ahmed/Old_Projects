import { SignUpCredentialDto } from './dto/SignUp.dto';
import { User } from './interfaces/save-user.interface';
import { Model, Types } from 'mongoose';
import { Product } from 'src/product/entity/save=product.interface';
export declare class UserService {
    private readonly userModel;
    private readonly productModel;
    constructor(userModel: Model<User>, productModel: Model<Product>);
    private hashedPassword;
    addUser(createUser: SignUpCredentialDto): Promise<User>;
    deleteById(id: string, user: User): Promise<string>;
    findOneById(id: Types.ObjectId): Promise<{
        email: string;
        username: string;
        _id: Types.ObjectId;
        products: string[];
    }>;
    findOneByEmail(email: string): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: Types.ObjectId;
    }>>;
}
