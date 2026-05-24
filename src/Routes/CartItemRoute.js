const express=require("express");
const CartController = require("../Controllers/CartItemController");
const router =express.Router();
 


router.post("/cart", CartController.AddCart)

 
module.exports= router;