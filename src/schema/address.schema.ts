import * as mongoose from 'mongoose';

var autoIncrement = require('mongoose-auto-increment');

export const addressSchema = new mongoose.Schema({
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


// export const careercategorySchema = new mongoose.Schema({
//     jobcategory: String
// });

// userSchema.plugin(autoIncrement.plugin, 'user_id');



