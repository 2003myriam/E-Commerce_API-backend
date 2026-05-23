const express=require("express");
const PanierController = require("../Controllers/PanierController");
const { authorize } = require("../Middlewares/Autorize");
const verifyToken = require("../Middlewares/VerifyToken");
const router =express.Router();
 


router.post("/panier", verifyToken,authorize(["user"]),PanierController.addingPanier)

 
module.exports= router;