import { UserService } from './user.service';

import { Controller, Delete, Get, Param, Req, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from 'src/product/decorator/current-user.decorator';
import { User } from './interfaces/save-user.interface';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Delete(':id')
  deleteById(@Param('id') id: string, @CurrentUser() user: User) {
    return this.userService.deleteById(id, user);
  }

  @Get('me')
  async getMe(@Req() req: any) {
    return this.userService.findOneById(req.user._id);
  }

  // @Get()
  // getAll() {
  //   return this.userService.getAll();
  // }

  // @Delete()
  // async deleteAllUsers() {
  //   return this.userService.deleteAll();
  // }

  // @Post(':productId')
  // async addProductToUser(
  //   @CurrentUser() user: User,
  //   @Param('productId') productId: string,
  // ) {
  //   return this.userService.addProductToUser(user._id, productId);
  // }
}
