"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./entity/user.entity");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const local_strategy_1 = require("../auth/strategies/local.strategy");
const auth_module_1 = require("../auth/auth.module");
const Product_entity_1 = require("../product/entity/Product.entity");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            mongoose_1.MongooseModule.forFeature([
                { name: 'User', schema: user_entity_1.UserSchema },
                { name: 'Product', schema: Product_entity_1.ProductSchema },
            ]),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [user_service_1.UserService],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map