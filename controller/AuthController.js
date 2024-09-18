import  Jwt  from "jsonwebtoken";
import patientData from "../model/authModel.js"
import bcrypt from "bcrypt";
export const  createdata = async(req,res)=>{
try{
    const {name,email,password} = req.body

    if(!name ||!email ||!password){
           return res.status(400).send({
            success:false,
            message:"please fill all the details"
        })
    }
    const user =await patientData.findOne({email})
    if(user){
        return res.status(400).send({
            success:false,
            message:"email is already register"
        })

    }
    const salt =await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password,salt)
    const data =await patientData({name,email,password:hashed}).save()
        return res.status(200).send({
        success:true,
        message:"your entry created successfully",
        data
    })
}catch(error){
        return res.status(500).send({
        success:false,
        message:"error in creating data"
    })
}
}

export const logindata =async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
                return res.status(400).send({
                success:false,
                message:"please fill all the filled"
            })
        }
        const checkMail = await patientData.findOne({email})
        if(!checkMail){
                return res.status(400).send({
                success:false,
                message:"this mail is not register"
            })
        }

        const checkPass = await bcrypt.compare(password,checkMail.password)
        if(!checkPass){
            return res.status(400).send({
            success:false,
            message:"password is not match"
        })
    }
   const token =await Jwt.sign({id:checkMail._id},process.env.jwtSecret,{expiresIn:'7d'})
  
    return  res.status(200).send({
        success:true,
        message:"login success",
        token
    })

    }catch(error){
            return res.status(500).send({
            success:false,
            message:"error in creating data"
        })

    }
}
