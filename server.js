import express from "express"
import cors from "cors"
import { json } from "express";
const app = express();
import healthRoute from './Route/healthRoute.js'
import authRoute from "./Route/authRoute.js"
import { configDotenv } from "dotenv";
import { databaseConnection } from "./config/connectDb.js";
import path from 'path'
import { fileURLToPath } from "url";

configDotenv()
databaseConnection()

//02-hosting k liye(start)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
// hositng (end)

app.use(cors())
app.use(json())



//03-hoisting(start)
app.use(express.static(path.join(__dirname, './client/build')))
// hositng (end)

app.use("/api/v1/health",healthRoute)
app.use("/api/v1/auth",authRoute)


//04-hoisting(start)
app.use("*",function(req,res){
       res.sendFile(path.join(__dirname,"./client/build/index.html"));
});
// hositng (end)


const Port = process.env.PORT ||4040 ;
app.listen(Port,()=>{
    console.log("server running successfully")
})
