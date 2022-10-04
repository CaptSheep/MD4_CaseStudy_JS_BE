import {NextFunction, Request, Response} from "express";
import {Wallet} from "../model/Wallet"

class WalletController {
    /**
     * 
     * @param req 
     * @param res 
     */
    getAll = async (req: Request, res: Response) => {
        let wallets = await Wallet.find().populate('category', 'name');
        res.status(200).json(wallets);
    }
    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */

    addProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let wallet = req.body;
            wallet = await Wallet.create(wallet);
            let newWallet = await Wallet.findById(wallet._id).populate('category', 'name');
            res.status(201).json(newWallet);
        }catch (error){
            next(error);
        }
    }
    
    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let wallet = await Wallet.findById(id);
            if (!wallet) {
                res.status(404).json();
            } else {
                wallet.delete();
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

    getProduct = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let wallet = await Wallet.findById(id).populate('category', 'name');
            if (!wallet) {
                res.status(404).json();
            } else {
                res.status(200).json(wallet);
            }
        } catch (error) {
            next(error)
        }
    }

    updateProduct = async (req: Request, res: Response) => {
        let id = req.params.id;
        let wallet = await Wallet.findById(id);
        if (!wallet) {
            res.status(404).json();
        } else {
            let data = req.body;
            await Wallet.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            wallet = await Wallet.findById(id).populate('category','name');
            res.status(200).json(wallet);
        }
    }
}

export default new WalletController();