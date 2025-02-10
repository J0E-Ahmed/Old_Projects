import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entity/user.entity';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from 'src/auth/strategies/local.strategy';
import { AuthModule } from 'src/auth/auth.module';
import { ProductSchema } from 'src/product/entity/Product.entity';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Product', schema: ProductSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, LocalStrategy, JwtStrategy],
  exports: [UserService],
})
export class UserModule {}
