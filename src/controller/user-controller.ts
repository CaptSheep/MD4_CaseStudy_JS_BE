import { NextFunction, Request, Response } from "express";
import { User } from "../model/user"
import bcrypt from "bcrypt"

class UserController {
    /**
     * 
     * @param req 
     * @param res 
     */
    getAll = async (req: Request, res: Response) => {
        let users = await User.find();
        res.status(200).json(users);
    }
    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */

    addUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10)

            let user = {
                name : req.body.name,
                avatar : req.body.avatar,
                username : req.body.username,
                password : req.body.password,
                phone : req.body.phone,
                email : req.body.email,
                address : req.body.address
            };
            let newUser = await User.create(user)

            return res.status(200).json(`User ${newUser.name} has been created`)
        } catch (error) {
            next(error);
        }
    }

    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    deleteUser = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let user = await User.findById(id);
            if (!user) {
                res.status(404).json();
            } else {
                user.delete();
                res.status(204).json();
            }
        } catch (error) {
            next(error);
        }
    }
    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */

    getUser = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let user = await User.findById(id);
            if (!user) {
                res.status(404).json();
            } else {
                res.status(200).json(user);
            }
        } catch (error) {
            next(error)
        }
    }
    /**
     * 
     * @param req 
     * @param res 
     */
    updateUser = async (req: Request, res: Response) => {
        let id = req.params.id;
        let user = await User.findById(id);
        if (!user) {
            res.status(404).json();
        } else {
            let data = req.body;
            await User.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            user = await User.findById(id);
            res.status(200).json(user);
        }
    }
}

export default new UserController();