import {Module} from '@nestjs/common';
import {AdminPanelController} from './admin-panel.controller';
import {AdminPanelService} from './admin-panel.service';
import {MongooseModule} from "@nestjs/mongoose";
import {productSchema} from "../schema/product.schema";
import {productcategorieSchema} from "../schema/productcategorie.schema";
import {cartSchema} from "../schema/cart.schema";
import {couponSchema} from "../schema/coupon.schema";
import {orderSchema} from "../schema/order.schema";
import {userSchema} from "../schema/user.schema";
import {addressSchema} from "../schema/address.schema";
import {rfqSchema} from "../schema/rfq.schema";
import {rfqproductlistSchema} from "../schema/rfqproductlist.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'product',
                schema: productSchema,
            },
            {
                name: 'user',
                schema: userSchema,
            },
            {
                name: 'product_categorie',
                schema: productcategorieSchema,
            },
            {
                name: 'cart',
                schema: cartSchema,
            },
            {
                name: 'promo_code',
                schema: couponSchema,
            },
            {
                name: 'order',
                schema: orderSchema,
            },
            {
                name: 'address',
                schema: addressSchema,
            },
            {
                name: 'rfq',
                schema: rfqSchema,
            },
            {
                name: 'rfqproduct',
                schema: rfqproductlistSchema,
            },
        ]),
    ],
    controllers: [AdminPanelController],
    providers: [AdminPanelService]
})
export class AdminPanelModule {
}
