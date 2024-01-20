import React from 'react'

const Button = ({ children, buttonType }) => {
  return (
    <button className={`
      ${buttonType === "orange" ? "bg-[#FD7B01]" : "bg-[#2F211E]"}
      px-[20px] py-[15px] text-[18px] font-[700] text-white
    `}>
      {children}
    </button>
  )
}

export default Button;