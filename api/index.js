import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoute from "./routes/userRoute.js"
import authRoute from "./routes/authRoute.js"

dotenv.config()

mongoose.connect(process.env.MONGO)      
.  then(()=>{
    console.log("connected to db ")   
})
.catch((error) =>{
    console.log(error)    
})  
       

const app = express()    
app.use(express.json())   


app.listen(4000,() =>{ 
  
   console.log("server is running on port 4000")  
});     

app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)