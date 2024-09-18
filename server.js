import express from "express"
import cors from "cors"
import { json } from "express";
const app = express();
import healthRoute from './Route/healthRoute.js'
import authRoute from "./Route/authRoute.js"
import { configDotenv } from "dotenv";
import { databaseConnection } from "./config/connectDb.js";


configDotenv()
databaseConnection()
app.use(cors())
app.use(json())



app.use("/api/v1/health",healthRoute)
app.use("/api/v1/auth",authRoute)




const Port = process.env.PORT ||4040 ;
app.listen(Port,()=>{
    console.log("server running successfully")
})
