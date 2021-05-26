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
exports.AdminPanelController = void 0;
const common_1 = require("@nestjs/common");
const admin_panel_service_1 = require("./admin-panel.service");
const platform_express_1 = require("@nestjs/platform-express");
let AdminPanelController = class AdminPanelController {
    constructor(adminPanelService) {
        this.adminPanelService = adminPanelService;
    }
    async deshboard() {
        return await this.adminPanelService.deshboard();
    }
    async userlist() {
        return await this.adminPanelService.userlist();
    }
    async userStatusUpdate(body) {
        return await this.adminPanelService.userStatusUpdate(body);
    }
    async upload(file) {
        console.log(file);
        return await this.adminPanelService.upload(file);
    }
    async categoriesList() {
        return await this.adminPanelService.categoriesList();
    }
    async addproduct(body) {
        return await this.adminPanelService.addproduct(body);
    }
    async productlist(body) {
        return await this.adminPanelService.productlist();
    }
    async orders(body) {
        return await this.adminPanelService.orderslist();
    }
    async rfqList(body) {
        return await this.adminPanelService.rfqList();
    }
    async productRfqLiust(body) {
        return await this.adminPanelService.productRfqLiust();
    }
    async rfqListProduct(body) {
        return await this.adminPanelService.productRfq(body);
    }
};
__decorate([
    common_1.Get('deshboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminPanelController.prototype, "deshboard", null);
__decorate([
    common_1.Get('userlist'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminPanelController.prototype, "userlist", null);
__decorate([
    common_1.Post('userStatusUpdate'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminPanelController.prototype, "userStatusUpdate", null);
__decorate([
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminPanelController.prototype, "upload", null);
__decorate([
    common_1.Get('categoriesList'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminPanelController.prototype, "categoriesList", null);
__decorate([
    common_1.Post('addproduct'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminPanelController.prototype, "addproduct", null);
__decorate([
    common_1.Get('products'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminPanelController.prototype, "productlist", null);
__decorate([
    common_1.Get('orders'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminPanelController.prototype, "orders", null);
__decorate([
    common_1.Get('rfqList'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminPanelController.prototype, "rfqList", null);
__decorate([
    common_1.Get('productRfqLiust'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminPanelController.prototype, "productRfqLiust", null);
__decorate([
    common_1.Post('rfqListProduct'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminPanelController.prototype, "rfqListProduct", null);
AdminPanelController = __decorate([
    common_1.Controller('admin-panel'),
    __metadata("design:paramtypes", [admin_panel_service_1.AdminPanelService])
], AdminPanelController);
exports.AdminPanelController = AdminPanelController;
//# sourceMappingURL=admin-panel.controller.js.map