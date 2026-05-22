const mongoose =require("mongoose")

const ShoppingCardSchema=new mongoose.Schema({
   ProfileId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Profile"
  },
   product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
})
const ShoppingCart=mongoose.model("ShoppingCart",ShoppingCardSchema)
module.exports = {ShoppingCart}