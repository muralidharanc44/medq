import * as mongoose from 'mongoose';


export interface CareerInterface extends mongoose.Document {
    jobCode: string;
    title: string;
    description: string;
    exp : string;
    designation : string;
    addBy : string;
    location : string;
}
