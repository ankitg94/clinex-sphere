import express from "express" 
import { createRecordController, deleteData, getmyAllData, getSingleData, updateData } from "../controller/healthCoontroller.js"
import { checkLogin } from "../middleWare/authMidle.js"
const route =express.Router()

route.post("/create",checkLogin,createRecordController)
route.get("/getall",checkLogin,getmyAllData)
route.get("/getOne/:id",checkLogin,getSingleData)
route.put("/getupdate/:id",checkLogin,updateData)
route.delete("/delete/:id",checkLogin,deleteData)



export default route