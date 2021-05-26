import * as mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');

export const rfqproductlistSchema = new mongoose.Schema({
    userId: String,
    rfqId: String,
    products: Array,
});

// userSchema.plugin(autoIncrement.plugin, 'user_id');



