import {model, Schema} from 'mongoose';

export interface IRole {
    name?: string;
}

const roleSchema = new Schema<IRole>({
    name: String
})

const Role = model<IRole>('Role', roleSchema)
export {Role}