import * as mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');

export const productSchema = new mongoose.Schema({
    productId: String,
    productImage: { type: String},
    name: String,
    caregoryId: String,
    about: String,
    price: String,
    currency: String,
    offerPerchtage: String,
    offer: String,
    grandTotal: String,
    topOffer: String,
    composition: String,
    use: String,
    otherInfo: String,
});

// userSchema.plugin(autoIncrement.plugin, 'user_id');



