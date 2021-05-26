import * as mongoose from 'mongoose';

var autoIncrement = require('mongoose-auto-increment');

export const jobcategorySchema = new mongoose.Schema({
    jobcateoryId : String,
    jobcateory : String,
});
export const locationSchema = new mongoose.Schema({
    locationId: String,
    country: String,
    state: String,
});
