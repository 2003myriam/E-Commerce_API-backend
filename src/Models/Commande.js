const mongoose =require("mongoose")

const CommandeSchema=new mongoose.Schema({
  Status:{type:String,enum: ["pending" ,"confirmed" , "shipped" , "delivered" ,"cancelled"]},
  ProductId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  }
})
const Commande=mongoose.model("Commande",CommandeSchema)
module.exports = {Commande}