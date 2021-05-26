import * as mongoose from 'mongoose';

var autoIncrement = require('mongoose-auto-increment');

export const couponSchema = new mongoose.Schema({
    promoCode: String,
    discountAmount: String,
    couponType: String,
});



// export const careercategorySchema = new mongoose.Schema({
//     jobcategory: String
// });

// userSchema.plugin(autoIncrement.plugin, 'user_id');



