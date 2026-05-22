const CardItem=mongoose.model("CardItem",CardItemSchema)
module.exports = {CardItem}

const CardItemSchema = new mongoose.Schema({
  quantity: { type: Number, default: 1},

  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ShoppingCart"
  },

  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product" 
  },

  
});