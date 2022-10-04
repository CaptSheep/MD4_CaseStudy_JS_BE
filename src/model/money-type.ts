import {model, Schema} from 'mongoose';

export interface IMoneyType {
    name?: string;
    rate?: number
}

const moneyTypeSchema = new Schema<IMoneyType>({
    name: String,
    rate: Number
})

const MoneyType = model<IMoneyType>('MoneyType', moneyTypeSchema)
export {MoneyType}