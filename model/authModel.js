import mongoose, { Types } from "mongoose";

const patientSchema =new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
},{timestamps:true});

const patientData=mongoose.model("pateint",patientSchema)
export default patientData ;