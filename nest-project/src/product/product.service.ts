import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Product } from './entity/save=product.interface';
import { CreateProductDto } from './dto/CreateProduct.dto';
import { User } from 'src/users/interfaces/save-user.interface';
import { UpdateProductDto } from './dto/UpdateProduct.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  async createProduct(createProductDto: CreateProductDto, user: any) {
    try {
      const product = new this.productModel({
        ...createProductDto,
        userId: user,
      });

      const savedProduct = await product.save();
      await this.userModel.findByIdAndUpdate(user, {
        $push: { products: savedProduct._id },
      });

      return savedProduct;
    } catch (err) {
      throw new InternalServerErrorException('Unable to create product');
    }
  }

  async deleteProduct(id: string, user: User) {
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new BadRequestException('Invalid product ID');
    }
    try {
      await this.productModel.findByIdAndDelete(id);

      await this.userModel.updateOne(
        { _id: user._id },
        { $pull: { products: id } },
      );
      return 'success';
    } catch (err) {
      throw new InternalServerErrorException(
        'Could not delete the product, please try again later',
      );
    }
  }

  async updateProduct(updateProductDto: UpdateProductDto, id: string) {
    const productObjectId = new Types.ObjectId(id);

    const updateProduct = await this.productModel.findByIdAndUpdate(
      productObjectId,
      { $set: { ...updateProductDto } },
      { new: true },
    );
    return updateProduct;
  }

  async deleteAllProducts() {
    try {
      return await this.productModel.deleteMany({});
    } catch (err) {
      throw new InternalServerErrorException(
        'there is an issue, please try again later',
      );
    }
  }

  async getProducts() {
    try {
      return await this.productModel.find({});
    } catch (err) {
      throw new InternalServerErrorException(
        'there is an issue, please try again later',
      );
    }
  }

  async geyMyProducts(user: User) {
    const product = await this.productModel.find({
      _id: user.products,
    });
    return { products: product };
  }
}
