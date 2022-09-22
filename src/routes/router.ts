import {Router} from "express";
import {productRouter} from "./product-router";
export const router = Router();
router.get("/", (req, res)=>{
    res.send("Hello");
})
router.use("/product", productRouter)