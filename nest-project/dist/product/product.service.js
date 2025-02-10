"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductService = class ProductService {
    constructor(productModel, userModel) {
        this.productModel = productModel;
        this.userModel = userModel;
    }
    async createProduct(createProductDto, user) {
        try {
            const product = new this.productModel({
                ...createProductDto,
                userId: user,
            });
            const savedProduct = await product.save();
            await this.userModel.findByIdAndUpdate(user, {
                $push: { products: savedProduct._id },
            });
            return savedProduct;
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('Unable to create product');
        }
    }
    async deleteProduct(id, user) {
        const product = await this.productModel.findById(id);
        if (!product) {
            throw new common_1.BadRequestException('Invalid product ID');
        }
        try {
            await this.productModel.findByIdAndDelete(id);
            await this.userModel.updateOne({ _id: user._id }, { $pull: { products: id } });
            return 'success';
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('Could not delete the product, please try again later');
        }
    }
    async updateProduct(updateProductDto, id) {
        const productObjectId = new mongoose_2.Types.ObjectId(id);
        const updateProduct = await this.productModel.findByIdAndUpdate(productObjectId, { $set: { ...updateProductDto } }, { new: true });
        return updateProduct;
    }
    async deleteAllProducts() {
        try {
            return await this.productModel.deleteMany({});
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('there is an issue, please try again later');
        }
    }
    async getProducts() {
        try {
            return await this.productModel.find({});
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('there is an issue, please try again later');
        }
    }
    async geyMyProducts(user) {
        const product = await this.productModel.find({
            _id: user.products,
        });
        return { products: product };
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __param(1, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ProductService);
//# sourceMappingURL=product.service.js.map