import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './entity/Product.entity';
import { JwtStrategy } from 'src/users/strategies/jwt.strategy';
import { UserModule } from 'src/users/user.module';
import { UserSchema } from 'src/users/entity/user.entity';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([
      { name: 'Product', schema: ProductSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService, JwtStrategy],
})
export class ProductModule {}
