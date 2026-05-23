const express=require("express")
const app =express()


require("dotenv").config();
const port =process.env.PORT || 5000  


const  ProfileRoute=require("./src/Routes/ProfileRoute")
const  CategoryRoute=require("./src/Routes/CategoryRoute")
const  ProductRoute=require("./src/Routes/ProductRoute")
const PanierRoute=require("./src/Routes/PanierRoute")

const connectDB = require("./src/config/db");
app.use(express.json()) 
connectDB()

 
app.use("/Profile",ProfileRoute)
app.use("/Categories",CategoryRoute)
app.use("/Products",ProductRoute)
app.use("/paniers",PanierRoute)



/* ____on importe l'erreur a la fin  pour que ErrorHndler fonctionne_____ */
const { ErrorFunction } = require("./src/middlewares/ErrorHndler");
app.use(ErrorFunction)

app.listen(port,()=>{
  console.log("serveur is running on  port"+port)
})
