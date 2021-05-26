import {Body, Controller, Get, Post, Req, Res, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ProductService} from "../product/product.service";
import {AdminPanelService} from "./admin-panel.service";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('admin-panel')
export class AdminPanelController {
    constructor(private readonly adminPanelService: AdminPanelService) {
    }

    @Get('deshboard')
    async deshboard() {
        return await this.adminPanelService.deshboard();
    }

    @Get('userlist')
    async userlist() {
        return await this.adminPanelService.userlist();
    }

    @Post('userStatusUpdate')
    async userStatusUpdate(@Body() body) {
        return await this.adminPanelService.userStatusUpdate(body);
    }

    // @Post('imageUpload')
    // async create(@Req() request, @Res() response) {
    //     try {
    //         await this.adminPanelService.fileupload(request, response);
    //     } catch (error) {
    //         return response
    //             .status(500)
    //             .json(`Failed to upload image file: ${error.message}`);
    //     }
    // }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async upload(@UploadedFile() file) {
        console.log(file)
        return await this.adminPanelService.upload(file);
    }

    @Get('categoriesList')
    async categoriesList() {
        return await this.adminPanelService.categoriesList();
    }

    @Post('addproduct')
    async addproduct(@Body() body) {
        return await this.adminPanelService.addproduct(body);
    }

    @Get('products')
    async productlist(@Body() body) {
        return await this.adminPanelService.productlist();
    }

    @Get('orders')
    async orders(@Body() body) {
        return await this.adminPanelService.orderslist();
    }

    @Get('rfqList')
    async rfqList(@Body() body) {
        return await this.adminPanelService.rfqList();
    }

    @Get('productRfqLiust')
    async productRfqLiust(@Body() body) {
        return await this.adminPanelService.productRfqLiust();
    }

    @Post('rfqListProduct')
    async rfqListProduct(@Body() body) {
        return await this.adminPanelService.productRfq(body);
    }
}
