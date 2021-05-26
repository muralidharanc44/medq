import * as mongoose from 'mongoose';

var autoIncrement = require('mongoose-auto-increment');

export const careerSchema = new mongoose.Schema({
    jobCode: String,
    title: String,
    description: String,
    exp: String,
    designation: String,
    addBy: String,
    state: String,
    country: String,
});



// export const careercategorySchema = new mongoose.Schema({
//     jobcategory: String
// });

// userSchema.plugin(autoIncrement.plugin, 'user_id');



