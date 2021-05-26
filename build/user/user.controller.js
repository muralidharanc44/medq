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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(body) {
        return await this.userService.createUser(body);
    }
    async adminSignup(body) {
        return await this.userService.adminSignup(body);
    }
    async loginUser(body) {
        return await this.userService.loginUser(body);
    }
    async socialloginUser(body) {
        return await this.userService.socialloginUser(body);
    }
    async usersList() {
        return await this.userService.usersList();
    }
    async userUpdate(body1, id) {
        return await this.userService.userUpdate(body1, Number(id));
    }
    async sentOtp(body) {
        return await this.userService.sendSMS(body);
    }
    async changePassword(body) {
        return await this.userService.changePassword(body);
    }
    async forgotPassword(body) {
        return await this.userService.forgotPassword(body);
    }
    async verifyOtp(body) {
        return await this.userService.verifyOtp(body);
    }
    async deshbordProducts(body) {
        return await this.userService.deshboardProduct(body);
    }
    async searchProduct(body) {
        return await this.userService.searchProduct(body);
    }
    async subCategories(body) {
        return await this.userService.subCategories(body);
    }
    async removePromoCode(body) {
        return await this.userService.removePromoCode(body);
    }
    async applyPromoCode(body) {
        return await this.userService.applyPromoCode(body);
    }
    async myCarts(body) {
        return await this.userService.myCarts(body);
    }
    async addCarts(body) {
        return await this.userService.addCarts(body);
    }
    async removecart(body) {
        return await this.userService.removecart(body);
    }
    async madicineDetails(body) {
        return await this.userService.madicineDetails(body);
    }
    async paymentDetails(body) {
        return await this.userService.paymentDetails(body);
    }
    async listCard(body) {
        return await this.userService.listCard(body);
    }
    async addCard(body) {
        return await this.userService.addCard(body);
    }
    async removeCard(body) {
        return await this.userService.removeCard(body);
    }
    async digitalwallets() {
        return await this.userService.digitalwallets();
    }
    async listinternetbanking() {
        return await this.userService.listinternetbanking();
    }
    async listAddress(req) {
        const header = req.headers;
        return await this.userService.listAddress(header);
    }
    async makeAddressPrimary(body) {
        return await this.userService.makeAddressPrimary(body);
    }
    async removeAddress(body) {
        return await this.userService.removeAddress(body);
    }
    async addAddress(req, body) {
        const header = req.headers;
        return await this.userService.addAddress(header, body);
    }
    async UpdateAddress(body) {
        return await this.userService.UpdateAddress(body);
    }
};
__decorate([
    common_1.Post('signup'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    common_1.Post('adminSignup'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "adminSignup", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginUser", null);
__decorate([
    common_1.Post('socialLogin'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "socialloginUser", null);
__decorate([
    common_1.Get('usersList'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "usersList", null);
__decorate([
    common_1.Put('update/:id'),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userUpdate", null);
__decorate([
    common_1.Post('sentOtp'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "sentOtp", null);
__decorate([
    common_1.Post('changePassword'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePassword", null);
__decorate([
    common_1.Post('forgotPassword'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "forgotPassword", null);
__decorate([
    common_1.Post('verifyOtp'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "verifyOtp", null);
__decorate([
    common_1.Post('deshbordProducts'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deshbordProducts", null);
__decorate([
    common_1.Post('searchProduct'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "searchProduct", null);
__decorate([
    common_1.Post('subCategories'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "subCategories", null);
__decorate([
    common_1.Post('removePromoCode'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "removePromoCode", null);
__decorate([
    common_1.Post('applyPromoCode'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "applyPromoCode", null);
__decorate([
    common_1.Post('myCarts'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "myCarts", null);
__decorate([
    common_1.Post('addCart'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addCarts", null);
__decorate([
    common_1.Post('removecart'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "removecart", null);
__decorate([
    common_1.Post('madicineDetails'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "madicineDetails", null);
__decorate([
    common_1.Post('paymentDetails'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "paymentDetails", null);
__decorate([
    common_1.Post('listCard'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "listCard", null);
__decorate([
    common_1.Post('addCard'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addCard", null);
__decorate([
    common_1.Post('removeCard'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "removeCard", null);
__decorate([
    common_1.Get('digitalwallets'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "digitalwallets", null);
__decorate([
    common_1.Get('listinternetbanking'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "listinternetbanking", null);
__decorate([
    common_1.Post('listAddress'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "listAddress", null);
__decorate([
    common_1.Post('makeAddressPrimary'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "makeAddressPrimary", null);
__decorate([
    common_1.Post('removeAddress'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "removeAddress", null);
__decorate([
    common_1.Post('addAddress'),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addAddress", null);
__decorate([
    common_1.Post('UpdateAddress'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "UpdateAddress", null);
UserController = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map