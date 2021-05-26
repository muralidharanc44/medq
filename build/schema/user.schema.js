"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
exports.userSchema = new mongoose.Schema({
    userId: Number,
    userName: { type: String },
    password: String,
    phone: Number,
    accessToken: String,
    email: String,
    pushNotificationToken: String,
    role: String,
    deviceOs: String,
    deviceName: String,
    deviceOsVersion: String,
    deviceBrand: String,
    buildVersion: String,
    loginType: Number,
    socialToken: String,
    otpCode: Number,
    status: Number,
});
//# sourceMappingURL=user.schema.js.map