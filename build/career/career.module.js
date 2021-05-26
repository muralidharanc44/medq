"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareerModule = void 0;
const common_1 = require("@nestjs/common");
const career_service_1 = require("./career.service");
const mongoose_1 = require("@nestjs/mongoose");
const career_controller_1 = require("./career.controller");
const career_schema_1 = require("../schema/career.schema");
const job_categories_schema_1 = require("../schema/job-categories.schema");
let CareerModule = class CareerModule {
};
CareerModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'career',
                    schema: career_schema_1.careerSchema,
                },
                {
                    name: 'job_category',
                    schema: job_categories_schema_1.jobcategorySchema,
                },
                {
                    name: 'location',
                    schema: job_categories_schema_1.locationSchema,
                }
            ]),
        ],
        controllers: [career_controller_1.CareerController],
        providers: [career_service_1.CareerService]
    })
], CareerModule);
exports.CareerModule = CareerModule;
//# sourceMappingURL=career.module.js.map