const express=require("express")
const router=express.Router()
const {createProduct,updateQuentity}=require("../controller/productController")

router.post("/product",createProduct)
router.put("/product/:id",updateQuentity)
module.exports=router