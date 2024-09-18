import jwt from "jsonwebtoken"

export const checkLogin = async(req,res,next)=>{
try{
    const token = req.headers.authorization
    
    if(!token || !token.startsWith("Bearer")){
        return  res.status(500).send({
        success:false,
        message:"token not available"
     })
    }

    const rtoken = token.split(' ')[1]
    const decode = jwt.verify(rtoken,process.env.jwtSecret)
    req.userId   = decode.id 
    
    next()
}catch(error){
    return res.status(500).send({
    success:false,
    message:"error in getting the token"
  })
 }
}