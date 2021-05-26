"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RfqModule = void 0;
const common_1 = require("@nestjs/common");
const rfq_service_1 = require("./rfq.service");
const rfq_controller_1 = require("./rfq.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../schema/user.schema");
const rfq_schema_1 = require("../schema/rfq.schema");
const rfqproductlist_schema_1 = require("../schema/rfqproductlist.schema");
const product_schema_1 = require("../schema/product.schema");
let RfqModule = class RfqModule {
};
RfqModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'rfq',
                    schema: rfq_schema_1.rfqSchema,
                },
                {
                    name: 'user',
                    schema: user_schema_1.userSchema,
                },
                {
                    name: 'rfqproduct',
                    schema: rfqproductlist_schema_1.rfqproductlistSchema,
                },
                {
                    name: 'product',
                    schema: product_schema_1.productSchema,
                },
            ]),
        ],
        providers: [rfq_service_1.RfqService],
        controllers: [rfq_controller_1.RfqController]
    })
], RfqModule);
exports.RfqModule = RfqModule;
//# sourceMappingURL=rfq.module.js.map