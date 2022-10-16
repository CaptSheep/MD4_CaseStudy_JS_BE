import { NextFunction, Request, Response } from "express";
import { Wallet } from "../model/Wallet"
import {User} from "../model/user";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class AuthController {
    /** 
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    async login(req, res, next){
        try {

            let user = await User.findOne({email: req.body.email});

            if(user){
                bcrypt.compare(req.body.password, user.password).then((result) => {
                    let  checkPassword = result
                    console.log(checkPassword)
                    if(!checkPassword  ){
                        res.status(400).json('Wrong password. Please try again')
                    }
                    else {
                        let accessToken = jwt.sign(
                            {
                                userId : user._id,
                                userName :user.name
                            },
                            process.env.ACCESS_TOKEN_SECRET || "secret",
                            { expiresIn: "3d" }
                        )
                        return res.status(300).json(`User ${user.name} has been login successfully ------ And access token is :  ${accessToken}` )

                    }
                })

            }
            else {
                return res.status(404).json('Can not find User')
            }


// console.log(user)


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