import * as mongoose from 'mongoose';


export interface RfqproductlistInterface extends mongoose.Document {
    userId: string;
    rfqId: string;
    products : any;
}
// export interface CareerCategoriesInterface extends mongoose.Document {
//     jobcategory : string
// }
