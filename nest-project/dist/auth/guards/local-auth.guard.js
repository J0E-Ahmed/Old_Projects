"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAuthGuard = void 0;
const passport_1 = require("@nestjs/passport");
class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
    constructor() {
        super();
    }
    async canActivate(context) {
        const result = await super.canActivate(context);
        return result;
    }
}
exports.LocalAuthGuard = LocalAuthGuard;
//# sourceMappingURL=local-auth.guard.js.map