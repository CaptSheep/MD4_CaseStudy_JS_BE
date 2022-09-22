import {model, Schema} from 'mongoose';
import {IUser} from "./user";

export interface IOrder {
    Customer?: IUser;
    date?: string;
    address?: string;
    status?: number;
}

const orderSchema = new Schema<IOrder>({
    Customer:{
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    date: String,
    address: String,
    status: Number
})

const Order = model<IOrder>('Order', orderSchema)
export {orderSchema}