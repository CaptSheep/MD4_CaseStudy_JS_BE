import {NextFunction, Request, Response} from "express";
import {Transaction} from "../model/transaction"
import {Category} from "../model/category";

class TransactionController{
    /**
     * 
     * @param req 
     * @param res 
     */
    getAll = async (req: Request, res: Response) => {
        let transactions = await Transaction.find();
        res.status(200).json(transactions);
    }
    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */

    addTransaction = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let transaction = req.body;
            transaction = await Transaction.create(Transaction);
            let newTransaction = await Transaction.findById(transaction._id);
            res.status(201).json(newTransaction);
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
    deleteTransaction = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let transaction = await Transaction.findById(id);
            if (!transaction) {
                res.status(404).json();
            } else {
                transaction.delete();
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

    getTransaction = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let transaction = await Transaction.findById(id);
            if (!transaction) {
                res.status(404).json();
            } else {
                res.status(200).json(transaction);
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
    updateTransaction = async (req: Request, res: Response) => {
        let id = req.params.id;
        let transaction = await Transaction.findById(id);
        if (!transaction) {
            res.status(404).json();
        } else {
            let data = req.body;
            await Transaction.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            transaction = await Transaction.findById(id);
            res.status(200).json(transaction);
        }
    }
}
export default new TransactionController();