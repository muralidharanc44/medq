import * as mongoose from 'mongoose';
export interface ProductcategorieInterface extends mongoose.Document {
    caregoryId: string;
    categoryName: {
        type: string;
    };
    categoryId: string;
    image: string;
}
