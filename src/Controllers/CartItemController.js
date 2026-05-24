const {Cartitem }=require("../Models/CardItem")
const { Product } = require("../Models/Product")
class CartItem{

/* ______Adding cart______ */
 async AddCart(req, res, next) {
  try {
    const { PanierId, productId } = req.body

    const product = await Product.findById(productId)

    const existcart=await Cartitem.findOne({PanierId, productId})
    
  
    if(!existcart){
      const newCartitem = await Cartitem.create({
      PanierId,
      productId,
      totalPricePerProduct:product.price,
    })
    res.json({
      message: "cart item created",
      data: newCartitem
    })
    }
    else{
      existcart.quantity=existcart.quantity+1
      existcart.totalPricePerProduct=existcart.totalPricePerProduct*existcart.quantity
      await existcart.save()
      res.json({
      message: "cart item  is updated",
      data:existcart  
    })
    }
  } catch (error) {
    next(error)
  }
}
/* ______delete cart______ */
 




}


module.exports=new CartItem