//global state 
import { create } from "zustand"
import { actionLogin } from "../api/auth"
import { persist } from "zustand/middleware"

//step 1 : create Store
const authStored = (set) => ({
    user:[], // state 1
    token: null, // state 2
    // function 
    actionLoginWithZustand: async (value)=> {
        try {
            const res = await actionLogin(value)
                // console.log("hello, zustand ddd",res)

            const { payload , token } = res.data

            //set state 
            set( { user:payload ,
                    token:token
            })
            return { success: true , role: payload.role} //object

        } catch (error) {
            return { success: false, error: error.response?.data?.message} //object
        }
    }
})

//step 2 : export Store
const useAuthStore = create(persist(authStored,{name:'auth-store'})) //persist = localstorage 
export default useAuthStore