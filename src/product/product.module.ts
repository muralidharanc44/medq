import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {productSchema} from "../schema/product.schema";
import {productcategorieSchema} from "../schema/productcategorie.schema";
import {cartSchema} from "../schema/cart.schema";
import {couponSchema} from "../schema/coupon.schema";
import {orderSchema} from "../schema/order.schema";
import {userSchema} from "../schema/user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'product',
        schema: productSchema,
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
        name: 'user',
        schema: userSchema,
      },
    ]),
  ],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
