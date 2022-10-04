import {model, Schema} from 'mongoose';
import {IUser} from "./user";

export interface IWallet {
    icon?: string;
    money?:number;
    name?: string;
    status?:number;
    User?:IUser
}
const walletSchema = new Schema<IWallet>({
    icon: String,
    money: Number,
    name: String,
    status: Number,
    User:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Wallet = model<IWallet>('Wallet', walletSchema)
export {Wallet}