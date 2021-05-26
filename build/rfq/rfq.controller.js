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
exports.RfqController = void 0;
const common_1 = require("@nestjs/common");
const rfq_service_1 = require("./rfq.service");
let RfqController = class RfqController {
    constructor(rfqService) {
        this.rfqService = rfqService;
    }
    async rfqList(req) {
        const header = req.headers;
        console.log(header);
        return await this.rfqService.rfqList(header);
    }
    async rfqChangeStatus(req) {
        const header = req.headers;
        console.log(header);
        return await this.rfqService.rfqChangeStatus(header);
    }
    async rfqProductUpload(req) {
        const header = req.headers;
        console.log(header);
        return await this.rfqService.rfqProductUpload(header);
    }
};
__decorate([
    common_1.Post('rfqList'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RfqController.prototype, "rfqList", null);
__decorate([
    common_1.Post('rfqChangeStatus'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RfqController.prototype, "rfqChangeStatus", null);
__decorate([
    common_1.Post('rfqProductUpload'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RfqController.prototype, "rfqProductUpload", null);
RfqController = __decorate([
    common_1.Controller('rfq'),
    __metadata("design:paramtypes", [rfq_service_1.RfqService])
], RfqController);
exports.RfqController = RfqController;
//# sourceMappingURL=rfq.controller.js.map