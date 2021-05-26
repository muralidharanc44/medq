import { Module } from '@nestjs/common';
import {CareerService} from "./career.service";
import {MongooseModule} from "@nestjs/mongoose";
import {CareerController} from "./career.controller";
import {careerSchema} from "../schema/career.schema";
import {jobcategorySchema, locationSchema} from "../schema/job-categories.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'career',
        schema: careerSchema,
      },
      {
        name: 'job_category',
        schema: jobcategorySchema,
      },
      {
        name: 'location',
        schema: locationSchema,
      }
    ]),
  ],
  controllers: [CareerController],
  providers: [CareerService]
})
export class CareerModule {}
