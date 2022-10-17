import {Router} from "express";
import walletController from "../controller/wallet-controller";
export const walletRouter = Router();
walletRouter.get("/", walletController.getAll)
walletRouter.post("/", walletController.addWallet)

