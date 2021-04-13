import { Module } from '@nestjs/common';
import {CareerService} from "./career.service";
import {MongooseModule} from "@nestjs/mongoose";
import {CareerController} from "./career.controller";
import {careerSchema} from "../schema/career.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'career',
        schema: careerSchema,
      },
    ]),
  ],
  controllers: [CareerController],
  providers: [CareerService]
})
export class CareerModule {}
