"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressSchema = void 0;
const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
exports.addressSchema = new mongoose.Schema({
    address: String,
    landmark: String,
    userId: String,
    city: String,
    state: String,
    pincode: String,
    country: String,
    mobileNumber: Number,
    primaryAddress: Boolean,
    contactName: String,
});
//# sourceMappingURL=address.schema.js.map