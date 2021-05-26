import * as mongoose from 'mongoose';

var autoIncrement = require('mongoose-auto-increment');

export const cartSchema = new mongoose.Schema({
    cartId: String,
    productId: String,
    qty: String,
    userId: String,
});



// export const careercategorySchema = new mongoose.Schema({
//     jobcategory: String
// });

// userSchema.plugin(autoIncrement.plugin, 'user_id');



