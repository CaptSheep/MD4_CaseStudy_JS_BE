import {Router} from "express";
import {walletRouter} from "./wallet-router";
import authController from "../controller/auth-controller";
import { userRouter } from "./user-router";
import {auth} from '../middleware/auth-middleware';
export const router = Router();
router.get("/", (req, res)=>{
    res.send("Hello");
})
router.post('/login',async (req,res,next)=>{
    await authController.login(req,res,next);
})
router.post('/register',async (req,res,next)=>{
    await authController.register(req, res, next);
})
router.use(auth);
router.use("/user", userRouter);
router.use("/wallet", walletRouter);