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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UserService = class UserService {
    constructor(userModel, productModel) {
        this.userModel = userModel;
        this.productModel = productModel;
    }
    async hashedPassword(password) {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(password, salt);
    }
    async addUser(createUser) {
        try {
            const newUser = {
                ...createUser,
                password: await this.hashedPassword(createUser.password),
            };
            const newUsers = new this.userModel(newUser);
            return await newUsers.save();
        }
        catch (err) {
            if (err.message.includes('E11000')) {
                throw new common_1.UnprocessableEntityException('Email already exists.');
            }
            throw new common_1.InternalServerErrorException('Unable to create user');
        }
    }
    async deleteById(id, user) {
        if (user._id.toString() !== id) {
            throw new common_1.ForbiddenException('You are not allowed to delete this user.');
        }
        try {
            await this.productModel.deleteMany({
                userId: new mongoose_2.Types.ObjectId(id),
            });
            await this.userModel.deleteOne({ _id: id });
            return 'deleted successfully';
        }
        catch (err) {
            throw new common_1.NotFoundException('There is no user with this ID');
        }
    }
    async findOneById(id) {
        try {
            const { email, username, _id, products } = await this.userModel.findOne({
                _id: id,
            });
            return { email, username, _id, products };
        }
        catch (err) {
            throw new common_1.NotFoundException('There is no user with this ID');
        }
    }
    async findOneByEmail(email) {
        return await this.userModel.findOne({ email });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __param(1, (0, mongoose_1.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map