"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
exports.productSchema = new mongoose.Schema({
    productId: String,
    productImage: { type: String },
    name: String,
    caregoryId: String,
    about: String,
    price: String,
    currency: String,
    offerPerchtage: String,
    offer: String,
    grandTotal: String,
    topOffer: String,
    composition: String,
    use: String,
    otherInfo: String,
});
//# sourceMappingURL=product.schema.js.map