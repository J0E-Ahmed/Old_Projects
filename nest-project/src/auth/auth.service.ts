import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignUpCredentialDto } from 'src/users/dto/SignUp.dto';
// import { User } from 'src/users/interfaces/save-user.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('credentials are not valid.');
  }

  async login(user: any) {
    const payload = {
      email: user._doc.email,
      username: user._doc.username,
      id: user._doc._id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  createUser(createUser: SignUpCredentialDto) {
    return this.userService.addUser(createUser);
  }
}
