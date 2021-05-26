import * as mongoose from 'mongoose';
export interface RfqInterface extends mongoose.Document {
    userId: string;
    imagePath: string;
    status: string;
    statusType: string;
}
