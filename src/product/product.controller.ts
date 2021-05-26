import {Body, Controller, Get, Post, Req} from '@nestjs/common';
import {ProductService} from "./product.service";

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {
    }

    @Get('')
    async products() {
        return await this.productService.productsList();
    }

    @Get('deshbordProducts')
    async deshbordProducts() {
        return await this.productService.deshboardProduct();
    }

    @Post('searchProduct')
    async searchProduct(@Body() body) {
        return await this.productService.searchProduct(body);
    }

    @Post('categoriesDetail')
    async categoriesDetail(@Body() body) {
        return await this.productService.categoriesDetail(body);
    }

    @Post('removePromoCode')
    async removePromoCode(@Body() body) {
        return await this.productService.removePromoCode(body);
    }

    @Post('applyPromoCode')
    async applyPromoCode(@Body() body) {
        return await this.productService.applyPromoCode(body);
    }

    @Post('myCarts')
    async myCarts(@Body() body) {
        return await this.productService.myCarts(body);
    }

    @Post('addCart')
    async addCarts(@Body() body) {
        return await this.productService.addCarts(body);
    }

    @Post('removecart')
    async removecart(@Body() body) {
        return await this.productService.removecart(body);
    }

    @Post('medicineDetails')
    async madicineDetails(@Body() body) {
        return await this.productService.madicineDetails(body);
    }

    @Post('orderProduct')
    async orderProduct(@Req() req, @Body() body) {
        const header = req.headers;
        console.log(header);
        return await this.productService.orderProduct(header, body);
    }

    @Post('productcategorie')
    async productcategorie(@Body() body) {
        return await this.productService.productcategorie(body);
    }

    @Get('productcategorieList')
    async productcategorieList(@Body() body) {
        return await this.productService.productcategorieList();
    }
}
