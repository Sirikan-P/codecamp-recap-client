import {z} from "zod"

//backend-middlewares/validator.jsx
export const registerSchema = z.object({
    email: z.string().email("check email format"),
    firstname: z.string().min(3, "firstname more than 3 characters"),
    lastname: z.string().min(3, "Lastname more than 3 characters"),
    password: z.string().min(6, "password at least 6 characters"),
    confirmPassword: z.string().min(6, "confirm password at least 6 characters")
}).refine((data) => data.password === data.confirmPassword, {
    message: "confirm password incorrect",
    path: ['confirmPassword']
})

export const loginSchema = z.object({
    email: z.string().email("check email format"),
    password: z.string().min(6, "password at least 6 characters"),

})