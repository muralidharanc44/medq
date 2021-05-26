import * as mongoose from 'mongoose';

var autoIncrement = require('mongoose-auto-increment');

export const orderSchema = new mongoose.Schema({
    orderId: String,
    cartIds: String,
    paid: String,
    grandTotal: String,
    userId: String,
    addressId: String,
    date: String,
    shippingMethod: String,
    orderStatus: String,

});



// export const careercategorySchema = new mongoose.Schema({
//     jobcategory: String
// });

// userSchema.plugin(autoIncrement.plugin, 'user_id');



