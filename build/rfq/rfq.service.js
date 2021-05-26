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
exports.RfqService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let RfqService = class RfqService {
    constructor(userInterface, rfqproductlistInterface, productInterface, rfqInterface) {
        this.userInterface = userInterface;
        this.rfqproductlistInterface = rfqproductlistInterface;
        this.productInterface = productInterface;
        this.rfqInterface = rfqInterface;
    }
    async rfqproductList(body) {
        console.log(body.id);
        const data = await this.userInterface.find().exec();
        const checkID = data.filter(x => x.accessToken === body.id);
        const userID = checkID[0].userId;
        const con = await this.rfqproductlistInterface.find().exec();
        const rfqIdCheck = con.filter(x => x.userId === "" + userID);
        console.log(rfqIdCheck);
        const products = rfqIdCheck[0].products;
        const product = JSON.parse(products);
        const data_product = await this.productInterface.find().exec();
        console.log("prod" + data_product);
        const kk = [];
        for (let i = 0; i < product.length; i++) {
            kk.push({
                'prductId': product[i].productId,
                'qty': product[i].qty,
                "status": "user approval",
                'products': data_product.filter(x => x.productId === product[i].productId)
            });
        }
        if (kk.length > 0) {
            return await {
                "responseCode": 200,
                "error": false,
                responseMessage: 'user appoval products',
                response: kk,
            };
        }
    }
    async rfqList(body) {
        console.log(body.id);
        const data = await this.userInterface.find().exec();
        const checkID = data.filter(x => x.accessToken === body.id);
        const userID = checkID[0].userId;
        const con = await this.rfqInterface.find().exec();
        const rfqIdCheck = con.filter(x => x.userId === "" + userID);
        console.log(rfqIdCheck);
        let l = [];
        for (let i = 0; i < rfqIdCheck.length; i++) {
            l.push({
                "rfqId": rfqIdCheck[i]._id,
                "user": data.filter(x => x.userId === Number(rfqIdCheck[i].userId)),
                "image": rfqIdCheck[i].imagePath,
                "status": rfqIdCheck[i].status,
                "statusType": rfqIdCheck[i].statusType,
            });
        }
        return await {
            "responseCode": 200,
            "error": false,
            responseMessage: 'RFQ Products',
            response: l,
        };
    }
    async rfqChangeStatus(body) {
        return await {
            "responseCode": 200,
            "error": false,
            responseMessage: 'Status Updated',
            response: [],
        };
    }
    async rfqProductUpload(body) {
        return await {
            "responseCode": 200,
            "error": false,
            responseMessage: 'Product Updated',
            response: [],
        };
    }
};
RfqService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('user')),
    __param(1, mongoose_1.InjectModel('rfqproduct')),
    __param(2, mongoose_1.InjectModel('product')),
    __param(3, mongoose_1.InjectModel('rfq')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], RfqService);
exports.RfqService = RfqService;
//# sourceMappingURL=rfq.service.js.map