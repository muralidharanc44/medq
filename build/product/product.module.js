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
const product_service_1 = require("./product.service");
const product_controller_1 = require("./product.controller");
const mongoose_1 = require("@nestjs/mongoose");
const product_schema_1 = require("../schema/product.schema");
const productcategorie_schema_1 = require("../schema/productcategorie.schema");
const cart_schema_1 = require("../schema/cart.schema");
const coupon_schema_1 = require("../schema/coupon.schema");
const order_schema_1 = require("../schema/order.schema");
const user_schema_1 = require("../schema/user.schema");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'product',
                    schema: product_schema_1.productSchema,
                },
                {
                    name: 'product_categorie',
                    schema: productcategorie_schema_1.productcategorieSchema,
                },
                {
                    name: 'cart',
                    schema: cart_schema_1.cartSchema,
                },
                {
                    name: 'promo_code',
                    schema: coupon_schema_1.couponSchema,
                },
                {
                    name: 'order',
                    schema: order_schema_1.orderSchema,
                },
                {
                    name: 'user',
                    schema: user_schema_1.userSchema,
                },
            ]),
        ],
        providers: [product_service_1.ProductService],
        controllers: [product_controller_1.ProductController]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map