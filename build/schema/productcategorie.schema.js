"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productcategorieSchema = void 0;
const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
exports.productcategorieSchema = new mongoose.Schema({
    caregoryId: String,
    categoryName: { type: String },
    categoryId: { type: String },
    image: String,
});
//# sourceMappingURL=productcategorie.schema.js.map