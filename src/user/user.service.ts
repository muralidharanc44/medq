import {Injectable} from '@nestjs/common';
import {UserInterface} from '../interface/user.interface';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {InjectTwilio, TwilioClient} from "nestjs-twilio";

const TokenGenerator = require('uuid-token-generator');

@Injectable()
export class UserService {
    constructor(
        @InjectModel('user')
        private readonly userInterface: Model<UserInterface>,
        @InjectTwilio() private readonly client: TwilioClient
    ) {
    }

    async createUser(body) {
        const user = new this.userInterface(body);
        const data = await this.userInterface.find().exec();
        const tokgen = new TokenGenerator(); // Default is a 128-bit token encoded in base58
        user.access_token = tokgen.generate();
        user.userId = data.length + 1;
        console.log(user);
        const phoneCheck = data.filter(x => x.phone === user.phone);
        if (phoneCheck.length != 0) {
            return {
                responseCode: '0',
                responseMessage: 'phone number already there',
                response: [],
            };
        } else {
            return await user.save().then((data) => {
                let res = {
                    "userName": data.userName,
                    "userId": data.userId,
                    "phone": data.phone,
                    "password": data.password,
                    "email": data.password,
                    "pushNotificationToken": data.pushNotificationToken,
                    "deviceOs": data.deviceOs,
                    "deviceName": data.deviceName,
                    "deviceOsVersion": data.deviceOsVersion,
                    "deviceBrand": data.deviceBrand,
                    "buildVersion": data.buildVersion,
                    "accessToken": data.access_token,
                }
                return {
                    "responseCode": 200,
                    "error": false,
                    responseMessage: 'Regsiter sucessfully',
                    response: res,
                };
            });
        }

        // let result = {
        //     "responseCode": 200,
        //     "error": false,
        //     "responseMessage": "success",
        //     "data": {
        //         "userName": "murali",
        //         "userId": 5,
        //         "phone": 9793032727,
        //         "password": "Murali11@123",
        //         "pushNotificationToken": "abcdef",
        //         "deviceOs": "andriod",
        //         "deviceName": "oneplus",
        //         "deviceOsVersion": "1.1",
        //         "deviceBrand": "oneplus nord",
        //         "buildVersion": "v1.0",
        //         "accessToken": "VuijV8TFKC7ZfVTNyNURcK"
        //     }
        // }
        // return await result;
    }

    async loginUser(body) {
        const user = new this.userInterface(body);
        const data = await this.userInterface.find().exec();
        console.log(user);
        var value;
        value = data.filter(x => x.phone === user.phone);
        console.log(value)
        if (value.length === 0) {
            return {
                responseCode: '0',
                responseMessage: 'login creditional not there',
                response: [],
            };
        }
        if (value.length != 0) {
            let res = {
                "userName": value[0].userName,
                "userId": value[0].userId,
                "phone": value[0].phone,
                "password": value[0].password,
                "pushNotificationToken": value[0].pushNotificationToken,
                "deviceOs": value[0].deviceOs,
                "deviceName": value[0].deviceName,
                "deviceOsVersion": value[0].deviceOsVersion,
                "deviceBrand": value[0].deviceBrand,
                "buildVersion": value[0].buildVersion,
                "accessToken": value[0].access_token,
            }
            return {
                "responseCode": 200,
                "error": false,
                responseMessage: 'Login sucessfully',
                response: res
            };
        }

        // let result = {
        //     "responseCode": 200,
        //     "error": false,
        //     "responseMessage": "success",
        //     "data": {
        //         "userName": "murali",
        //         "userId": 5,
        //         "phone": 9793032727,
        //         "password": "Murali11@123",
        //         "pushNotificationToken": "abcdef",
        //         "deviceOs": "andriod",
        //         "deviceName": "oneplus",
        //         "deviceOsVersion": "1.1",
        //         "deviceBrand": "oneplus nord",
        //         "buildVersion": "v1.0",
        //         "accessToken": "VuijV8TFKC7ZfVTNyNURcK"
        //     }
        // }
        // return await result;
    }

    // twillosms gateways
    // https://www.npmjs.com/package/nestjs-twilio


    async sendSMS(body) {
        const user = new this.userInterface(body);
        const data = await this.userInterface.find().exec();
        var value;
        value = data.filter(x => x.phone === user.phone);
        value[0].otpCode = 1231
        var query = {'userId': value[0].userId};
        return await this.userInterface.updateOne(query, value[0], {upsert: true}, function (err, doc) {
            if (err) return {
                error: err
            };
            return 'Succesfully saved.';
        });


    }

    async socialloginUser(body) {
        // const user = new this.userInterface(body);
        // const data = await this.userInterface.find().exec();
        // const tokgen = new TokenGenerator(); // Default is a 128-bit token encoded in base58
        // user.access_token = tokgen.generate();
        // user.userId = data.length + 1;
        // console.log(user);
        // const phoneCheck = data.filter(x => x.phone === user.phone);
        // if (phoneCheck.length != 0) {
        //     return {
        //         responseCode: '0',
        //         responseMessage: 'phone number already there',
        //         response: [],
        //     };
        // } else {
        //     return await user.save().then((data) => {
        //         let res = {
        //             "userName" : data.userName,
        //             "userId" : data.userId,
        //             "socialToken" : data.socialToken,
        //             "phone": data.phone,
        //             "password": data.password,
        //             "pushNotificationToken": data.pushNotificationToken,
        //             "deviceOs": data.deviceOs,
        //             "deviceName": data.deviceName,
        //             "deviceOsVersion": data.deviceOsVersion,
        //             "deviceBrand": data.deviceBrand,
        //             "buildVersion": data.buildVersion,
        //             "accessToken": data.access_token,
        //             "loginType" : data.loginType
        //         }
        //         return {
        //             "responseCode": 200,
        //             "error" : false,
        //             responseMessage: 'Regsiter sucessfully',
        //             response: res,
        //         };
        //     });
        // }


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
        }
        return await result;
    }

    async changePassword(body) {
        // var query = {'userId': body.userId};
        // return await this.userInterface.updateOne(query, body, {upsert: true}, function (err, doc) {
        //     if (err) return {
        //         error: err
        //     };
        //     return {
        //         "responseCode": 200,
        //         "error" : false,
        //         responseMessage: 'Password Updated sucessfully',
        //         response: [],
        //     };
        // });


        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "New Password Sucessfully Updated",
            "data": []
        }
        return await result;

    }


    async usersList() {
        const data = await this.userInterface.find().exec();
        return {
            responseCode: '1',
            responseMessage: 'success',
            response: {
                'users': data,
                users_count: data.length
            },
        };
    }

    async userUpdate(body, user_id) {
        console.log(user_id)
        var query = {'user_id': user_id};
        return this.userInterface.updateOne(query, body, {upsert: true}, function (err, doc) {
            if (err) return {
                error: err
            };
            return 'Succesfully saved.';
        });

    }

    async forgotPassword(body) {

        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "sent otp",
            "data": []
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
                "data": []
            }
        } else {
            result = {
                "responseCode": 404,
                "error": true,
                "responseMessage": "invalid otp",
                "data": []
            }
        }
        return await result;

    }

    async deshboardProduct(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "sucessfully updated password",
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
                        "caregoryId": "1",
                        "categoryName": "Pharmacy",
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
        }
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

        }
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


        }
        return await result;
    }

    async removePromoCode(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "promo code removed",
            "data": []
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
        return await result;
    }

    async listAddress(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "cart removed",
            "data": [
                {
                    "locationId": "1",
                    "address": "mklnkln iohkl",
                    "landmark": "school",
                    "city": "salem",
                    "state": "tamil nadu",
                    "pincode": "63609",
                    "defalutAddress": 1,
                    "mobileNo": "97903227272"
                },
                {
                    "locationId": "2",
                    "address": "mklnkln iohkl",
                    "landmark": "school",
                    "city": "salem",
                    "defalutAddress": 0,
                    "state": "tamil nadu",
                    "pincode": "63609",
                    "mobileNo": "97903227272"
                }
            ]
        }
        return await result;
    }

    async makeAddressPrimary(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "Defaukt loc updated",
            "data": [
                {
                    "locationId": "1",
                    "address": "mklnkln iohkl",
                    "landmark": "school",
                    "city": "salem",
                    "state": "tamil nadu",
                    "pincode": "63609",
                    "defalutAddress": 0,
                    "mobileNo": "97903227272"
                },
                {
                    "locationId": "2",
                    "address": "mklnkln iohkl",
                    "landmark": "school",
                    "city": "salem",
                    "defalutAddress": 1,
                    "state": "tamil nadu",
                    "pincode": "63609",
                    "mobileNo": "97903227272"
                }
            ]
        }
        return await result;
    }


    async removeAddress(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "address removed",
            "data": [
                {
                    "locationId": "1",
                    "address": "mklnkln iohkl",
                    "landmark": "school",
                    "defalutAddress": 1,
                    "city": "salem",
                    "state": "tamil nadu",
                    "pincode": "63609",
                    "mobileNo": "97903227272"
                }
            ]
        }
        return await result;
    }

    async addAddress(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "Address added",
            "data": [
                {
                    "locationId": "1",
                    "address": "mklnkln iohkl",
                    "landmark": "school",
                    "city": "salem",
                    "state": "tamil nadu",
                    "pincode": "63609",
                    "defalutAddress": 1,
                    "mobileNo": "97903227272"
                },
                {
                    "locationId": "2",
                    "address": "mklnkln iohkl",
                    "landmark": "school",
                    "city": "salem",
                    "state": "tamil nadu",
                    "pincode": "63609",
                    "defalutAddress": 0,
                    "mobileNo": "97903227272"
                }
            ]
        }
        return await result;
    }

    async UpdateAddress(body) {
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "Address updated",
            "data": [
                {
                    "locationId": "2",
                    "address": "mklnkln iohkl",
                    "landmark": "school",
                    "city": "salem",
                    "state": "tamil nadu",
                    "pincode": "63609",
                    "defalutAddress": 1,
                    "mobileNo": "97903227272"
                },
            ]
        }
        return await result;
    }



}
