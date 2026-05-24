const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  quantity: {type: Number,default: 1},
  totalPricePerProduct:{type:Number},
  PanierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Panier",
     
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    
  }
});
const Cartitem = mongoose.model("CartItem", CartItemSchema);
module.exports = { Cartitem };