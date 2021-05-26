import * as mongoose from 'mongoose';
export interface ProductInterface extends mongoose.Document {
    productId: string;
    productImage: any;
    name: string;
    caregoryId: string;
    about: string;
    price: string;
    currency: string;
    offerPerchtage: string;
    offer: string;
    grandTotal: string;
    topOffer: string;
    composition: string;
    use: string;
    otherInfo: string;
}
