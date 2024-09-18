import healthData from "../model/healthModel.js"

export const createRecordController =async(req,res)=>{
    try{
        const userId =req.userId
        const {date,temp,bloodPressure,heartRate}=req.body
        if(!date ||!temp ||!bloodPressure ||!heartRate){
            return res.status(400).send({
                success:false,
                message:"please fill all  the health  record"
             })
        }
        const data =await healthData({date,temp,bloodPressure,heartRate,userId}).save()

            return res.status(200).send({
            success:true,
            message:"your health record created successfull",
            data
        })
    }catch(error){
        return res.status(500).send({
        success:false,
        message:"error in creating the health  record"
     })
    }
}

export const getmyAllData = async(req,res)=>{
try{
    const userId = req.userId
    
    const allData = await healthData.find({userId})
    return res.status(200).send({
        success:true,
        total:allData.length,
        message:"your health record ",
        allData
    })

}catch(erorr){
        return res.status(500).send({
        success:false,
        message:"error in getting all health  record"
     })
}
}
export const getSingleData =async(req,res)=>{
    try{ 
        const id =req.params.id;

        const singleData =await healthData.find({_id:id})
        return res.status(200).send({
            success:true,
            message:"your health record ",
            singleData
        })
 
    }catch(error){
            return res.status(500).send({
            success:false,
            message:"error in getting the health  record"
            })

    }
}

export const updateData = async(req,res)=>{
    try{
       const _id =req.params.id;
       const {date,temp,bloodPressure,heartRate}=req.body

       const updatedData =await healthData.findByIdAndUpdate({_id},{date,temp,bloodPressure,heartRate},{new:true})
       return res.status(200).send({
            success:true,
            message:"your data will be updated successfully",
            updatedData
       })
    }catch(error){
            return res.status(500).send({
            success:false,
            message:"error in creating the health  record"
            })

    }
}

  

export const deleteData =async(req,res)=>{
    try{
      const _id = req.params.id;
      const deleteData =await healthData.findByIdAndDelete(_id)

      if(deleteData){
        return res.status(200).send({
            success:true,
            message:"data deleted successfull"
        })
      }
    }catch(error){
           return res.status(500).send({
            success:false,
            message:"error in creating the health  record"
            })
       
    }
}