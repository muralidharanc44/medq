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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductService = class ProductService {
    constructor(productInterface, productcategorieInterface, cartInterface, couponInterface, orderInterface, userInterface) {
        this.productInterface = productInterface;
        this.productcategorieInterface = productcategorieInterface;
        this.cartInterface = cartInterface;
        this.couponInterface = couponInterface;
        this.orderInterface = orderInterface;
        this.userInterface = userInterface;
    }
    async productsList() {
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
        return {
            "responseCode": 200,
            "error": false,
            responseMessage: 'sucessfully',
            response: {
                'products': cc,
                'product_count': data.length
            },
        };
    }
    async deshboardProduct() {
        let product = await this.productInterface.find().exec();
        const categorie = await this.productcategorieInterface.find().exec();
        product = product.filter(x => x.topOffer === "1");
        let re = product;
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
        if (categorie) {
            let result = {
                "responseCode": 200,
                "error": false,
                "responseMessage": "sucessfully updated",
                "data": {
                    "categories": categorie,
                    "topOffer": cc,
                    "bannerImg": [
                        "https://mocial.com/banner-image1.jpeg",
                        "https://mocial.com/banner-image2.jpeg",
                        "https://mocial.com/banner-image3.jpeg"
                    ]
                }
            };
            return await result;
        }
    }
    async searchProduct(body) {
        let product = await this.productInterface.find().exec();
        if (body.search) {
            body.search = body.search.toLowerCase();
            product = product.filter(item => item.name.toLowerCase().indexOf(body.search) !== -1);
        }
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "sucessfully updated",
            "data": {
                "products": product,
            }
        };
        return await result;
    }
    async categoriesDetail(body) {
        let product = await this.productInterface.find().exec();
        let categorie = await this.productcategorieInterface.find().exec();
        product = product.filter(x => x.caregoryId === body.categoryId);
        categorie = categorie.filter(x => x.caregoryId === body.categoryId);
        let re = product;
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
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "sucessfully updated",
            "data": {
                "categoryId": body.categoryId,
                "products": cc
            }
        };
        return await result;
    }
    async madicineDetails(body) {
        let product = await this.productInterface.find().exec();
        let re = product;
        product = product.filter(x => x.productId === body.productId);
        product[0].productImage = JSON.parse(product[0].productImage);
        let productDeatils = {
            "_id": product[0]._id,
            "productId": product[0].productId,
            "productImage": JSON.parse(product[0].productImage),
            "categoryId": product[0].caregoryId,
            "name": product[0].name,
            "about": product[0].about,
            "price": product[0].price,
            "currency": product[0].currency,
            "offerPercentage": product[0].offerPerchtage,
            "offer": product[0].offer,
            "grandTotal": Math.floor(Number(product[0].grandTotal) - (Number(product[0].grandTotal) * (Number(product[0].offerPerchtage) / 100))),
            "topOffer": product[0].topOffer,
            "composition": product[0].composition,
            "use": product[0].use,
            "otherInformation": product[0].use
        };
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
        let deatils = {
            productDeatils: productDeatils,
            "recommended": cc,
            "faq": [{ "key": "What isLupisafe Hand sanitizer is from ?", "value": "Lupisafe Hand sanitizer is from" }],
            "customerCare": "The contents of this website are for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. Do not disregard professional medical advice or delay in seeking it because of something you have read on this website."
        };
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "product deatils",
            "data": deatils
        };
        return await result;
    }
    async myCarts(body) {
        let discount = 0;
        let user = await this.userInterface.find().exec();
        let userId = user.filter(key => key.accessToken === body.id);
        let cartsList = await this.cartInterface.find().exec();
        let product = await this.productInterface.find().exec();
        if (body.promoCode) {
            if (body.promoCode === 'ABCDE') {
                discount = 250;
                let couponList = await this.couponInterface.find().exec();
                console.log('++' + couponList);
            }
            else if (body.promoCode === 'FIRST100') {
                discount = 100;
            }
        }
        cartsList = cartsList.filter(x => x.userId === userId[0].userId.toString());
        console.log(cartsList);
        let com = [];
        let co;
        for (let i = 0; i < cartsList.length; i++) {
            co = product.filter(x => x.productId === cartsList[i].productId);
            co[0].grandTotal = Math.floor(Number(co[0].grandTotal) * Number(cartsList[i].qty));
            com.push({
                "data": cartsList[i]._id,
                "qty": cartsList[i].qty,
                "product": co[0]
            });
        }
        let paymentvalue = 0;
        let po = com;
        console.log(com);
        for (let i = 0; i < po.length; i++) {
            paymentvalue = paymentvalue + Number(po[i].product.grandTotal);
        }
        let deliveryCharge = 25;
        let result;
        if (com.length > 0) {
            if (discount === 0) {
                result = {
                    "responseCode": 200,
                    "error": false,
                    "responseMessage": "carts",
                    "data": {
                        "carts": com,
                        "paymentDetails": [
                            {
                                "paymentKey": "MRP Total",
                                "paymentValue": paymentvalue
                            },
                            {
                                "paymentKey": "Delivery Charges",
                                "paymentValue": "25.00"
                            },
                            {
                                "paymentKey": "Total Amount",
                                "paymentValue": paymentvalue - deliveryCharge - discount
                            }
                        ]
                    }
                };
            }
            else {
                result = {
                    "responseCode": 200,
                    "error": false,
                    "responseMessage": "promo code applied",
                    "data": {
                        "carts": com,
                        "paymentDetails": [
                            {
                                "paymentKey": "MRP Total",
                                "paymentValue": paymentvalue
                            },
                            {
                                "paymentKey": "Delivery Charges",
                                "paymentValue": "25.00"
                            },
                            {
                                "paymentKey": "Additional Discount",
                                "paymentValue": discount
                            },
                            {
                                "paymentKey": "Total Amount",
                                "paymentValue": paymentvalue - deliveryCharge - discount
                            }
                        ]
                    }
                };
            }
        }
        else {
            result = {
                "responseCode": 200,
                "error": false,
                "responseMessage": "carts ",
                "data": {
                    "carts": [],
                    "paymentDetails": []
                }
            };
        }
        return await result;
    }
    async addCarts(header, body) {
        let user = await this.userInterface.find().exec();
        let userId = user.filter(key => key.accessToken === header.id);
        const cart = new this.cartInterface(body);
        cart.userId = userId[0].userId.toString();
        return await cart.save().then((data) => {
            return {
                "responseCode": 200,
                "error": false,
                responseMessage: 'Sucessfully added cart',
                response: [],
            };
        });
    }
    async removecart(body) {
        var query = { '_id': body.cartId };
        this.cartInterface.deleteOne(query => {
        });
        const result1 = {
            "responseCode": 200,
            "error": false,
            responseMessage: 'Sucessfully cart deleted',
            response: [],
        };
        return result1;
    }
    async removePromoCode(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "promo code removed",
            "data": []
        };
        return await result;
    }
    async applyPromoCode(body) {
        let couponList = await this.couponInterface.find().exec();
        console.log('++' + couponList);
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "promo code applied",
            "data": couponList
        };
        return await result;
    }
    async paymentDetails(body) {
        let cartsList = await this.cartInterface.find().exec();
        let product = await this.productInterface.find().exec();
        cartsList = cartsList.filter(x => x.userId === body.userId);
        let com = [];
        console.log(cartsList);
        let co;
        for (let i = 0; i < cartsList.length; i++) {
            co = product.filter(x => x.productId === cartsList[i].productId);
            com.push({
                "data": cartsList[i]._id,
                "product": co[0]
            });
        }
        let paymentvalue = 0;
        let po = com;
        for (let i = 0; i < po.length; i++) {
            paymentvalue = paymentvalue + Number(po[i].product.grandTotal);
        }
        if (body.promoCode) {
            let couponList = await this.couponInterface.find().exec();
            console.log(couponList);
        }
        let deliveryCharge = 25;
        let discount = 92;
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "promo code applied",
            "data": {
                "paymentDetails": [
                    {
                        "paymentKey": "MRP Total",
                        "paymentValue": paymentvalue
                    },
                    {
                        "paymentKey": "Delivery Charges",
                        "paymentValue": "25.00"
                    },
                    {
                        "paymentKey": "Additional Discount",
                        "paymentValue": "-92.00"
                    },
                    {
                        "paymentKey": "Total Amount",
                        "paymentValue": paymentvalue - deliveryCharge - discount
                    }
                ]
            }
        };
        return await result;
    }
    async orderProduct(header, body) {
        const order = new this.orderInterface(body);
        const user = await this.userInterface.find().exec();
        console.log(user);
        console.log(header.accesstoken);
        const idCheck = user.filter(x => x.accessToken === header.id);
        console.log("________" + idCheck);
        order.userId = idCheck[0].userId;
        let dateTime = new Date();
        order.date = dateTime.toDateString();
        order.orderStatus = "1";
        return await order.save().then((data) => {
            console.log(data);
            return {
                "responseCode": 200,
                "error": false,
                responseMessage: 'Order sucessfully',
                response: data,
            };
        });
    }
    async productcategorie(body) {
        const order = new this.productcategorieInterface(body);
        let list = await this.productcategorieInterface.find().exec();
        order.categoryId = "cate0" + Math.floor(list.length + 1);
        return await order.save().then((data) => {
            console.log(data);
            return {
                "responseCode": 200,
                "error": false,
                responseMessage: 'Order sucessfully',
                response: data,
            };
        });
    }
    async productcategorieList() {
        let list = await this.productcategorieInterface.find().exec();
        return {
            "responseCode": 200,
            "error": false,
            responseMessage: 'Order sucessfully',
            response: list,
        };
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('product')),
    __param(1, mongoose_1.InjectModel('product_categorie')),
    __param(2, mongoose_1.InjectModel('cart')),
    __param(3, mongoose_1.InjectModel('promo_code')),
    __param(4, mongoose_1.InjectModel('order')),
    __param(5, mongoose_1.InjectModel('user')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map