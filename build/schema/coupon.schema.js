"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponSchema = void 0;
const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
exports.couponSchema = new mongoose.Schema({
    promoCode: String,
    discountAmount: String,
    couponType: String,
});
//# sourceMappingURL=coupon.schema.js.map