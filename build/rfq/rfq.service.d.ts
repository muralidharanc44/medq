import { Model } from "mongoose";
import { UserInterface } from "../interface/user.interface";
import { RfqproductlistInterface } from "../interface/rfqproductlist.interface";
import { ProductInterface } from "../interface/product.interface";
import { RfqInterface } from "../interface/rfq.interface";
export declare class RfqService {
    private readonly userInterface;
    private readonly rfqproductlistInterface;
    private readonly productInterface;
    private readonly rfqInterface;
    constructor(userInterface: Model<UserInterface>, rfqproductlistInterface: Model<RfqproductlistInterface>, productInterface: Model<ProductInterface>, rfqInterface: Model<RfqInterface>);
    rfqproductList(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: any[];
    }>;
    rfqList(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: any[];
    }>;
    rfqChangeStatus(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: any[];
    }>;
    rfqProductUpload(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: any[];
    }>;
}
