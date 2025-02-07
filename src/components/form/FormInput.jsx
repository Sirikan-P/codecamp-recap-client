import React from 'react'

function FormInput({register ,name , errors}) {
    console.log(errors[name])
    //  || first true
    //  && first false
    return (
        <div>
            <input
                placeholder= {name} //dynamic
                type="text"
                {...register( name )}
                className="
                    border border-gray-400 
                    w-full
                    rounded-md
                    p-1 px-4 "
            />
            {
                errors[name] && <p className="text-sm text-red-500"> {errors[name].message } </p>
            }
        </div>
    )
}

export default FormInput