import { createAlert } from "../../utils/createAlert"
import { useForm } from "react-hook-form"
import FormInput from "../../components/form/formInput"
import Buttons from "../../components/form/ฺButtons"

//Navigate
import { useNavigate } from "react-router"

//validation
import { loginSchema } from "../../utils/validators"
import { zodResolver } from "@hookform/resolvers/zod"
import { actionLogin } from "../../api/auth"
import useAuthStore from "../../store/auth-store"


function Login() {
  //JS 

  //zustand : global state
  const actionLoginWithZustand = useAuthStore( (state)=>state.actionLoginWithZustand)

  //use navigate function
  const navigate = useNavigate()

  //react hook form 
  const { register, handleSubmit, formState, reset } = useForm({
    //use validate
    resolver: zodResolver(loginSchema)
  })
  // register use = naming input +state + onchange  
  // handle Submit use = hdlSubmit
  // formState 
  // reset is function

  const { isSubmitting, errors } = formState // boolean , error object
  //console.log(errors)

  //react-hook-form
  const hdlSubmit = async (value) => {

    //Deley animation
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const res = await actionLoginWithZustand(value) //value data from state
      // const res = await actionLogin(value)  
      console.log(res)
      if(res.success){
        roleRedirect(res.role)
        reset()
        createAlert("success", "welcome back")
      }else{
        createAlert("info","something wrong")
      }



  }

  const roleRedirect = (role) => {
    //code
    if (role ==='ADMIN'){
      navigate('/admin')
    }else{
      navigate('/user')
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
                text-center"> Login </h1>
        <form onSubmit={handleSubmit(hdlSubmit)} >
          <div className="
                    flex flex-col
                    gap-2
                    py-4" >

            <FormInput register={register} name={"email"} errors={errors} />
            <FormInput register={register} name={"password"} type="password" errors={errors} />

          </div>
          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label={"Login"} />

          </div>
        </form>
      </div>
    </div>
  )
}

export default Login