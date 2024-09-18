import express from "express"
import { createdata, logindata } from "../controller/AuthController.js"

const route =express.Router()

route.post("/create",createdata)
route.post("/login",logindata)



export default route



