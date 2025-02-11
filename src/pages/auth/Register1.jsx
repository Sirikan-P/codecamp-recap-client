import { createAlert } from "../../utils/createAlert"
import { useForm } from "react-hook-form"
import FormInput from "../../components/form/formInput"
import Buttons from "../../components/form/ฺButtons"

//validation
import { registerSchema } from "../../utils/validators"
import { zodResolver } from "@hookform/resolvers/zod"
import { actionRegister } from "../../api/auth"

function Register1() {

//JS
const { register , handleSubmit ,formState ,reset } = useForm({
    //use validate
    resolver:zodResolver(registerSchema)
})
// register use = naming input +state + onchange  
// handle Submit use = hdlSubmit
// formState 
// reset is function

const {  isSubmitting , errors } = formState // boolean , error object
console.log(errors)

const hdlSubmit = async (value)=>{

    //Deley 
    await new Promise((resolve) => setTimeout(resolve,3000) )


    try {
        const res = await actionRegister(value) //value data from state 
       
            //console.log(res)
        reset()
        createAlert("success","register success")
    } catch (error) {
      

        //sweet alert
        createAlert("info",error.response?.data?.message)
            //console.log(error.response.data.message)
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
                text-center"> Register 1</h1>
            <form onSubmit ={ handleSubmit(hdlSubmit) } >
                <div className="
                    flex flex-col
                    gap-2
                    py-4" >

                    <FormInput register={register} name = {"email"} errors={errors}/>
                    <FormInput register={register} name = {"firstname"} errors={errors}/>
                    <FormInput register={register} name = {"lastname"}  errors={errors}/>
                    <FormInput register={register} name = {"password"} type="password" errors={errors}/>
                    <FormInput register={register} name = {"confirmPassword"} type="password" errors={errors}/>

                </div>
                <div className="flex justify-center">
                    <Buttons isSubmitting={ isSubmitting } label={ "Register"} />
                    
                </div>
            </form>
        </div> 
    </div>
  )
}

export default Register1