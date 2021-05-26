import * as mongoose from 'mongoose';


export interface AddressInterface extends mongoose.Document {
    address: string;
    userId: string;
    landmark: string;
    city: string;
    state : string;
    pincode : string;
    country : string;
    mobileNumber: number;
    primaryAddress: boolean;
    contactName: string;

}
// export interface CareerCategoriesInterface extends mongoose.Document {
//     jobcategory : string
// }
