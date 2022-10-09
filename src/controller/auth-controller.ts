import { NextFunction, Request, Response } from "express";
import { Wallet } from "../model/Wallet"
import {User} from "../model/user";
import bcrypt from "bcrypt"
class AuthController {
    /** 
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    async login(req, res, next){
        try{
            let userLogin = await User.findOne({email : req.body.email, password : req.body.password})
            if(userLogin){
                res.status(300).json(`User ${userLogin.username} login successfully`)
            }
            else {
                res.status(404).json(`User not found . Login failed`)
            }

        }
        catch (err){
            next(err)
        }
    }
    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    async register(req, res, next){
        try{
            req.body.password = await bcrypt.hash(req.body.password,10)
            let userInfo = {
                name : req.body.name,
                avatar : req.body.avatar,
                username : req.body.username,
                password : req.body.password,
                phone : req.body.phone,
                email : req.body.email,
                address : req.body.address
            }
            let newUser = await User.create(userInfo)
            res.status(300).json(`User ${newUser.username} has been created`)
        }
        catch (err){
            next(err)
        }
    }
}

export default new AuthController();