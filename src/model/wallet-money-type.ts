import {model, Schema} from 'mongoose';
import { IMoneyType } from './money-type';
import { IWallet } from './Wallet';

export interface IWalletMoneyType {
    Wallet?: IWallet;
    MoneyType?: IMoneyType;
}

const walletMoneyTypeSchema = new Schema<IWalletMoneyType>({
    Wallet:{
        type: Schema.Types.ObjectId,
        ref: "Wallet"
    },
    MoneyType:{
        type: Schema.Types.ObjectId,
        ref:"MoneyType"
    }
})

const WalletMoneyType = model<IWalletMoneyType>('WalletMoneyType', walletMoneyTypeSchema)
export {WalletMoneyType}