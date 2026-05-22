const {Product} =require("../Models/Product")
class ProductController{


  /* ______Adding Product_________ */
  async  AddProduct(req,res,next) {
    try{
    console.log(req.body);
    const {title, description,image,stock,price,CategoryId}=req.body
    const createdBy=req.user._id
    const newProduct=await Product.insertOne({title, description,image,stock,price,CategoryId,createdBy})
    res.json({
   "message" : `The Product ${title} is succesfuly create `,
    data:newProduct
  })
    }
    catch(error){
      console.log(error)
      next(error)
    }
  }
/* ______Modify Product_________ */
async  ModifyProduct(req,res,next) {
    try{
    console.log(req.body);
    const productId=req.params.id
    const {title, description,image,stock,price,CategoryId}=req.body
    const ModifyProduct=await Product.updateOne({_id:productId},{title, description,image,stock,price,CategoryId})
    res.json({
   "message" : `The Product ${title} is succesfuly updated `,
    data:ModifyProduct
  })
    }
    catch(error){
      console.log(error)
      next(error)
    }
  }


}
module.exports=new ProductController 