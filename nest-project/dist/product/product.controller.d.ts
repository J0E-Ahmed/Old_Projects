import { ProductService } from './product.service';
import { CreateProductDto } from './dto/CreateProduct.dto';
import { User } from 'src/users/interfaces/save-user.interface';
import { UpdateProductDto } from './dto/UpdateProduct.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getMyProducts(user: User): Promise<{
        products: (import("mongoose").Document<unknown, {}, import("./entity/save=product.interface").Product> & import("./entity/save=product.interface").Product & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    createProduct(createProductDto: CreateProductDto, user: User): Promise<any>;
    getAllProducts(): Promise<(import("mongoose").Document<unknown, {}, import("./entity/save=product.interface").Product> & import("./entity/save=product.interface").Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    deleteAllProducts(): Promise<import("mongodb").DeleteResult>;
    deleteProduct(id: string, user: User): Promise<string>;
    updateProduct(updateProductDto: UpdateProductDto, id: string): Promise<import("mongoose").Document<unknown, {}, import("./entity/save=product.interface").Product> & import("./entity/save=product.interface").Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
