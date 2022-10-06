import { NextFunction, Request, Response } from "express";
import { User } from "../model/user"

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
            let user = req.body;
            user = await User.create(user);
            let newUser = await User.findById(user._id);
            res.status(201).json(newUser);
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