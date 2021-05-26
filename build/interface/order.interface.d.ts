import * as mongoose from 'mongoose';
export interface OrderInterface extends mongoose.Document {
    orderId: string;
    cartIds: string;
    userId: number;
    paid: string;
    grandTotal: string;
    addressId: string;
    date: string;
    shippingMethod: string;
    orderStatus: string;
}
