import React from 'react'

function FormInput({register ,name }) {
    return (
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
    )
}

export default FormInput