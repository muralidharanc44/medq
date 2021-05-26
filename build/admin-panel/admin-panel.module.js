"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPanelModule = void 0;
const common_1 = require("@nestjs/common");
const admin_panel_controller_1 = require("./admin-panel.controller");
const admin_panel_service_1 = require("./admin-panel.service");
const mongoose_1 = require("@nestjs/mongoose");
const product_schema_1 = require("../schema/product.schema");
const productcategorie_schema_1 = require("../schema/productcategorie.schema");
const cart_schema_1 = require("../schema/cart.schema");
const coupon_schema_1 = require("../schema/coupon.schema");
const order_schema_1 = require("../schema/order.schema");
const user_schema_1 = require("../schema/user.schema");
const address_schema_1 = require("../schema/address.schema");
const rfq_schema_1 = require("../schema/rfq.schema");
const rfqproductlist_schema_1 = require("../schema/rfqproductlist.schema");
let AdminPanelModule = class AdminPanelModule {
};
AdminPanelModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'product',
                    schema: product_schema_1.productSchema,
                },
                {
                    name: 'user',
                    schema: user_schema_1.userSchema,
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
                    name: 'address',
                    schema: address_schema_1.addressSchema,
                },
                {
                    name: 'rfq',
                    schema: rfq_schema_1.rfqSchema,
                },
                {
                    name: 'rfqproduct',
                    schema: rfqproductlist_schema_1.rfqproductlistSchema,
                },
            ]),
        ],
        controllers: [admin_panel_controller_1.AdminPanelController],
        providers: [admin_panel_service_1.AdminPanelService]
    })
], AdminPanelModule);
exports.AdminPanelModule = AdminPanelModule;
//# sourceMappingURL=admin-panel.module.js.map