import {Router} from "express";
import userController from "../controller/user-controller";
export const userRouter = Router();

userRouter.get('/list',async (req,res)=>{
    await userController.getAll(req,res)
})

userRouter.delete('/delete/:id',async (req,res,next)=>{
    await userController.deleteUser(req,res,next)

})
userRouter.put('/update/:id/',async (req,res,next)=>{
    await userController.updateUser(req,res)
})

