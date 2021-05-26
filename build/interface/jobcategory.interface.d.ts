import * as mongoose from 'mongoose';
export interface JobcategoryInterface extends mongoose.Document {
    jobcateoryId: string;
    jobcateory: string;
}
export interface LocationInterface extends mongoose.Document {
    locationId: string;
    country: string;
    state: string;
}
