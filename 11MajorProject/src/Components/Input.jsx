import React,{useId} from 'react'

const Input=React.forwardRef(function Input({
    label,
    type="text",
    className="",
    ...props
},ref){
    const Id=useId();
    return <div className='width-full'>
        {label && <label className='inline-block mb-1 pl-1'
            htmlFor={id}>
                {label}
            </label>}
        <input
        type={type}
        className={`${className} px-3 py-2 roudned-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full `}
        ref={ref}
        {...props}
        id={Id}
        />
    </div>
})

export default Input