"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationSchema = exports.jobcategorySchema = void 0;
const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
exports.jobcategorySchema = new mongoose.Schema({
    jobcateoryId: String,
    jobcateory: String,
});
exports.locationSchema = new mongoose.Schema({
    locationId: String,
    country: String,
    state: String,
});
//# sourceMappingURL=job-categories.schema.js.map