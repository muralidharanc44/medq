"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rfqproductlistSchema = void 0;
const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
exports.rfqproductlistSchema = new mongoose.Schema({
    userId: String,
    rfqId: String,
    products: Array,
});
//# sourceMappingURL=rfqproductlist.schema.js.map