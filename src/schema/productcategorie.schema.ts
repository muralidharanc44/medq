import * as mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');

export const productcategorieSchema = new mongoose.Schema({
    caregoryId: String,
    categoryName: { type: String},
    categoryId: { type: String},
    image: String,
});

// userSchema.plugin(autoIncrement.plugin, 'user_id');



