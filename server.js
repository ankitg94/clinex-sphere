import express from "express"
import cors from "cors"
import { json } from "express";
const app = express();
import healthRoute from './Route/healthRoute.js'
import authRoute from "./Route/authRoute.js"
import { configDotenv } from "dotenv";
import { databaseConnection } from "./config/connectDb.js";
import path from "path"; 
configDotenv()
databaseConnection()
app.use(cors())
app.use(json())

app.use("/api/v1/health",healthRoute)
app.use("/api/v1/auth",authRoute)

//static files
app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
});


const Port = process.env.PORT ||4040 ;
app.listen(Port,()=>{
    console.log("server running successfully")
})
