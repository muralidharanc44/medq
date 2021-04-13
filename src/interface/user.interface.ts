import * as mongoose from 'mongoose';


export interface UserInterface extends mongoose.Document {
  userId: number;
  userName: string;
  phone: number;
  password: string;
  access_token: string;
  role: string;
  accessToken: string,
  pushNotificationToken: string,
  deviceOs: string,
  deviceName: string,
  deviceOsVersion: string,
  deviceBrand: string,
  buildVersion: string,
  socialToken: string,
  loginType: number,
  otpCode: number,
}
