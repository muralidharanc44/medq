import { Model } from "mongoose";
import { ProductInterface } from "../interface/product.interface";
import { ProductcategorieInterface } from "../interface/productcategorie.interface";
import { CartInterface } from "../interface/cart.interface";
import { CouponInterface } from "../interface/coupon.interface";
import { OrderInterface } from "../interface/order.interface";
import { UserInterface } from "../interface/user.interface";
import { S3 } from 'aws-sdk';
import { AddressInterface } from "../interface/address.interface";
import { RfqInterface } from "../interface/rfq.interface";
import { RfqproductlistInterface } from "../interface/rfqproductlist.interface";
export declare class AdminPanelService {
    private readonly productInterface;
    private readonly productcategorieInterface;
    private readonly cartInterface;
    private readonly couponInterface;
    private readonly orderInterface;
    private readonly userInterface;
    private readonly addressInterface;
    private readonly rfqInterface;
    private readonly rfqproductlistInterface;
    constructor(productInterface: Model<ProductInterface>, productcategorieInterface: Model<ProductcategorieInterface>, cartInterface: Model<CartInterface>, couponInterface: Model<CouponInterface>, orderInterface: Model<OrderInterface>, userInterface: Model<UserInterface>, addressInterface: Model<AddressInterface>, rfqInterface: Model<RfqInterface>, rfqproductlistInterface: Model<RfqproductlistInterface>);
    deshboard(): Promise<{
        productCount: number;
        userCount: number;
        orderCount: number;
    }>;
    userlist(): Promise<any[]>;
    userStatusUpdate(body: any): Promise<{
        ok: number;
        n: number;
        nModified: number;
    }>;
    upload(file: any): Promise<{
        location: string;
    }>;
    uploadS3(file: any, bucket: any, name: any): Promise<S3.ManagedUpload>;
    getS3(): S3;
    categoriesList(): Promise<{
        data: ProductcategorieInterface[];
    }>;
    orderslist(): Promise<any[]>;
    addproduct(body: any): Promise<ProductInterface>;
    productlist(): Promise<any[]>;
    rfqList(): Promise<any[]>;
    productRfq(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: any[];
    }>;
    productRfqLiust(): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: RfqproductlistInterface[];
    }>;
}
