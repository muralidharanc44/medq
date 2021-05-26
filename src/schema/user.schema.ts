import * as mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');

export const userSchema = new mongoose.Schema({
  userId: Number,
  userName: { type: String},
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

// userSchema.plugin(autoIncrement.plugin, 'user_id');



