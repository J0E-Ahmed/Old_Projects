import { Model, Types } from 'mongoose';
import { Product } from './entity/save=product.interface';
import { CreateProductDto } from './dto/CreateProduct.dto';
import { User } from 'src/users/interfaces/save-user.interface';
import { UpdateProductDto } from './dto/UpdateProduct.dto';
export declare class ProductService {
    private readonly productModel;
    private readonly userModel;
    constructor(productModel: Model<Product>, userModel: Model<User>);
    createProduct(createProductDto: CreateProductDto, user: any): Promise<import("mongoose").Document<unknown, {}, Product> & Product & {
        _id: Types.ObjectId;
    }>;
    deleteProduct(id: string, user: User): Promise<string>;
    updateProduct(updateProductDto: UpdateProductDto, id: string): Promise<import("mongoose").Document<unknown, {}, Product> & Product & {
        _id: Types.ObjectId;
    }>;
    deleteAllProducts(): Promise<import("mongodb").DeleteResult>;
    getProducts(): Promise<(import("mongoose").Document<unknown, {}, Product> & Product & {
        _id: Types.ObjectId;
    })[]>;
    geyMyProducts(user: User): Promise<{
        products: (import("mongoose").Document<unknown, {}, Product> & Product & {
            _id: Types.ObjectId;
        })[];
    }>;
}
