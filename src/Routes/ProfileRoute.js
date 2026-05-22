const express=require("express");
const ProfileController = require("../Controllers/ProfileController");
const router =express.Router();
 


router.post("/register",ProfileController.register)
router.post("/login",ProfileController.login)

 

module.exports= router;