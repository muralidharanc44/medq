import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {InjectTwilio, TwilioClient} from "nestjs-twilio";
import {ProductInterface} from "../interface/product.interface";
import {ProductcategorieInterface} from "../interface/productcategorie.interface";
import {CartInterface} from "../interface/cart.interface";
import {CouponInterface} from "../interface/coupon.interface";
import {OrderInterface} from "../interface/order.interface";
import {UserInterface} from "../interface/user.interface";

@Injectable()
export class ProductService {
    constructor(
        @InjectModel('product')
        private readonly productInterface: Model<ProductInterface>,
        @InjectModel('product_categorie')
        private readonly productcategorieInterface: Model<ProductcategorieInterface>,
        @InjectModel('cart')
        private readonly cartInterface: Model<CartInterface>,
        @InjectModel('promo_code')
        private readonly couponInterface: Model<CouponInterface>,
        @InjectModel('order')
        private readonly orderInterface: Model<OrderInterface>,
        @InjectModel('user')
        private readonly userInterface: Model<UserInterface>,
    ) {
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

            })
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

            })
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
            }
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
        }
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

            })
        }
        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "sucessfully updated",
            "data": {
                "categoryId": body.categoryId,
                "products": cc
            }
        }
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
        }
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
            })
        }

        let deatils = {
            productDeatils: productDeatils,
            "recommended": cc,
            "faq": [{"key": "What isLupisafe Hand sanitizer is from ?", "value": "Lupisafe Hand sanitizer is from"}],
            "customerCare": "The contents of this website are for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. Do not disregard professional medical advice or delay in seeking it because of something you have read on this website."
        }

        let result = {
            "responseCode": 200,
            "error": false,
            "responseMessage": "product deatils",
            "data": deatils
        }
        return await result;
    }

    async myCarts(body) {
        let discount = 0;
        let cartsList = await this.cartInterface.find().exec();
        let product = await this.productInterface.find().exec();
        if (body.promoCode === 'ABCDE') {
            discount = 250
            let couponList = await this.couponInterface.find().exec();
            console.log('++' + couponList);
        } else if (body.promoCode === 'FIRST100') {
            discount = 100
        }
        cartsList = cartsList.filter(x => x.userId === body.userId);

        let com = [];
        let co;
        for (let i = 0; i < cartsList.length; i++) {
            co = product.filter(x => x.productId === cartsList[i].productId);
            com.push({
                "data": cartsList[i]._id,
                "product": co[0]
            })
        }

        let paymentvalue: number = 0;
        //

        let po = com;
        for (let i = 0; i < po.length; i++) {
            paymentvalue = paymentvalue + Number(po[i].product.grandTotal);
        }


        let deliveryCharge = 25;
        let result
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
                }
            } else {
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
                }
            }
        } else {
            result = {
                "responseCode": 200,
                "error": false,
                "responseMessage": "carts ",
                "data": {
                    "carts": [],
                    "paymentDetails": []
                }
            }
        }
        return await result;
    }


    async addCarts(body) {
        const cart = new this.cartInterface(body);
        return await cart.save().then((data) => {
            let cartsList = this.cartInterface.find().exec();
            return {
                "responseCode": 200,
                "error": false,
                responseMessage: 'Sucessfully added cart',
                response: cartsList,
            };
        });
        // let result = {
        //     "responseCode": 200,
        //     "error": false,
        //     "responseMessage": "carts updated",
        //     "data": {
        //         "carts": [
        //             {
        //                 "productImg": "path",
        //                 "productId": "1",
        //                 "name": "Fingertip Pulse Oximeter",
        //                 "price": "408",
        //                 "currency": "inr",
        //                 "offerPerchtage": 10,
        //                 "offer": "10% off",
        //                 "grandTotal": "408"
        //             },
        //             {
        //                 "productImg": "path",
        //                 "productId": "1",
        //                 "name": "Fingertip Pulse Oximeter",
        //                 "price": "408",
        //                 "currency": "inr",
        //                 "offerPerchtage": 10,
        //                 "offer": "10% off",
        //                 "grandTotal": "408"
        //             }
        //         ]
        //     }
        // }
        // return await result;
    }


    async removecart(body) {

        var query = {'_id': body.cartId};
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
        }
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
        }
        return await result;
    }


    async paymentDetails(body) {
        let cartsList = await this.cartInterface.find().exec();
        let product = await this.productInterface.find().exec();
        cartsList = cartsList.filter(x => x.userId === body.userId);

        let com = [];
        console.log(cartsList)
        let co;
        for (let i = 0; i < cartsList.length; i++) {
            co = product.filter(x => x.productId === cartsList[i].productId);
            com.push({
                "data": cartsList[i]._id,
                "product": co[0]
            })
        }

        let paymentvalue: number = 0;
        //

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
        }
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
        let dateTime = new Date()
        order.date = dateTime.toDateString();
        order.orderStatus = "1";
        return await order.save().then((data) => {
            console.log(data)
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
            console.log(data)
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

}
