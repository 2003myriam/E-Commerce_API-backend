/* ================= */
/* Au lieu d'ecrire a chaque fois le block de erreur dans les controlleurs on utilise directement ce middlware  */
/* ================= */
function ErrorFunction(err,req,res,next) {
   const message=err.message || "internal error"
   const statusCode=err.status || 500
   return res.status(statusCode).json({message})   
}
module.exports={ErrorFunction}