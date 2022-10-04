import {model, Schema} from 'mongoose';
import { ICategory } from './category';
import { ITransaction } from './transaction';

export interface ITransactionCategory {
    Category?: ICategory;
    Transaction?: ITransaction
}

const transactionCategorySchema = new Schema<ITransactionCategory>({
    Category:{
        type: Schema.Types.ObjectId,
        ref:"Category"
    },
    Transaction:{
        type: Schema.Types.ObjectId,
        ref:"Transaction"
    }
})

const TransactionCategory = model<ITransactionCategory>('TransactionCategory', transactionCategorySchema)
export {TransactionCategory}