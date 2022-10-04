import {model, Schema} from 'mongoose';
import {IWallet} from "./Wallet";
import {IUser} from "./user";

export interface IWalletUser {
    Wallet?: IWallet;
    User?: IUser;
}
const walletUserSchema = new Schema<IWalletUser>({
    Wallet:{
        type: Schema.Types.ObjectId,
        ref: "Wallet"
    },
    User:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }

})

const WalletUser = model<IWalletUser>('WalletUser', walletUserSchema)
export {WalletUser}