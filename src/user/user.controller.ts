import {Body, Controller, Get, Param, Post, Put, Req} from '@nestjs/common';
import {UserService} from './user.service';

@Controller('user')
export class UserController {


    constructor(private readonly userService: UserService) {
    }

    @Post('signup')
    async createUser(@Body() body) {
        return await this.userService.createUser(body);
    }

    @Post('adminSignup')
    async adminSignup(@Body() body) {
        return await this.userService.adminSignup(body);
    }

    @Post('login')
    async loginUser(@Body() body) {
        return await this.userService.loginUser(body);
    }

    @Post('socialLogin')
    async socialloginUser(@Body() body) {
        return await this.userService.socialloginUser(body);
    }

    @Get('usersList')
    async usersList() {
        return await this.userService.usersList();
    }

    @Put('update/:id')
    async userUpdate(@Body() body1, @Param('id') id: string) {
        return await this.userService.userUpdate(body1, Number(id));
    }

    @Post('sentOtp')
    async sentOtp(@Body() body) {
        return await this.userService.sendSMS(body);
    }

    @Post('changePassword')
    async changePassword(@Body() body) {
        return await this.userService.changePassword(body);
    }

    @Post('forgotPassword')
    async forgotPassword(@Body() body) {
        return await this.userService.forgotPassword(body);
    }

    @Post('verifyOtp')
    async verifyOtp(@Body() body) {
        return await this.userService.verifyOtp(body);
    }

    @Post('deshbordProducts')
    async deshbordProducts(@Body() body) {
        return await this.userService.deshboardProduct(body);
    }

    @Post('searchProduct')
    async searchProduct(@Body() body) {
        return await this.userService.searchProduct(body);
    }

    @Post('subCategories')
    async subCategories(@Body() body) {
        return await this.userService.subCategories(body);
    }

    @Post('removePromoCode')
    async removePromoCode(@Body() body) {
        return await this.userService.removePromoCode(body);
    }

    @Post('applyPromoCode')
    async applyPromoCode(@Body() body) {
        return await this.userService.applyPromoCode(body);
    }

    @Post('myCarts')
    async myCarts(@Body() body) {
        return await this.userService.myCarts(body);
    }

    @Post('addCart')
    async addCarts(@Body() body) {
        return await this.userService.addCarts(body);
    }

    @Post('removecart')
    async removecart(@Body() body) {
        return await this.userService.removecart(body);
    }

    @Post('madicineDetails')
    async madicineDetails(@Body() body) {
        return await this.userService.madicineDetails(body);
    }

    @Post('paymentDetails')
    async paymentDetails(@Body() body) {
        return await this.userService.paymentDetails(body);
    }

    @Post('listCard')
    async listCard(@Body() body) {
        return await this.userService.listCard(body);
    }

    @Post('addCard')
    async addCard(@Body() body) {
        return await this.userService.addCard(body);
    }

    @Post('removeCard')
    async removeCard(@Body() body) {
        return await this.userService.removeCard(body);
    }

    @Get('digitalwallets')
    async digitalwallets() {
        return await this.userService.digitalwallets();
    }

    @Get('listinternetbanking')
    async listinternetbanking() {
        return await this.userService.listinternetbanking();
    }

    // @Post('listAddress')
    // async listAddress(@Body() body) {
    //     return await this.userService.listAddress(body);
    // }

    @Post('listAddress')
    async listAddress(@Req() req) {
        const header = req.headers;
        return await this.userService.listAddress(header);
    }

    @Post('makeAddressPrimary')
    async makeAddressPrimary(@Body() body) {
        return await this.userService.makeAddressPrimary(body);
    }

    @Post('removeAddress')
    async removeAddress(@Body() body) {
        return await this.userService.removeAddress(body);
    }

    @Post('addAddress')
    async addAddress(@Req() req, @Body() body) {
        const header = req.headers;
        return await this.userService.addAddress(header, body);
    }

    @Post('UpdateAddress')
    async UpdateAddress(@Body() body) {
        return await this.userService.UpdateAddress(body);
    }


}
