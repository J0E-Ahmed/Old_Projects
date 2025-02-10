"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_controller_1 = require("./product.controller");
const product_service_1 = require("./product.service");
const mongoose_1 = require("@nestjs/mongoose");
const Product_entity_1 = require("./entity/Product.entity");
const jwt_strategy_1 = require("../users/strategies/jwt.strategy");
const user_module_1 = require("../users/user.module");
const user_entity_1 = require("../users/entity/user.entity");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            mongoose_1.MongooseModule.forFeature([
                { name: 'Product', schema: Product_entity_1.ProductSchema },
                { name: 'User', schema: user_entity_1.UserSchema },
            ]),
        ],
        controllers: [product_controller_1.ProductController],
        providers: [product_service_1.ProductService, jwt_strategy_1.JwtStrategy],
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map