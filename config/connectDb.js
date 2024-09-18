import mongoose from "mongoose"

export const databaseConnection =async()=>{
    try{
        const connection =await mongoose.connect(process.env.MONGOURL)
        if(connection){
            console.log("data base connected successfully")
        }
        else{
            console.log("error in connecting the database")
        }

    }catch(error){
        return res.status(500).send({
            success:false,
            message:"error in connection"
        })
    }
}