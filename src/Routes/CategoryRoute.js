const express=require("express");
const CategoryController = require("../Controllers/CategoryController");
const { authorize } = require("../Middlewares/Autorize");
const verifyToken = require("../Middlewares/VerifyToken");
const router =express.Router();
 


router.post("/category", verifyToken,authorize(["admin"]),CategoryController.AddCategories)

 
module.exports= router;