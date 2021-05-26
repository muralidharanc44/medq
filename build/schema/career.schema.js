"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.careerSchema = void 0;
const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
exports.careerSchema = new mongoose.Schema({
    jobCode: String,
    title: String,
    description: String,
    exp: String,
    designation: String,
    addBy: String,
    state: String,
    country: String,
});
//# sourceMappingURL=career.schema.js.map