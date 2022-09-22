import {model, Schema} from 'mongoose';

export interface IUser {
    name?: string;
    username?: string;
    password?: string;
    phone?: string;
    email?: string;
    address?: string;
}

const userSchema = new Schema<IUser>({
    name: String,
    username: String,
    password: String,
    phone: String,
    email: String,
    address: String,
})

const User = model<IUser>('User', userSchema)
export {User}