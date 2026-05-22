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

    /* ____Chercher le Produit par son ID _______ */
    const findProductbyId=await Product.findOne({_id:productId})
    /* _______si Pas de ID donc produit n'existe pas ______ */
    if (!findProductbyId) {
      const error = new Error(" Product not found");
      error.status = 404;
       return next(error)
    }
    /* ___Quel Admin est connecté___  */
    const AdminIdConnected=req.user._id
    /* ___si l'admin connecté n'est pas egale a celui qui a crée le produit donc ne le permet pas de modifier _________  */
    if ( AdminIdConnected.toString()!=findProductbyId.createdBy.toString()) {
      const error = new Error("You are not allowed to modify this product");
      error.status = 403;
      return next(error)
    }
    /* ___Modifier le produit_____ */
    const updateProduct=await Product.updateOne({_id:productId},{title, description,image,stock,price,CategoryId})
    res.json({
   "message" : `The Product ${title} is succesfuly updated `,
  /*  ModifyProduct */ /* si on veut afficher  Combien de chose sont modifer ... */
  })
    }
    catch(error){
       return next(error)
    }
  }


async  DeletProduct(req,res,next) {
    try{
    const productId=req.params.id
    /* ____Chercher le Produit par son ID _______ */
    const findProductbyId=await Product.findOne({_id:productId})
    /* _______si Pas de ID donc produit n'existe pas ______ */
    if (!findProductbyId) {
      const error = new Error(" Product not found");
      error.status = 404;
       return next(error)
    }
    /* ___Quel Admin est connecté___  */
    const AdminIdConnected=req.user._id
    /* ___si l'admin connecté n'est pas egale a celui qui a crée le produit donc ne le permet pas de modifier _________  */
    if ( AdminIdConnected.toString()!=findProductbyId.createdBy.toString()) {
      const error = new Error("You are not allowed to delete this product");
      error.status = 403;
      return next(error)
    }
    /* ___Supprimer le produit_____ */
    const deleteProduct=await Product.deleteOne({_id:productId})
    res.json({
   "message" : `The Product  is succesfuly deleted `,
  /*  ModifyProduct */ /* si on veut afficher  Combien de chose sont modifer ... */
  })
    }
    catch(error){
       return next(error)
    }
  }

  /* ================================================= */
/* =====Getting all Products ==== */
/* ================================================ */
async  GetAllProduct(req,res,next){
  try {
  const getALLproduct=await Product.find()

  res.json({
   "message" : `All Product  `,
    getALLproduct
  })
  } catch (error) {
      next(error)
  }
}
  
/* ================================================= */
/* =====Getting all Products of same  category==== */
/* ================================================ */
async  GetAllProductOfCategory(req,res,next){
  try {
  const{ CategoryId}=req.query
  const getproduct=await Product.find({CategoryId})
  res.json({
   "message" : `All Product in  this category`,
    getproduct
  })
  } catch (error) {
      next(error)
  }
}
}


module.exports=new ProductController 