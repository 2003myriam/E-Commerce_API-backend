const { Profile } = require("../Models/Profile");
const { generateToken } = require("../Utils/Jwt");

class ProfileController{

 /* =========================*/
/* ========================= */
/* ========Register============ */
async  register(req,res,next){
  try {
  console.log(req.body);
  const{ name,email,password,role}=req.body
  
  /* ______Creer un nouveau profile avec insertOne_______ */
  const newProfile=await Profile.insertOne({ name, email,password,role})
  res.json({
   "message" : `New  ${role} is registered`,
    data:newProfile
  })
  } catch (error) {
      next(error)
  }
}
/* =========================*/
/* ========================= */
/* ========Login============ */
async  login(req,res,next){
  try {
  console.log(req.body);
  const{ email,password}=req.body
   /* ______Trouver un Profile deja existant de notre BDD avec findOne _______ */
   const newProfile=await Profile.findOne({email,password}) 
   if(!newProfile){
  /* ici on a utiliser erreur handler au lieu que on fait return on a definie le mssg et le status qu'on veut que l'utilisateur voit comme erreur  */
  const error = new Error("Profile not found");
  error.status = 404;
  next(error)
  }
   
   const payload={
     _id:newProfile._id,
      email:email,
      role:newProfile.role
  }
  const token=generateToken(payload)
 
  res.json({
   "message" : `${email} is logged`,
    data:newProfile || undefined,
    token
    
  })
  } catch (error) {
    console.log(error); 
    next(error)
  }
}
}

module.exports= new ProfileController