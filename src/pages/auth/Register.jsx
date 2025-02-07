import axios from "axios"
import { useState } from "react"
import { createAlert } from "../../utils/createAlert"

function Register() {

//JS
const [value,setValue] = useState({
    email:'',
    firstname: '',
    lastname: '',
    password: '',
    confirmPassword: ''
}) 
const hdlOnChange = (e)=>{
    // set state destructure object 
    setValue({
        ...value,[e.target.name]: e.target.value
    })
}

const hdlSubmit = async (e)=>{
    e.preventDefault() //form prevent refresh

    try {
        const res = await axios.post('http://localhost:8000/api/register',value) //value data from state 
       
        //console.log(res)
        createAlert("success","register success")
    } catch (error) {
      
        //console.log(error.response.data.message)
        //sweet alert
        createAlert("info",error.response.data.message)
    }

}

  return (
    <div className="
         flex
         w-full
         h-full
         justify-end">
        <div className="
            w-64 border 
            p-4
            rounded-md "> 
            <h1 className="
                text-xl 
                font-bold 
                text-center"> Register </h1>
            <form onSubmit ={hdlSubmit} >
                <div className="
                    flex flex-col
                    gap-2
                    py-4" >
                    <input 
                        placeholder="Email"
                        type="text"
                        name="email"
                        className="
                        border border-gray-400 
                        w-full
                        rounded-md
                        p-1 px-4 "
                        onChange={hdlOnChange} />
                    <input 
                        placeholder="firstname"
                        type="text"
                        name="firstname"
                        className="
                        border border-gray-400 
                        w-full
                        rounded-md
                        p-1 px-4 "
                        onChange={hdlOnChange} />
                    <input 
                        placeholder="lastname"
                        type="text"
                        name="lastname"
                        className="
                        border border-gray-400 
                        w-full
                        rounded-md
                        p-1 px-4 "
                        onChange={hdlOnChange} />
                    <input 
                        placeholder="password"
                        type="text"
                        name="password"
                        className="
                        border border-gray-400 
                        w-full
                        rounded-md
                        p-1 px-4 "
                        onChange={hdlOnChange} />
                    <input 
                        placeholder="confirmPassword"
                        type="text"
                        name="confirmPassword"
                        className="
                        border border-gray-400 
                        w-full
                        rounded-md
                        p-1 px-4 "
                        onChange={hdlOnChange} />
                </div>
                <div className="flex justify-center">
                    <button className="
                    bg-green-900 shadow 
                    text-white
                    px-1 py-1
                    rounded-md
                    hover:cursor-pointer" 
                    >
                        Register</button>
                </div>
            </form>
        </div> 
    </div>
  )
}

export default Register