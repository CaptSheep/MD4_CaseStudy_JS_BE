import {model, Schema} from 'mongoose';
import {IUser} from "./user";
import {IProduct} from "./product";
import {IOrder} from "./order";

export interface IOrderDetail {
    Product?:IProduct;
    Order?:IOrder;
    quantity?:number;
    price?:number;
}

const orderDetailSchema = new Schema<IOrderDetail>({
    Product:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    Order:{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    },
    quantity: Number,
    price: Number
})

const OrderDetail = model<IOrderDetail>('OrderDetail', orderDetailSchema)
export {orderDetailSchema}