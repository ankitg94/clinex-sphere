import axiosInstance from "./AxiosInstance"

export const register = async(data)=>{
    try{
    const response =await axiosInstance.post("/auth/create",data)
    if(response){
        return response
    }
    else{
        console.log("request failed")
    }
    }catch(error){
        console.log(error)
    }
}
export const login = async(data)=>{
    try{
        const response = await axiosInstance.post("/auth/login",data)
        if(!response.data.token){         
            console.log("request failed")
        }
        else{
            localStorage.setItem("token",response.data.token)
            return {success:true, token:response.data.token}
        }
    }catch(error){
        console.log(error)
    }
}

export const createRecord = async(data)=>{
try{
  const response =await axiosInstance.post("/health/create",data)
  return response 
}catch(error){
    console.log(error)
}
}

export const getALLRecord = async()=>{
    try {
        const response = await axiosInstance.get("/health/getall")
        return response.data.allData
    } catch (error) {
        console.log(error);   
    }
}

export const getSingleRecord = async(id)=>{
    try {
        const response = await axiosInstance.get(`/health/getOne/${id}`)
        return response

    } catch (error) {
        console.log(error)
    }
} 
export const updateData = async(id,data)=>{
    try {
     const response = await axiosInstance.put(`/health/getupdate/${id}`,data) 
     return response
    }catch (error) {
     console.log(error);
    }
}

export const deleteData =async(id)=>{
    try {
 const response = await axiosInstance.delete(`/health/delete/${id}`)
    return response
    } catch (error) {
        console.log(error);
        
    }
}