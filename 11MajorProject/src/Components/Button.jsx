import React from 'react'

function Button({children,
    type="Button",
    bgColor="bg-blue-500",
    textColor="text-white",
    ClassName="",
    ...props

}) {
  return (
    <Button ClassName={`px-4 py-2 rounded-lg ${ClassName} ${bgColor} ${type} ${textColor} `} {...props}></Button>
)
}

export default Button