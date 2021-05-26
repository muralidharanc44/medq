import { RfqService } from "./rfq.service";
export declare class RfqController {
    private readonly rfqService;
    constructor(rfqService: RfqService);
    rfqList(req: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: any[];
    }>;
    rfqChangeStatus(req: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: any[];
    }>;
    rfqProductUpload(req: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: any[];
    }>;
}
