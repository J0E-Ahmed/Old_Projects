import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/CreateProduct.dto';
import { JwtAuthGuard } from 'src/users/guards/jwt-auth.guard';
import { CurrentUser } from './decorator/current-user.decorator';
import { User } from 'src/users/interfaces/save-user.interface';
import { UpdateProductDto } from './dto/UpdateProduct.dto';

@Controller('product')
@UseGuards(JwtAuthGuard)
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('me')
  async getMyProducts(@CurrentUser() user: User) {
    return this.productService.geyMyProducts(user);
  }

  @Post()
  async createProduct(
    @Body() createProductDto: CreateProductDto,
    @CurrentUser() user: User,
  ): Promise<any> {
    return await this.productService.createProduct(createProductDto, user._id);
  }
  @Get()
  async getAllProducts() {
    return await this.productService.getProducts();
  }

  @Delete()
  async deleteAllProducts() {
    return await this.productService.deleteAllProducts();
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string, @CurrentUser() user: User) {
    return await this.productService.deleteProduct(id, user);
  }

  @Put(':id')
  async updateProduct(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ) {
    return await this.productService.updateProduct(updateProductDto, id);
  }
}
