import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { SignUpCredentialDto } from './dto/SignUp.dto';
import * as bcrypt from 'bcrypt';
import { User } from './interfaces/save-user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Product } from 'src/product/entity/save=product.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  private async hashedPassword(password: string) {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  async addUser(createUser: SignUpCredentialDto): Promise<User> {
    try {
      const newUser: any = {
        ...createUser,
        password: await this.hashedPassword(createUser.password),
      };
      const newUsers = new this.userModel(newUser);
      return await newUsers.save();
    } catch (err) {
      if (err.message.includes('E11000')) {
        throw new UnprocessableEntityException('Email already exists.');
      }

      throw new InternalServerErrorException('Unable to create user');
    }
  }

  async deleteById(id: string, user: User) {
    if (user._id.toString() !== id) {
      throw new ForbiddenException('You are not allowed to delete this user.');
    }
    try {
      await this.productModel.deleteMany({
        userId: new Types.ObjectId(id),
      });

      await this.userModel.deleteOne({ _id: id });

      return 'deleted successfully';
    } catch (err) {
      throw new NotFoundException('There is no user with this ID');
    }
  }

  async findOneById(id: Types.ObjectId) {
    try {
      const { email, username, _id, products } = await this.userModel.findOne({
        _id: id,
      });

      return { email, username, _id, products };
    } catch (err) {
      throw new NotFoundException('There is no user with this ID');
    }
  }

  async findOneByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  // get all users

  // async getAll() {
  //   return await this.userModel.find({});
  // }

  // delete all users

  // async deleteAll() {
  //   return await this.userModel.deleteMany({});
  // }

  // async addProductToUser(
  //   userId: Types.ObjectId,
  //   productId: string,
  // ): Promise<User | null> {
  //   return this.userModel.findByIdAndUpdate(
  //     userId,
  //     { $addToSet: { products: productId } },
  //     { new: true },
  //   );
  // }

  // async signIn(signInCredentialDto: SignInCredentialDto) {
  //   const { email, password } = signInCredentialDto;

  //   const user = await this.userModel.findOne({ email });

  //   if (user && (await bcrypt.compare(password, user.password))) {
  //     const payload: JwtPayload = {
  //       email: user.email,
  //       username: user.username,
  //     };
  //     const access_Token: string = this.jwtService.sign(payload);
  //     return access_Token;
  //   } else {
  //     throw new NotFoundException('Please check your login credentials');
  //   }
  // }

  // async signUp(createUser: SignUpCredentialDto) {
  //   const { password, email } = authCredentialDto;
  //   const existingUser = users.find((user) => user.email === email);
  //   if (existingUser) {
  //     throw new ConflictException('Email already exists');
  //   }

  //   // const id = uuidv4();

  //   const salt = await bcrypt.genSalt();
  //   const hashedPassword = await bcrypt.hash(password, salt);

  //   const newUser: User = {
  //     // id,
  //     email,
  //     password: hashedPassword,
  //   };
  //   try {
  //     users.push(newUser);
  //   } catch (err) {
  //     throw new InternalServerErrorException();
  //   }

  //   return newUser;
  // }
}
