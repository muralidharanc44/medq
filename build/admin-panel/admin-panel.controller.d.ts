import { AdminPanelService } from "./admin-panel.service";
export declare class AdminPanelController {
    private readonly adminPanelService;
    constructor(adminPanelService: AdminPanelService);
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
    categoriesList(): Promise<{
        data: import("../interface/productcategorie.interface").ProductcategorieInterface[];
    }>;
    addproduct(body: any): Promise<import("../interface/product.interface").ProductInterface>;
    productlist(body: any): Promise<any[]>;
    orders(body: any): Promise<any[]>;
    rfqList(body: any): Promise<any[]>;
    productRfqLiust(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: import("../interface/rfqproductlist.interface").RfqproductlistInterface[];
    }>;
    rfqListProduct(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: any[];
    }>;
}
