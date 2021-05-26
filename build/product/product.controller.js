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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async products() {
        return await this.productService.productsList();
    }
    async deshbordProducts() {
        return await this.productService.deshboardProduct();
    }
    async searchProduct(body) {
        return await this.productService.searchProduct(body);
    }
    async categoriesDetail(body) {
        return await this.productService.categoriesDetail(body);
    }
    async removePromoCode(body) {
        return await this.productService.removePromoCode(body);
    }
    async applyPromoCode(body) {
        return await this.productService.applyPromoCode(body);
    }
    async myCarts(req) {
        const header = req.headers;
        console.log(header);
        return await this.productService.myCarts(header);
    }
    async addCarts(req, body) {
        const header = req.headers;
        console.log(header);
        return await this.productService.addCarts(header, body);
    }
    async removecart(body) {
        return await this.productService.removecart(body);
    }
    async madicineDetails(body) {
        return await this.productService.madicineDetails(body);
    }
    async orderProduct(req, body) {
        const header = req.headers;
        console.log(header);
        return await this.productService.orderProduct(header, body);
    }
    async productcategorie(body) {
        return await this.productService.productcategorie(body);
    }
    async productcategorieList(body) {
        return await this.productService.productcategorieList();
    }
};
__decorate([
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "products", null);
__decorate([
    common_1.Get('deshbordProducts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deshbordProducts", null);
__decorate([
    common_1.Post('searchProduct'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "searchProduct", null);
__decorate([
    common_1.Post('categoriesDetail'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "categoriesDetail", null);
__decorate([
    common_1.Post('removePromoCode'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "removePromoCode", null);
__decorate([
    common_1.Post('applyPromoCode'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "applyPromoCode", null);
__decorate([
    common_1.Post('myCarts'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "myCarts", null);
__decorate([
    common_1.Post('addCart'),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "addCarts", null);
__decorate([
    common_1.Post('removecart'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "removecart", null);
__decorate([
    common_1.Post('medicineDetails'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "madicineDetails", null);
__decorate([
    common_1.Post('orderProduct'),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "orderProduct", null);
__decorate([
    common_1.Post('productcategorie'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "productcategorie", null);
__decorate([
    common_1.Get('productcategorieList'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "productcategorieList", null);
ProductController = __decorate([
    common_1.Controller('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map