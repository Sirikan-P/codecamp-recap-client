//connect authend backend

import axios from "axios";

export const actionRegister = async (value)=>{
    return await axios.post('http://localhost:8000/api/register',value)
}


export const actionLogin = async( value)=>{
    return await axios.post('http://localhost:8000/api/login',value)
}


//current User get role
export const actionCurrentUser = async(token)=>{
    return await axios.get('http://localhost:8000/api/currentuser',{
        headers: { 
            Authorization:`Bearer ${token}`
        }
    })
} 