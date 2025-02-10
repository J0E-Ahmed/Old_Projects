import { ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export class LocalAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = await super.canActivate(context);
    return result as boolean;
  }
}
