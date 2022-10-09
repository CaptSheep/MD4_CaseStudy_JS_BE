import {Router} from "express";
import {walletRouter} from "./wallet-router";
import authController from "../controller/auth-controller";
import userController from "../controller/user-controller";
export const router = Router();
router.get("/", (req, res)=>{
    res.send("Hello");
})
router.post('/login',async (req,res,next)=>{
    await authController.login(req,res,next)
})
router.post('/user/create',async (req,res, next)=>{
    await userController.addUser(req,res,next)
})
router.delete('/user/delete/:id',async (req,res,next)=>{
    await userController.deleteUser(req,res,next)

})
router.put('/user/update/:id/',async (req,res,next)=>{
    await userController.updateUser(req,res)
})
router.use("/wallet", walletRouter);