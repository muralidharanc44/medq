import {Body, Controller, Post, Req, UploadedFile, UseInterceptors} from '@nestjs/common';
import {RfqService} from "./rfq.service";
// import {FileInterceptor} from "@nestjs/platform-express";
// import {diskStorage} from "multer";

@Controller('rfq')
export class RfqController {

    constructor(private readonly rfqService: RfqService) {
    }

    // @Post('file')
    // @UseInterceptors(FileInterceptor('photo',{
    //     dest: "./upload"
    // }))
    // uploadFile(@UploadedFile() file) {
    //     console.log(file);
    // }
    // @Post('rfqUserApproval')
    // async rfqproductList(@Req() req) {
    //     const header = req.headers;
    //     console.log(header)
    //     return await this.rfqService.rfqproductList(header);
    // }

    @Post('rfqList')
    async rfqList(@Req() req) {
        const header = req.headers;
        console.log(header)
        return await this.rfqService.rfqList(header);
    }

    @Post('rfqChangeStatus')
    async rfqChangeStatus(@Req() req) {
        const header = req.headers;
        console.log(header)
        return await this.rfqService.rfqChangeStatus(header);
    }

    @Post('rfqProductUpload')
    async rfqProductUpload(@Req() req) {
        const header = req.headers;
        console.log(header)
        return await this.rfqService.rfqProductUpload(header);
    }



    // @Post('image')
    // @UseInterceptors(FileInterceptor('image'))



}
