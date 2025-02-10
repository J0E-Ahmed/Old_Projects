import { forwardRef, Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserModule } from 'src/users/user.module';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';

import { Constants } from './constants/systemGroup.enum';
import { JwtStrategy } from 'src/users/strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.register({
      secret: Constants.SecreteKey,
      signOptions: { expiresIn: '3h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
