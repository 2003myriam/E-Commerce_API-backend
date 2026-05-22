const mongoose =require("mongoose")

const ProductSchema=new mongoose.Schema({
  title:{type: String , required:true},
  description:{type:String},
  image:{type:String},
  stock:{type:Number},
  price:{type:Number},
  
   createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Profile"
  },
  CategoryId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category"
  }
})
const Product=mongoose.model("Product",ProductSchema)
module.exports = {Product}