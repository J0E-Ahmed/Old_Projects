import { Controller, Req, Post, UseGuards, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { SignUpCredentialDto } from 'src/users/dto/SignUp.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Req() req: any) {
    return this.authService.login(req.user);
  }

  @Post('signup')
  createUser(@Body() createUser: SignUpCredentialDto) {
    return this.authService.createUser(createUser);
  }
}
