import {model, Schema} from 'mongoose';
import {IUser} from "./user";

export interface ICategory {
    name?: string;
    description?:string;
    status?:number;
    User?:IUser;
}

const categorySchema = new Schema<ICategory>({
    name: String,
    description: String,
    status: Number,
    User:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

})

const Category = model<ICategory>('Category', categorySchema)
export {Category}