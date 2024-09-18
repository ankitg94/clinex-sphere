import mongoose from "mongoose";


const HealthSchema =new mongoose.Schema({
   userId:{
      type:mongoose.Types.ObjectId,
      ref:'patientData'
  },
 date:{
    type:Date
 },
 temp:{
    type:Number
 },
 bloodPressure:{
    type:Number
 },
 heartRate:{
    type:Number
 }
 
},{timestamps:true})

const healthData = mongoose.model("health",HealthSchema)
export default healthData