import { Model } from "mongoose";
import { ProductInterface } from "../interface/product.interface";
import { ProductcategorieInterface } from "../interface/productcategorie.interface";
import { CartInterface } from "../interface/cart.interface";
import { CouponInterface } from "../interface/coupon.interface";
import { OrderInterface } from "../interface/order.interface";
import { UserInterface } from "../interface/user.interface";
export declare class ProductService {
    private readonly productInterface;
    private readonly productcategorieInterface;
    private readonly cartInterface;
    private readonly couponInterface;
    private readonly orderInterface;
    private readonly userInterface;
    constructor(productInterface: Model<ProductInterface>, productcategorieInterface: Model<ProductcategorieInterface>, cartInterface: Model<CartInterface>, couponInterface: Model<CouponInterface>, orderInterface: Model<OrderInterface>, userInterface: Model<UserInterface>);
    productsList(): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: {
            products: any[];
            product_count: number;
        };
    }>;
    deshboardProduct(): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            categories: ProductcategorieInterface[];
            topOffer: any[];
            bannerImg: string[];
        };
    }>;
    searchProduct(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            products: ProductInterface[];
        };
    }>;
    categoriesDetail(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            categoryId: any;
            products: any[];
        };
    }>;
    madicineDetails(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            productDeatils: {
                _id: any;
                productId: string;
                productImage: any;
                categoryId: string;
                name: string;
                about: string;
                price: string;
                currency: string;
                offerPercentage: string;
                offer: string;
                grandTotal: number;
                topOffer: string;
                composition: string;
                use: string;
                otherInformation: string;
            };
            recommended: any[];
            faq: {
                key: string;
                value: string;
            }[];
            customerCare: string;
        };
    }>;
    myCarts(body: any): Promise<any>;
    addCarts(header: any, body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: any[];
    }>;
    removecart(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: any[];
    }>;
    removePromoCode(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: any[];
    }>;
    applyPromoCode(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: CouponInterface[];
    }>;
    paymentDetails(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            paymentDetails: ({
                paymentKey: string;
                paymentValue: number;
            } | {
                paymentKey: string;
                paymentValue: string;
            })[];
        };
    }>;
    orderProduct(header: any, body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: OrderInterface;
    }>;
    productcategorie(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: ProductcategorieInterface;
    }>;
    productcategorieList(): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: ProductcategorieInterface[];
    }>;
}
