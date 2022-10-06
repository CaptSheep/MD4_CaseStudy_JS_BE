import { NextFunction, Request, Response } from "express";
import { MoneyType } from "../model/money-type"

class MoneyTypeController {
    /**
     * 
     * @param req 
     * @param res 
     */
    getAll = async (req: Request, res: Response) => {
        let moneyTypes = await MoneyType.find();
        res.status(200).json(moneyTypes);
    }
    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */

    addMoneyType = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let moneyType = req.body;
            moneyType = await MoneyType.create(moneyType);
            let newMoneyType = await MoneyType.findById(moneyType._id);
            res.status(201).json(newMoneyType);
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
    deleteMoneyType = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let moneyType = await MoneyType.findById(id);
            if (!moneyType) {
                res.status(404).json();
            } else {
                moneyType.delete();
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

    getMoneyType = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let moneyType = await MoneyType.findById(id);
            if (!moneyType) {
                res.status(404).json();
            } else {
                res.status(200).json(moneyType);
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
    updateMoneyType = async (req: Request, res: Response) => {
        let id = req.params.id;
        let moneyType = await MoneyType.findById(id);
        if (!moneyType) {
            res.status(404).json();
        } else {
            let data = req.body;
            await MoneyType.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            moneyType = await MoneyType.findById(id);
            res.status(200).json(moneyType);
        }
    }
}

export default new MoneyTypeController();