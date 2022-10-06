import {NextFunction, Request, Response} from "express";
import {Transaction} from "../model/transaction"
class TransactionController{
    /**
     * 
     * @param req 
     * @param res 
     */
     getAll = async (req: Request, res: Response) => {
        let categories = await Category.find().populate("user", "name");
        res.status(200).json(categories);
    }
    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */

    addCategory = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let category = req.body;
            category = await Category.create(category);
            let newCategory = await Category.findById(category._id).populate("user", "name");
            res.status(201).json(newCategory);
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
    deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let category = await Category.findById(id).populate("user", "name");
            if (!category) {
                res.status(404).json();
            } else {
                category.delete();
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

    getCategory = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let category = await Category.findById(id).populate("user", "name");
            if (!category) {
                res.status(404).json();
            } else {
                res.status(200).json(category);
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
    updateCategory = async (req: Request, res: Response) => {
        let id = req.params.id;
        let category = await Category.findById(id).populate("user", "name");
        if (!category) {
            res.status(404).json();
        } else {
            let data = req.body;
            await Category.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            category = await Category.findById(id).populate("user", "name");
            res.status(200).json(category);
        }
    }
}
export default new TransactionController();