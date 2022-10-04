import {Router} from "express";
import {walletRouter} from "./wallet-router";
export const router = Router();
router.get("/", (req, res)=>{
    res.send("Hello");
})
router.use("/wallet", walletRouter);