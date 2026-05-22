const { Category } = require("../Models/Category");

class CategoryController{

async  AddCategories(req,res,next){
  try {
  console.log(req.body);
  const{ name,description}=req.body
  
  /* ______Creer un nouveau profile avec insertOne_______ */
  const newCategory=await Category.insertOne({ name, description})
  res.json({
   "message" : `New Category is Add`,
    data:newCategory
  })
  } catch (error) {
      next(error)
  }
}

}

module.exports= new CategoryController
