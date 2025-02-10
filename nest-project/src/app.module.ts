import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductModule } from './product/product.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CardModule } from './card/card.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://youssefAhmed:QWERTYUIOP@cluster0.d4wuoos.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UserModule,
    ProductModule,
    CardModule,
    JwtModule.register({
      global: true,
      secret: 'mySecretKey',
      signOptions: { expiresIn: '3h' },
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
