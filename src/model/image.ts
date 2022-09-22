import {model, Schema} from 'mongoose';
import {IProduct} from "./product";


export interface IImage {
    Product?: IProduct;
    link?: string;
}

const imageSchema = new Schema<IImage>({
    Product:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    link: String
})

const Image = model<IImage>('Image', imageSchema);
export {Image}