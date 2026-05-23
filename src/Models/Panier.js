const mongoose =require("mongoose")

const PanierSchema=new mongoose.Schema({
  
  ProfileId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Profile",
    required:true,
    unique:true
  },
   
})
const Panier=mongoose.model("Panier",PanierSchema)
module.exports = {Panier}