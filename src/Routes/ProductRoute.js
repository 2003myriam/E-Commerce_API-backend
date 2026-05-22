
const express=require("express");
const ProductController = require("../Controllers/ProductController");
const verifyToken = require("../Middlewares/VerifyToken");
const { authorize } = require("../Middlewares/Autorize");

const router =express.Router();
 
router.post("/product", verifyToken,authorize(["admin"]),ProductController.AddProduct)
router.put("/product/:id", verifyToken,ProductController.ModifyProduct)
router.delete("/product/:id", verifyToken,ProductController.DeletProduct)
 
module.exports= router;