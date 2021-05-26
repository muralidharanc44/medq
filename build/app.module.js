"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const nestjs_twilio_1 = require("nestjs-twilio");
const career_module_1 = require("./career/career.module");
const product_module_1 = require("./product/product.module");
const rfq_module_1 = require("./rfq/rfq.module");
const admin_panel_module_1 = require("./admin-panel/admin-panel.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule,
            career_module_1.CareerModule,
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env'],
            }),
            mongoose_1.MongooseModule.forRoot(process.env.APP_ENV === 'Dev' ? `mongodb://${process.env.DB_USER ? process.env.DB_USER + ':' : ''}${process.env.DB_PASS ? encodeURIComponent(process.env.DB_PASS) + '@' : ''}${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}${process.env.DB_AUTH_METHOD !== 'None' ? '?authSource=admin' : ''}` : `mongodb+srv://admin:admin@cluster0.jwp6p.mongodb.net/medq_react?retryWrites=true&w=majority`),
            nestjs_twilio_1.TwilioModule.forRoot({
                accountSid: process.env.TWILIO_ACCOUNT_SID,
                authToken: process.env.TWILIO_AUTH_TOKEN,
            }),
            product_module_1.ProductModule,
            rfq_module_1.RfqModule,
            admin_panel_module_1.AdminPanelModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map