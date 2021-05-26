import { ProductService } from "./product.service";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    products(): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: {
            products: any[];
            product_count: number;
        };
    }>;
    deshbordProducts(): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            categories: import("../interface/productcategorie.interface").ProductcategorieInterface[];
            topOffer: any[];
            bannerImg: string[];
        };
    }>;
    searchProduct(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            products: import("../interface/product.interface").ProductInterface[];
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
        data: import("../interface/coupon.interface").CouponInterface[];
    }>;
    myCarts(req: any): Promise<any>;
    addCarts(req: any, body: any): Promise<{
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
    orderProduct(req: any, body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: import("../interface/order.interface").OrderInterface;
    }>;
    productcategorie(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: import("../interface/productcategorie.interface").ProductcategorieInterface;
    }>;
    productcategorieList(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: import("../interface/productcategorie.interface").ProductcategorieInterface[];
    }>;
}
