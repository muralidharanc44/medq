"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rfqSchema = void 0;
const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
exports.rfqSchema = new mongoose.Schema({
    userId: String,
    imagePath: String,
    status: String,
    statusType: String,
});
//# sourceMappingURL=rfq.schema.js.map