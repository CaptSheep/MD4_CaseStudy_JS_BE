import {model, Schema} from 'mongoose';
import {IRole} from "./role";
import {IUser} from "./user";

export interface IRoleUser {
    Role?: IRole;
    User?: IUser
}

const roleCustomerSchema = new Schema<IRoleUser>({
    Role:{
        type: Schema.Types.ObjectId,
        ref: 'Role'
    },
    User:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const RoleCustomer = model<IRoleUser>('RoleCustomer', roleCustomerSchema)
export {RoleCustomer}