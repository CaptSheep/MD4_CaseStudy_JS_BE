import {model, Schema} from 'mongoose';
import {IWallet} from "./wallet";

export interface ITransaction {
    name?: string;
    rate?: number,
    time?: Date,
    total?: number,
    Wallet?: IWallet
}

const transactionSchema = new Schema<ITransaction>({
    name: String,
    rate: Number
})

const Transaction = model<ITransaction>('Transaction', transactionSchema)
export {Transaction}