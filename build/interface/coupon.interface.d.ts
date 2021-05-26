import * as mongoose from 'mongoose';
export interface CouponInterface extends mongoose.Document {
    promoCode: string;
    discountAmount: {
        type: string;
    };
    couponType: string;
}
