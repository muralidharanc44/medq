import * as mongoose from 'mongoose';
import {int} from "aws-sdk/clients/datapipeline";


export interface OrderInterface extends mongoose.Document {
    orderId: string;
    cartIds: string;
    userId: number;
    paid: string;
    grandTotal : string;
    addressId : string;
    date : string;
    shippingMethod : string;
    orderStatus : string;
}
// export interface CareerCategoriesInterface extends mongoose.Document {
//     jobcategory : string
// }
