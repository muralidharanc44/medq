import { Module } from '@nestjs/common';
import { RfqService } from './rfq.service';
import { RfqController } from './rfq.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {userSchema} from "../schema/user.schema";
import {addressSchema} from "../schema/address.schema";
import {rfqSchema} from "../schema/rfq.schema";
import {rfqproductlistSchema} from "../schema/rfqproductlist.schema";
import {productSchema} from "../schema/product.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'rfq',
        schema: rfqSchema,
      },
      {
        name: 'user',
        schema: userSchema,
      },
      {
        name: 'rfqproduct',
        schema: rfqproductlistSchema,
      },
      {
        name: 'product',
        schema: productSchema,
      },
    ]),
  ],
  providers: [RfqService],
  controllers: [RfqController]
})
export class RfqModule {}
