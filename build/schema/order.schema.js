"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
exports.orderSchema = new mongoose.Schema({
    orderId: String,
    cartIds: String,
    paid: String,
    grandTotal: String,
    userId: String,
    addressId: String,
    date: String,
    shippingMethod: String,
    orderStatus: String,
});
//# sourceMappingURL=order.schema.js.map