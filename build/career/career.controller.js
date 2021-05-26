"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareerController = void 0;
const common_1 = require("@nestjs/common");
const career_service_1 = require("./career.service");
let CareerController = class CareerController {
    constructor(careerService) {
        this.careerService = careerService;
    }
    async career(body) {
        return await this.careerService.careers(body);
    }
    async career1() {
        return await { "results": [{ "title": "Senior Software Engineer - Revenue Processing Platform (Billing \u0026 Revenue Pipelines)", "description": "Rebuild the billing platform for Twitter! Be a part of the team with a focus on distributed systems at a global scale", "modified": 1617935082000, "internalJob": false, "url": "https://careers.twitter.com/en/work-for-twitter/202102/3e8afb47-eae6-4d12-8dc5-2208b8b5ba6c/3e30e372-f651-4229-8662-d340683b8b2f.html", "locations": [{ "id": "careers-twitter:sr/office/in/bangalore", "title": "Bangalore" }], "teams": [{ "id": "careers-twitter:sr/team/software-engineering", "title": "Software Engineering" }] }, { "title": "Senior Manager, Real Estate Data Strategy \u0026 Analytics", "description": "Come and join us to lead real estate technology and data as part of our Leasing and Planning team. We’re focused on the exciting challenge of evolving our office portfolio as we embrace working from our amazing offices and wherever our Tweeps feel productive on any given day!", "modified": 1617931222000, "internalJob": false, "url": "https://careers.twitter.com/en/work-for-twitter/202104/e09caba3-603f-4a80-b610-b2d1b83a77c1/19d6c3a8-dc0e-40ef-96a7-3e97ec3359d1.html", "locations": [{ "id": "careers-twitter:sr/office/us/atlanta", "title": "Atlanta" }, { "id": "careers-twitter:sr/office/us/san-francisco", "title": "San Francisco" }, { "id": "careers-twitter:sr/office/us/los-angeles", "title": "Los Angeles" }], "teams": [{ "id": "careers-twitter:sr/team/workplace", "title": "Workplace" }] }, { "title": "Office Manager - Real Estate \u0026 Workplace", "description": "Come join us to oversee the TwitterLA office as as we cultivate an office environment where our tweeps experience the #LoveWhereYouWork culture.", "modified": 1617928147000, "internalJob": false, "url": "https://careers.twitter.com/en/work-for-twitter/202104/1fa9d3c1-a21a-430d-8f94-403347344f21/686e42b8-5276-481f-b391-6857c6e7018f.html", "locations": [{ "id": "careers-twitter:sr/office/us/los-angeles", "title": "Los Angeles" }], "teams": [{ "id": "careers-twitter:sr/team/workplace", "title": "Workplace" }] }, { "title": "iOS Engineer - Client Foundation", "description": "The Client Foundation group is part of the broader Twitter mobile engineering team responsible for bringing you all the features of Twitter for iOS.", "modified": 1617925123000, "internalJob": false, "url": "https://careers.twitter.com/en/work-for-twitter/202101/a7cd7d26-dd7f-44f0-b4c8-1f6b66188ee5/3df09b53-2b3f-4511-ad02-72d61059eff8.html", "locations": [{ "id": "careers-twitter:sr/office/us/new-york-city", "title": "New York City" }, { "id": "careers-twitter:sr/office/us/remote-us", "title": "Remote US" }], "teams": [{ "id": "careers-twitter:sr/team/software-engineering", "title": "Software Engineering" }] }, { "title": "Senior Machine Learning Engineer - Search \u0026 Recommendations", "description": "Come help us connect our users to the conversations and people that are most relevant to them!", "modified": 1617922411000, "internalJob": false, "url": "https://careers.twitter.com/en/work-for-twitter/202012/881051bb-ba8c-4dbe-8528-049dbb88b9e7/0ccf902d-8735-4aae-9bd2-91614c73489f.html", "locations": [{ "id": "careers-twitter:sr/office/us/new-york-city", "title": "New York City" }, { "id": "careers-twitter:sr/office/us/san-francisco", "title": "San Francisco" }], "teams": [{ "id": "careers-twitter:sr/team/software-engineering", "title": "Software Engineering" }, { "id": "careers-twitter:sr/team/machine-learning", "title": "Machine Learning" }] }, { "title": "Principal Product Manager, Fundamental Infrastructure", "description": "#JoinTheFlock", "modified": 1617921799000, "internalJob": false, "url": "https://careers.twitter.com/en/work-for-twitter/202104/fa2582a5-6029-45aa-9e1c-b6d08af305e9/7efea93c-f846-4e23-981d-5b0a304918c3.html", "locations": [{ "id": "careers-twitter:sr/office/us/new-york-city", "title": "New York City" }, { "id": "careers-twitter:sr/office/us/seattle", "title": "Seattle" }, { "id": "careers-twitter:sr/office/us/boston", "title": "Boston" }, { "id": "careers-twitter:sr/office/us/san-francisco", "title": "San Francisco" }], "teams": [{ "id": "careers-twitter:sr/team/product", "title": "Product" }] }, { "title": "Software Engineer, Health Tools", "description": "#LoveWhereYouWork", "modified": 1617921654000, "internalJob": false, "url": "https://careers.twitter.com/en/work-for-twitter/202102/424dc6d5-3625-4416-b674-a4e9c57a7ec5/f8973e68-06ba-48bc-a9b1-4d44c745aace.html", "locations": [{ "id": "careers-twitter:sr/office/us/new-york-city", "title": "New York City" }, { "id": "careers-twitter:sr/office/us/atlanta", "title": "Atlanta" }, { "id": "careers-twitter:sr/office/us/detroit", "title": "Detroit" }, { "id": "careers-twitter:sr/office/us/los-angeles", "title": "Los Angeles" }, { "id": "careers-twitter:sr/office/ca/toronto", "title": "Toronto" }], "teams": [{ "id": "careers-twitter:sr/team/software-engineering", "title": "Software Engineering" }] }, { "title": "Sr. Site Reliability Engineer, Compute Team", "description": "#LoveWhereYouWork", "modified": 1617920876000, "internalJob": false, "url": "https://careers.twitter.com/en/work-for-twitter/202102/c7c5608e-54db-4a6e-bac9-24fbbb84a1d6/5d58827f-d28e-465b-9a68-2919bd9237bc.html", "locations": [{ "id": "careers-twitter:sr/office/us/new-york-city", "title": "New York City" }, { "id": "careers-twitter:sr/office/us/seattle", "title": "Seattle" }, { "id": "careers-twitter:sr/office/us/boston", "title": "Boston" }, { "id": "careers-twitter:sr/office/us/chicago", "title": "Chicago" }], "teams": [{ "id": "careers-twitter:sr/team/infrastructure-engineering", "title": "Infrastructure Engineering" }, { "id": "careers-twitter:sr/team/software-engineering", "title": "Software Engineering" }] }, { "title": "Engineering Manager, Site Reliability Engineering", "description": "Site Reliability Engineers work on improving the availability, scalability, performance and reliability of Twitter’s production services. Come join us.", "modified": 1617920659000, "internalJob": false, "url": "https://careers.twitter.com/en/work-for-twitter/202008/699beabd-f18e-41f5-a434-368382045003/465e474d-cbdd-4ac5-a9d9-38c51399f79c.html", "locations": [{ "id": "careers-twitter:sr/office/us/sacramento", "title": "Sacramento" }, { "id": "careers-twitter:sr/office/us/seattle", "title": "Seattle" }, { "id": "careers-twitter:sr/office/us/san-francisco", "title": "San Francisco" }, { "id": "careers-twitter:sr/office/us/los-angeles", "title": "Los Angeles" }, { "id": "careers-twitter:sr/office/us/remote-us", "title": "Remote US" }], "teams": [{ "id": "careers-twitter:sr/team/infrastructure-engineering", "title": "Infrastructure Engineering" }] }, { "title": "Finance Operations Program Manager, Corporate Security", "description": "#LoveWhereYouWork", "modified": 1617920576000, "internalJob": false, "url": "https://careers.twitter.com/en/work-for-twitter/202104/ca49c5f3-2feb-4a72-9956-cef89bf0f8ec/75ec48cc-eb46-4ffd-bf70-9c5b74d23a6a.html", "locations": [{ "id": "careers-twitter:sr/office/us/san-francisco", "title": "San Francisco" }], "teams": [{ "id": "careers-twitter:sr/team/legal-and-public-policy", "title": "Legal and Public Policy" }] }, { "title": "Engineering Manager: Mobile Developer Experience", "description": "Come find out why were the best place to work!", "modified": 1617919637000, "internalJob": false, "url": "https://careers.twitter.com/en/work-for-twitter/202010/c6206f31-8e23-431f-8a0f-468b246ab312/b6f91cf4-6fa9-48ac-90b3-973f3e69d098.html", "locations": [{ "id": "careers-twitter:sr/office/us/new-york-city", "title": "New York City" }, { "id": "careers-twitter:sr/office/us/seattle", "title": "Seattle" }, { "id": "careers-twitter:sr/office/us/boulder", "title": "Boulder" }, { "id": "careers-twitter:sr/office/us/san-francisco", "title": "San Francisco" }, { "id": "careers-twitter:sr/office/us/remote-us", "title": "Remote US" }], "teams": [{ "id": "careers-twitter:sr/team/software-engineering", "title": "Software Engineering" }] }, { "title": "Senior Business Finance Analyst", "description": "The Business Intelligence \u0026 Analytics team within FP\u0026A provides the executive leadership with timely and unbiased analyses and insights to inform critical business decisions.", "modified": 1617919507000, "internalJob": false, "url": "https://careers.twitter.com/en/work-for-twitter/202104/b44cd998-6838-4690-b4c1-43d8fc117a2e/0f7e192f-da57-4617-a8e9-ab9aaff12151.html", "locations": [{ "id": "careers-twitter:sr/office/us/san-francisco", "title": "San Francisco" }], "teams": [{ "id": "careers-twitter:sr/team/finance", "title": "Finance" }] }, { "title": "Senior Software Engineer, Health as a Service", "description": "#LoveWhereYouWork", "modified": 1617919386000, "internalJob": false, "url": "https://careers.twitter.com/en/work-for-twitter/202101/54edab5a-5562-4807-90c9-2ac2dc5643b5/14a0a5e4-5ffa-4b76-a8ab-0365db0318fe.html", "locations": [{ "id": "careers-twitter:sr/office/us/miami", "title": "Miami" }, { "id": "careers-twitter:sr/office/us/atlanta", "title": "Atlanta" }, { "id": "careers-twitter:sr/office/ca/remote-canada", "title": "Remote Canada" }, { "id": "careers-twitter:sr/office/ca/toronto", "title": "Toronto" }], "teams": [{ "id": "careers-twitter:sr/team/software-engineering", "title": "Software Engineering" }] }, { "title": "Sr. Cultural Marketing \u0026 Strategy Manager", "description": "The Culture and Community team focuses on how Twitter amplifies, connects with, supports and elevates voices from historically underrepresented communities on Twitter. It is our mission and commitment to ensure that the experiences of diverse individuals iis integrated into th...", "modified": 1617919031000, "internalJob": false, "url": "https://careers.twitter.com/en/work-for-twitter/202104/ccddf235-216a-44c0-af0d-512c3a60102a/f33ff5d6-36dc-4927-9adb-225d3838e1b9.html", "locations": [{ "id": "careers-twitter:sr/office/us/new-york-city", "title": "New York City" }, { "id": "careers-twitter:sr/office/us/miami", "title": "Miami" }, { "id": "careers-twitter:sr/office/us/detroit", "title": "Detroit" }, { "id": "careers-twitter:sr/office/us/remote-us", "title": "Remote US" }, { "id": "careers-twitter:sr/office/us/atlanta", "title": "Atlanta" }, { "id": "careers-twitter:sr/office/us/washington", "title": "Washington" }, { "id": "careers-twitter:sr/office/us/los-angeles", "title": "Los Angeles" }], "teams": [{ "id": "careers-twitter:sr/team/marketing-and-communications", "title": "Marketing and Communications" }] }, { "title": "Senior Program Manager, Strategic Response Team", "description": "The Twitter Service organization builds meaningful connections with our customers that promote healthy exchange in the public conversation.", "modified": 1617915423000, "internalJob": false, "url": "https://careers.twitter.com/en/work-for-twitter/202102/1866274d-9d62-463a-9596-69ec696d0ecd/2a24916c-9183-45b1-b0a3-d2b9f63d559f.html", "locations": [{ "id": "careers-twitter:sr/office/us/atlanta", "title": "Atlanta" }, { "id": "careers-twitter:sr/office/us/seattle", "title": "Seattle" }, { "id": "careers-twitter:sr/office/us/chicago", "title": "Chicago" }, { "id": "careers-twitter:sr/office/us/san-francisco", "title": "San Francisco" }], "teams": [{ "id": "careers-twitter:sr/team/trust-and-safety", "title": "Trust and Safety" }, { "id": "careers-twitter:sr/team/customer-support-and-operations", "title": "Customer Support and Operations" }] }], "pageCount": 15, "totalCount": 531 };
    }
    async AddCareer(body) {
        return await this.careerService.addCareer(body);
    }
    async updatecareer(body) {
        return await this.careerService.updatecareer(body);
    }
    async deleteCareer(body) {
        return await this.careerService.deletecareer(body);
    }
    async careerOne(body1, id) {
        return await this.careerService.careerOne(id);
    }
    async email(body) {
        return await this.careerService.main(body);
    }
    async Category() {
        return await this.careerService.Category();
    }
    async countries() {
        return await this.careerService.countries();
    }
    async location() {
        return await this.careerService.location();
    }
};
__decorate([
    common_1.Post('career'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "career", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "career1", null);
__decorate([
    common_1.Post('addCareer'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "AddCareer", null);
__decorate([
    common_1.Post('updatecareer'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "updatecareer", null);
__decorate([
    common_1.Post('deleteCareer'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "deleteCareer", null);
__decorate([
    common_1.Get('careerOne/:id'),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "careerOne", null);
__decorate([
    common_1.Post('email'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "email", null);
__decorate([
    common_1.Get('category'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "Category", null);
__decorate([
    common_1.Get('countries'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "countries", null);
__decorate([
    common_1.Get('location'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "location", null);
CareerController = __decorate([
    common_1.Controller('career'),
    __metadata("design:paramtypes", [career_service_1.CareerService])
], CareerController);
exports.CareerController = CareerController;
//# sourceMappingURL=career.controller.js.map