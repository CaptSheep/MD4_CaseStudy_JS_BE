import { NextFunction, Request, Response } from "express";
import { Wallet } from "../model/Wallet"
import {User} from "../model/user";

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
    register(req, res, next){

    }
}

export default new AuthController();