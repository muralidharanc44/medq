"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartSchema = void 0;
const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
exports.cartSchema = new mongoose.Schema({
    cartId: String,
    productId: String,
    qty: String,
    userId: String,
});
//# sourceMappingURL=cart.schema.js.map