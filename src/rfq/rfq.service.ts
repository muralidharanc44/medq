import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UserInterface} from "../interface/user.interface";
import {AddressInterface} from "../interface/address.interface";
import {InjectTwilio, TwilioClient} from "nestjs-twilio";
import {RfqproductlistInterface} from "../interface/rfqproductlist.interface";
import {ProductInterface} from "../interface/product.interface";
import {RfqInterface} from "../interface/rfq.interface";

@Injectable()
export class RfqService {

    constructor(
        @InjectModel('user')
        private readonly userInterface: Model<UserInterface>,
        @InjectModel('rfqproduct')
        private readonly rfqproductlistInterface: Model<RfqproductlistInterface>,
        @InjectModel('product')
        private readonly productInterface: Model<ProductInterface>,
        @InjectModel('rfq')
        private readonly rfqInterface: Model<RfqInterface>
    ) {
    }


    async rfqproductList(body: any) {
        console.log(body.id)
        const data = await this.userInterface.find().exec();
        const checkID = data.filter(x => x.accessToken === body.id);
        const userID = checkID[0].userId;
        const con = await this.rfqproductlistInterface.find().exec();
        const rfqIdCheck = con.filter(x => x.userId === "" + userID);
        console.log(rfqIdCheck);
        const products = rfqIdCheck[0].products;
        const product = JSON.parse(products)
        const data_product = await this.productInterface.find().exec();
        console.log("prod" + data_product);

        const kk = [];
        for (let i = 0; i < product.length; i++) {
            kk.push({
                'prductId': product[i].productId,
                'qty': product[i].qty,
                "status": "user approval",
                'products': data_product.filter(x => x.productId === product[i].productId)
            })
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

    async rfqList(body: any) {
        console.log(body.id)
        const data = await this.userInterface.find().exec();
        const checkID = data.filter(x => x.accessToken === body.id);
        const userID = checkID[0].userId;
        const con = await this.rfqInterface.find().exec();
        const rfqIdCheck = con.filter(x => x.userId === "" + userID);
        console.log(rfqIdCheck);
        let l = [];
        for (let i = 0; i < rfqIdCheck.length; i++) {
            l.push({
                "rfqId" : rfqIdCheck[i]._id,
                "user" : data.filter(x => x.userId === Number(rfqIdCheck[i].userId)),
                "image" : rfqIdCheck[i].imagePath,
                "status" : rfqIdCheck[i].status,
                "statusType" : rfqIdCheck[i].statusType,
            })
        }

        return await {
            "responseCode": 200,
            "error": false,
            responseMessage: 'RFQ Products',
            response: l,
        };
    }

    async rfqChangeStatus(body: any) {

        // var query = {'_id': body.rfqID};
        //
        // let schema = {
        //     status: body.statusType === "1" ? "User Approval" : body.statusType === "2" ? "Order Approval" : "Waiting for admin approval",
        //     statusType: body.statusType
        // }
        // return await this.rfqInterface.updateOne(query, schema, {upsert: true}, function (err, doc) {
        //     if (err) return {
        //         error: err
        //     };
        //     return 'Succesfully saved.';
        // });
        return await {
            "responseCode": 200,
            "error": false,
            responseMessage: 'Status Updated',
            response: [],
        };

    }

    async rfqProductUpload(body: any) {

        // var query = {'_id': body.rfqID};
        //
        // let schema = {
        //     status: body.statusType === "1" ? "User Approval" : body.statusType === "2" ? "Order Approval" : "Waiting for admin approval",
        //     statusType: body.statusType
        // }
        // return await this.rfqInterface.updateOne(query, schema, {upsert: true}, function (err, doc) {
        //     if (err) return {
        //         error: err
        //     };
        //     return 'Succesfully saved.';
        // });
        return await {
            "responseCode": 200,
            "error": false,
            responseMessage: 'Product Updated',
            response: [],
        };

    }

}
