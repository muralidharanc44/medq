import * as mongoose from 'mongoose';
export interface CartInterface extends mongoose.Document {
    cartId: string;
    productId: string;
    qty: string;
    userId: string;
    product: any;
}
