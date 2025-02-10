import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/users/interfaces/save-user.interface';

const getCurrentUserByContext = (context: ExecutionContext): User => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
