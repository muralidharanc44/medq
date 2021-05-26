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
exports.AdminPanelService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const aws_sdk_1 = require("aws-sdk");
let AdminPanelService = class AdminPanelService {
    constructor(productInterface, productcategorieInterface, cartInterface, couponInterface, orderInterface, userInterface, addressInterface, rfqInterface, rfqproductlistInterface) {
        this.productInterface = productInterface;
        this.productcategorieInterface = productcategorieInterface;
        this.cartInterface = cartInterface;
        this.couponInterface = couponInterface;
        this.orderInterface = orderInterface;
        this.userInterface = userInterface;
        this.addressInterface = addressInterface;
        this.rfqInterface = rfqInterface;
        this.rfqproductlistInterface = rfqproductlistInterface;
    }
    async deshboard() {
        const data = await this.productInterface.find().exec();
        const user = await this.userInterface.find().exec();
        const order = await this.orderInterface.find().exec();
        let count = {
            "productCount": data.length,
            "userCount": user.length,
            "orderCount": order.length,
        };
        return count;
    }
    async userlist() {
        const data = await this.userInterface.find().exec();
        console.log(data);
        const count = [];
        const c = data;
        for (let i = 0; i < data.length; i++) {
            if (data[i].phone) {
                count.push({
                    avatar: "",
                    company: "",
                    phone: c[i].phone,
                    country: "India",
                    currentPlan: "Customer",
                    email: c[i].email ? c[i].email : "-",
                    fullName: c[i].userName,
                    id: c[i]._id,
                    role: "Customer",
                    status: c[i].status == 1 ? "active" : c[i].status == 2 ? "inactive" : "suspend",
                    username: ""
                });
            }
        }
        return await count;
    }
    async userStatusUpdate(body) {
        console.log(body._id);
        var query = { '_id': body._id };
        return this.userInterface.updateOne(query, body, { upsert: true }, function (err, doc) {
            if (err)
                return {
                    error: err
                };
            return 'Succesfully saved.';
        });
    }
    async upload(file) {
        const { originalname } = file;
        const bucketS3 = 'static-files-serve/products';
        console.log(originalname);
        const data = this.uploadS3(file.buffer, bucketS3, originalname);
        if (data) {
            return {
                "location": 'https://static-files-serve.s3.amazonaws.com/products/' + originalname,
            };
        }
    }
    async uploadS3(file, bucket, name) {
        const s3 = this.getS3();
        const params = {
            Bucket: bucket,
            Key: String(name),
            Body: file,
        };
        return await s3.upload(params, (err, data) => {
            console.log(data);
            return "successfully upload";
        });
    }
    getS3() {
        return new aws_sdk_1.S3({
            accessKeyId: 'AKIAQCGQAFRBS6JOH5FT',
            secretAccessKey: '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',
        });
    }
    async categoriesList() {
        let categorie = await this.productcategorieInterface.find().exec();
        return {
            "data": categorie
        };
    }
    async orderslist() {
        let order = await this.orderInterface.find().exec();
        let user = await this.userInterface.find().exec();
        let address = await this.addressInterface.find().exec();
        console.log(address);
        const cc = [];
        for (let i = 0; i < order.length; i++) {
            cc.push({
                "orderId": order[i]._id,
                "cartIds": order[i]._id,
                "paid": order[i].paid,
                "grandTotal": order[i].grandTotal,
                "addressId1": order[i].addressId,
                "addressId": address.filter(key1 => key1._id == order[i].addressId),
                "user": user.filter(key => key.userId === Number(order[i].userId)),
                "shippingMethod": order[i].shippingMethod,
                "date": order[i].date,
                "status": order[i].orderStatus === "1" ? "Processing" : order[i].orderStatus === "2" ? "Completed" : "Cencled",
                "orderStatus": order[i].orderStatus,
            });
        }
        return cc;
    }
    async addproduct(body) {
        const product = new this.productInterface(body);
        const data = await this.productInterface.find().exec();
        product.currency = 'inr';
        product.offerPerchtage = '10';
        let aa = Math.floor(Number(product.price) - (Number(product.price) * (Number(product.offerPerchtage) / 100)));
        product.grandTotal = aa.toString();
        product.offer = product.offerPerchtage + '% off';
        let productLeng = data.length + 2;
        product.productId = productLeng.toString();
        product.productImage = [product.productImage];
        return await product.save().then((data) => {
            return data;
        });
    }
    async productlist() {
        const data = await this.productInterface.find().exec();
        let re = data;
        const cc = [];
        for (let i = 0; i < re.length; i++) {
            cc.push({
                "_id": re[i]._id,
                "productId": re[i].productId,
                "productImage": JSON.parse(re[i].productImage),
                "categoryId": re[i].caregoryId,
                "name": re[i].name,
                "about": re[i].about,
                "price": re[i].price,
                "currency": re[i].currency,
                "offerPercentage": re[i].offerPerchtage,
                "offer": re[i].offer,
                "grandTotal": Math.floor(Number(re[i].grandTotal) - (Number(re[i].grandTotal) * (Number(re[i].offerPerchtage) / 100))),
                "topOffer": re[i].topOffer,
                "composition": re[i].composition,
                "use": re[i].use,
                "otherInformation": re[i].otherInfo
            });
        }
        return cc;
    }
    async rfqList() {
        const data = await this.userInterface.find().exec();
        const rfqIdCheck = await this.rfqInterface.find().exec();
        let l = [];
        for (let i = 0; i < rfqIdCheck.length; i++) {
            l.push({
                "rfqId": rfqIdCheck[i]._id,
                "user": data.filter(x => x.userId === Number(rfqIdCheck[i].userId)),
                "image": rfqIdCheck[i].imagePath,
                "statusString": rfqIdCheck[i].status,
                "status": rfqIdCheck[i].statusType,
            });
        }
        return l;
    }
    async productRfq(body) {
        console.log(body);
        const rfq = new this.rfqproductlistInterface(body);
        return await rfq.save().then((data) => {
            var query = { '_id': body.rfqId };
            console.log(query);
            console.log(body);
            let aa = {
                "statusType": "3",
                "status": "Waiting for user approval",
            };
            this.rfqInterface.updateOne(query, aa, { upsert: true }, function (err, doc) {
                if (err)
                    return {
                        error: err,
                    };
            });
            return {
                "responseCode": 200,
                "error": false,
                responseMessage: 'Sucessfully added',
                response: [],
            };
        });
    }
    async productRfqLiust() {
        let cartsList = await this.rfqproductlistInterface.find().exec();
        console.log(cartsList);
        return {
            "responseCode": 200,
            "error": false,
            responseMessage: 'Sucessfully added',
            response: cartsList,
        };
    }
};
AdminPanelService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('product')),
    __param(1, mongoose_1.InjectModel('product_categorie')),
    __param(2, mongoose_1.InjectModel('cart')),
    __param(3, mongoose_1.InjectModel('promo_code')),
    __param(4, mongoose_1.InjectModel('order')),
    __param(5, mongoose_1.InjectModel('user')),
    __param(6, mongoose_1.InjectModel('address')),
    __param(7, mongoose_1.InjectModel('rfq')),
    __param(8, mongoose_1.InjectModel('rfqproduct')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], AdminPanelService);
exports.AdminPanelService = AdminPanelService;
//# sourceMappingURL=admin-panel.service.js.map