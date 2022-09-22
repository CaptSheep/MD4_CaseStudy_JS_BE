import {model, Schema} from 'mongoose';
import {ICategory} from "./category";

export interface IProduct {
    name?: string;
    price?: number;
    quantity?: number;
    description?:string;
    status?:boolean;
    category?:ICategory;
}

const productSchema = new Schema<IProduct>({
    name: String,
    price: Number,
    quantity: Number,
    description:String,
    status:Boolean,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
})

const Product = model<IProduct>('Product', productSchema)
export {Product}