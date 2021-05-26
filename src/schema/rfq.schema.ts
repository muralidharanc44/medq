import * as mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');

export const rfqSchema = new mongoose.Schema({
    userId: String,
    imagePath: String,
    status: String,
    statusType: String,
});

// userSchema.plugin(autoIncrement.plugin, 'user_id');



