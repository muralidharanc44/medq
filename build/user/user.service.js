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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const nestjs_twilio_1 = require("nestjs-twilio");
const TokenGenerator = require('uuid-token-generator');
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');
let UserService = class UserService {
    constructor(userInterface, addressInterface, client) {
        this.userInterface = userInterface;
        this.addressInterface = addressInterface;
        this.client = client;
    }
    async adminSignup(body) {
    }
    async createUser(body) {
        const user = new this.userInterface(body);
        const data = await this.userInterface.find().exec();
        const tokgen = new TokenGenerator();
        user.accessToken = tokgen.generate();
        user.userId = data.length + 1;
        console.log(user);
        const phoneCheck = data.filter(x => x.phone === user.phone);
        if (phoneCheck.length != 0) {
            return {
                responseCode: 400,
                "error": true,
                responseMessage: 'phone number already exist',
                response: [],
            };
        }
        else {
            const medq_token = jwt.sign({ userId: user._id }, "sdfsdfsdfsfsfsdfsdfsdfsdfsfd", { expiresIn: '7d' });
            user.accessToken = medq_token;
            user.status = 1;
            return await user.save().then((data) => {
                let res = {
                    "userName": data.userName,
                    "userId": data.userId,
                    "phone": data.phone,
                    "password": data.password,
                    "email": data.email,
                    "pushNotificationToken": data.pushNotificationToken,
                    "deviceOs": data.deviceOs,
                    "deviceName": data.deviceName,
                    "deviceOsVersion": data.deviceOsVersion,
                    "deviceBrand": data.deviceBrand,
                    "buildVersion": data.buildVersion,
                    "accessToken": medq_token,
                    "jwtToken": medq_token
                };
                return {
                    "responseCode": 200,
                    "error": false,
                    responseMessage: 'Regsiter sucessfully',
                    response: res,
                };
            });
        }
    }
    async loginUser(body) {
        const user = new this.userInterface(body);
        const data = await this.userInterface.find().exec();
        console.log(user);
        var value;
        value = data.filter(x => x.phone === user.phone);
        console.log(value);
        if (value.length === 0) {
            return {
                responseCode: 400,
                error: true,
                responseMessage: 'Phone Number is not exist',
                response: [],
            };
        }
        if (body.password != value[0].password) {
            return {
                responseCode: 400,
                error: true,
                responseMessage: 'Wrong password, Try Again!!',
                response: [],
            };
        }
        if (value.length != 0) {
            value[0].accessToken = jwt.sign({ userId: user._id }, "sdfsdfsdfsfsfsdfsdfsdfsdfsfd", { expiresIn: '7d' });
            var query = { 'userId': value[0].userId };
            console.log(value[0].accessToken);
            await this.userInterface.updateOne(query, value[0], { upsert: true }, function (err, doc) {
                if (err)
                    return {
                        error: err
                    };
            });
            let res = {
                "userName": value[0].userName,
                "userId": value[0].userId,
                "accessToken": value[0].accessToken,
                "phone": value[0].phone,
                "email": value[0].email,
                "password": value[0].password,
                "pushNotificationToken": value[0].pushNotificationToken,
                "deviceOs": value[0].deviceOs,
                "deviceName": value[0].deviceName,
                "deviceOsVersion": value[0].deviceOsVersion,
                "deviceBrand": value[0].deviceBrand,
                "buildVersion": value[0].buildVersion,
            };
            return {
                "responseCode": 200,
                "error": false,
                responseMessage: 'Login sucessfully',
                response: res
            };
        }
    }
    async sendSMS(body) {
        const user = new this.userInterface(body);
        const data = await this.userInterface.find().exec();
        var value;
        value = data.filter(x => x.phone === user.phone);
        value[0].otpCode = 1231;
        var query = { 'userId': value[0].userId };
        return await this.userInterface.updateOne(query, value[0], { upsert: true }, function (err, doc) {
            if (err)
                return {
                    error: err
                };
            return 'Succesfully saved.';
        });
    }
    async socialloginUser(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "success",
            "data": {
                "userName": "murali",
                "userId": 5,
                "socialIdToken": "dfdsg",
                "phone": 9793032727,
                "password": "Murali11@123",
                "pushNotificationToken": "abcdef",
                "deviceOs": "andriod",
                "deviceName": "oneplus",
                "deviceOsVersion": "1.1",
                "deviceBrand": "oneplus nord",
                "buildVersion": "v1.0",
                "accessToken": "VuijV8TFKC7ZfVTNyNURcK"
            }
        };
        return await result;
    }
    async changePassword(body) {
        if (body.secretKey != "abcdefg") {
            return {
                "responseCode": 200,
                "error": true,
                responseMessage: 'secretKey wrong',
                response: [],
            };
        }
        const data = await this.userInterface.find().exec();
        const phoneCheck = data.filter(x => x.phone.toString() === body.phone);
        if (phoneCheck.length === 0) {
            return {
                "responseCode": 200,
                "error": true,
                "responseMessage": "phone number not exist",
                "data": []
            };
        }
        else {
            var query = { 'phone': body.phone };
            this.userInterface.updateOne(query, body, { upsert: true }, function (err, doc) {
                if (err)
                    return {
                        error: err
                    };
                return {
                    "responseCode": 200,
                    "error": false,
                    responseMessage: 'Password Updated sucessfully',
                    response: [],
                };
            });
            return {
                "responseCode": 200,
                "error": false,
                responseMessage: 'Password Updated sucessfully',
                response: [],
            };
        }
    }
    async usersList() {
        const data = await this.userInterface.find().exec();
        return {
            responseCode: 200,
            responseMessage: 'success',
            response: {
                'users': data,
                users_count: data.length
            },
        };
    }
    async userUpdate(body, user_id) {
        console.log(user_id);
        var query = { 'user_id': user_id };
        return this.userInterface.updateOne(query, body, { upsert: true }, function (err, doc) {
            if (err)
                return {
                    error: err
                };
            return 'Succesfully saved.';
        });
    }
    async forgotPassword(body) {
        const data = await this.userInterface.find().exec();
        const phoneCheck = data.filter(x => x.phone.toString() == body.phone);
        var result = {};
        if (phoneCheck.length === 0) {
            result = {
                "responseCode": 200,
                "error": true,
                "responseMessage": "phone number not exist",
                "data": []
            };
        }
        else {
            result = {
                "responseCode": 200,
                "error": false,
                "responseMessage": "sent otp successfully",
                "data": [
                    { "otp": "1234" }
                ]
            };
        }
        return await result;
    }
    async verifyOtp(body) {
        const user = new this.userInterface(body);
        let result;
        if (user.otpCode === 1234) {
            result = {
                "responseCode": 200,
                "error": false,
                "responseMessage": "correct otp",
                "data": {
                    "secretKey": "abcdefg",
                }
            };
        }
        else {
            result = {
                "responseCode": 404,
                "error": true,
                "responseMessage": "invalid otp",
                "data": []
            };
        }
        return await result;
    }
    async deshboardProduct(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "sucessfully updated",
            "data": {
                "location": [
                    {
                        "location_id": "1",
                        "location": "600032 Chennai"
                    },
                    {
                        "location_id": "2",
                        "location": "600032 Chennai"
                    },
                    {
                        "location_id": "3",
                        "location": "600032 Chennai"
                    }
                ],
                "categories": [
                    {
                        "caregoryId": "1",
                        "categoryName": "Pharmacy",
                        "img": "imagePath"
                    },
                    {
                        "caregoryId": "2",
                        "categoryName": "Baby Needs",
                        "img": "imagePath"
                    },
                    {
                        "caregoryId": "3",
                        "categoryName": "Personal Care",
                        "img": "imagePath"
                    },
                    {
                        "caregoryId": "4",
                        "categoryName": "Health & Nutrition",
                        "img": "imagePath"
                    }
                ],
                "topOffer": [
                    {
                        "productImg": "path",
                        "productId": "1",
                        "name": "Fingertip Pulse Oximeter",
                        "price": "408",
                        "currency": "inr",
                        "offerPerchtage": 10,
                        "offer": "10% off",
                        "grandTotal": "408"
                    },
                    {
                        "productImg": "path",
                        "productId": "2",
                        "name": "Fingertip Pulse Oximeter",
                        "price": "408",
                        "currency": "inr",
                        "offerPerchtage": 10,
                        "offer": "10% off",
                        "grandTotal": "408"
                    },
                    {
                        "productImg": "path",
                        "productId": "3",
                        "name": "Fingertip Pulse Oximeter",
                        "price": "408",
                        "currency": "inr",
                        "offerPerchtage": 10,
                        "offer": "10% off",
                        "grandTotal": "408"
                    }
                ],
                "bannerImg": [
                    "imagepath1",
                    "imagepath2",
                    "imagepath3"
                ]
            }
        };
        return await result;
    }
    async searchProduct(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "sucessfully updated password",
            "data": {
                "products": [
                    {
                        "productImg": "path",
                        "name": "Fingertip Pulse Oximeter",
                        "price": "408",
                        "currency": "inr",
                        "offerPerchtage": 10,
                        "offer": "10% off",
                        "grandTotal": "408"
                    },
                    {
                        "productImg": "path",
                        "name": "Fingertip Pulse Oximeter",
                        "price": "408",
                        "currency": "inr",
                        "offerPerchtage": 10,
                        "offer": "10% off",
                        "grandTotal": "408"
                    },
                    {
                        "productImg": "path",
                        "name": "Fingertip Pulse Oximeter",
                        "price": "408",
                        "currency": "inr",
                        "offerPerchtage": 10,
                        "offer": "10% off",
                        "grandTotal": "408"
                    }
                ]
            }
        };
        return await result;
    }
    async subCategories(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "sucessfully updated password",
            "data": {
                "caregoryId": "1",
                "categoryName": "Pharmacy",
                "img": "imagePath",
                "products": [
                    {
                        "productImg": "path",
                        "productId": "1",
                        "name": "Fingertip Pulse Oximeter",
                        "price": "408",
                        "currency": "inr",
                        "offerPerchtage": 10,
                        "offer": "10% off",
                        "grandTotal": "408"
                    },
                    {
                        "productImg": "path",
                        "productId": "2",
                        "name": "Fingertip Pulse Oximeter",
                        "price": "408",
                        "currency": "inr",
                        "offerPerchtage": 10,
                        "offer": "10% off",
                        "grandTotal": "408"
                    },
                    {
                        "productImg": "path",
                        "productId": "3",
                        "name": "Fingertip Pulse Oximeter",
                        "price": "408",
                        "currency": "inr",
                        "offerPerchtage": 10,
                        "offer": "10% off",
                        "grandTotal": "408"
                    }
                ]
            }
        };
        return await result;
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
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "promo code applied",
            "data": {
                "accessToken": "abcd",
                "userId": "8",
                "productId": "1",
                "promoCode": "abcg"
            }
        };
        return await result;
    }
    async myCarts(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "promo code applied",
            "data": {
                "carts": [
                    {
                        "productImg": "path",
                        "productId": "1",
                        "name": "Fingertip Pulse Oximeter",
                        "price": "408",
                        "currency": "inr",
                        "offerPerchtage": 10,
                        "offer": "10% off",
                        "grandTotal": "408"
                    },
                    {
                        "productImg": "path",
                        "productId": "1",
                        "name": "Fingertip Pulse Oximeter",
                        "price": "408",
                        "currency": "inr",
                        "offerPerchtage": 10,
                        "offer": "10% off",
                        "grandTotal": "408"
                    }
                ],
                "paymentDetails": [
                    {
                        "paymentKey": "MRP Total",
                        "paymentValue": "370.00"
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
                        "paymentValue": "302.50"
                    }
                ]
            }
        };
        return await result;
    }
    async addCarts(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "carts updated",
            "data": {
                "carts": [
                    {
                        "productImg": "path",
                        "productId": "1",
                        "name": "Fingertip Pulse Oximeter",
                        "price": "408",
                        "currency": "inr",
                        "offerPerchtage": 10,
                        "offer": "10% off",
                        "grandTotal": "408"
                    },
                    {
                        "productImg": "path",
                        "productId": "1",
                        "name": "Fingertip Pulse Oximeter",
                        "price": "408",
                        "currency": "inr",
                        "offerPerchtage": 10,
                        "offer": "10% off",
                        "grandTotal": "408"
                    }
                ]
            }
        };
        return await result;
    }
    async removecart(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "cart removed",
            "data": {
                "carts": [
                    {
                        "productImg": "path",
                        "productId": "2",
                        "name": "Fingertip Pulse Oximeter",
                        "price": "408",
                        "currency": "inr",
                        "offerPerchtage": 10,
                        "offer": "10% off",
                        "grandTotal": "408"
                    }
                ]
            }
        };
        return await result;
    }
    async madicineDetails(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "cart removed",
            "data": {
                "productImg": "path",
                "productId": "2",
                "name": "Fingertip Pulse Oximeter",
                "price": "408",
                "currency": "inr",
                "offerPerchtage": 10,
                "offer": "10% off",
                "grandTotal": "408",
                "about": "Lupisafe Hand sanitizer is from the house of Lupin, a trusted brand of doctors. It contain 70% alcohal, whih is recommended by WHO against many know germs and viruses.",
                "Composition": "Vitamin-C"
            }
        };
        return await result;
    }
    async paymentDetails(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "sucessfully updated password",
            "data": {
                "paymentDetails": [
                    {
                        "paymentKey": "MRP Total",
                        "paymentValue": "370.00"
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
                        "paymentValue": "302.50"
                    }
                ]
            }
        };
        return await result;
    }
    async listCard(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "sucessfully updatedlisted card",
            "data": {
                "card": [
                    {
                        "cardId": "1",
                        "name": "test",
                        "cardType": "Visa",
                        "cardNumber": "xxxxxxxxxxxxxxxxxx",
                        "validDate": "xxx",
                        "cvv": "xxx"
                    },
                    {
                        "cardId": "3",
                        "name": "test",
                        "cardType": "Visa",
                        "cardNumber": "xxxxxxxxxxxxxxxxxx",
                        "validDate": "xxx",
                        "cvv": "xxx"
                    },
                    {
                        "cardId": "2",
                        "name": "test",
                        "cardType": "Visa",
                        "cardNumber": "xxxxxxxxxxxxxxxxxx",
                        "validDate": "xxx",
                        "cvv": "xxx"
                    }
                ]
            }
        };
        return await result;
    }
    async addCard(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "sucessfully updatedlisted card",
            "data": {
                "card": [
                    {
                        "cardId": "1",
                        "name": "test",
                        "cardType": "Visa",
                        "cardNumber": "xxxxxxxxxxxxxxxxxx",
                        "validDate": "xxx",
                        "cvv": "xxx"
                    }
                ]
            }
        };
        return await result;
    }
    async removeCard(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "sucessfully removed card",
            "data": {
                "card": [
                    {
                        "cardId": "3",
                        "name": "test",
                        "cardType": "Visa",
                        "cardNumber": "xxxxxxxxxxxxxxxxxx",
                        "validDate": "xxx",
                        "cvv": "xxx"
                    },
                    {
                        "cardId": "2",
                        "name": "test",
                        "cardType": "Visa",
                        "cardNumber": "xxxxxxxxxxxxxxxxxx",
                        "validDate": "xxx",
                        "cvv": "xxx"
                    }
                ]
            }
        };
        return await result;
    }
    async digitalwallets() {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "sucessfully",
            "data": [
                {
                    "digiId": "1",
                    "digiName": "paytm",
                    "img": "payth",
                    "paytmAPI": "path"
                },
                {
                    "digiId": "2",
                    "digiName": "phonepay",
                    "img": "path",
                    "paytmAPI": "path"
                },
                {
                    "digiId": "3",
                    "digiName": "amazon pay",
                    "img": "payth",
                    "paytmAPI": "path"
                }
            ]
        };
        return await result;
    }
    async listinternetbanking() {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "sucessfully",
            "data": [
                {
                    "bankId": "1",
                    "name": "icici",
                    "img": "payth",
                    "apipath": "path"
                },
                {
                    "bankId": "2",
                    "name": "hdfc",
                    "img": "payth",
                    "apipath": "path"
                },
                {
                    "bankId": "3",
                    "name": "sbi",
                    "img": "payth",
                    "apipath": "path"
                }
            ]
        };
        return await result;
    }
    async listAddress(body) {
        console.log(body);
        const user = await this.userInterface.find().exec();
        const idCheck = user.filter(x => x.accessToken === body.id);
        console.log(idCheck[0]);
        const data = await this.addressInterface.find().exec();
        const address = data.filter(x => x.userId === idCheck[0].userId.toString());
        return {
            responseCode: 200,
            responseMessage: 'success',
            error: 'false',
            response: {
                'address': address,
                address_count: address.length
            },
        };
    }
    async addAddress(header, body) {
        const user = await this.userInterface.find().exec();
        const idCheck = user.filter(x => x.accessToken === header.id);
        body.userId = idCheck[0].userId;
        const address = new this.addressInterface(body);
        return await address.save().then((data) => {
            return {
                "responseCode": 200,
                "error": false,
                responseMessage: 'Address added sucessfully',
                response: data,
            };
        });
    }
    async makeAddressPrimary(body) {
        var query = { '_id': body.addressId };
        console.log(query);
        console.log(body);
        let aa = {
            "primaryAddress": body.primaryAddress
        };
        this.addressInterface.updateOne(query, aa, { upsert: true }, function (err, doc) {
            if (err)
                return {
                    error: err,
                };
        });
        return {
            "responseCode": 200,
            "error": false,
            responseMessage: 'Address added primary',
            response: aa,
        };
    }
    async removeAddress(body) {
        var query = { '_id': body.id };
        this.addressInterface.deleteOne(query => {
        });
        return {
            "responseCode": 200,
            "error": false,
            "responseMessage": "address removed",
            "data": []
        };
    }
    async UpdateAddress(body) {
        var query = { '_id': body.addressId };
        console.log(query);
        console.log(body);
        let aa = {
            "address": body.address,
            "ContactName": body.ContactName,
            "landmark": body.landmark,
            "city": body.city,
            "state": body.state,
            "pincode": body.pincode,
            "country": body.country,
            "primaryAddress": body.primaryAddress,
            "mobileNumber": body.mobileNumber
        };
        this.addressInterface.updateOne(query, aa, { upsert: true }, function (err, doc) {
            if (err)
                return {
                    error: err,
                };
        });
        return {
            "responseCode": 200,
            "error": false,
            responseMessage: 'Address updated sucessfully',
            response: aa,
        };
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('user')),
    __param(1, mongoose_2.InjectModel('address')),
    __param(2, nestjs_twilio_1.InjectTwilio()),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model, Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map