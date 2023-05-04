'use client'
import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import { BiDollar } from "react-icons/bi";
import axios from 'axios';
import { toast } from 'react-hot-toast'

const Input = ({id,
  label,
  type = "text", 
  disabled, 
  formatPrice,
  register,
  required,
  errors
}) => {


  const [searchTerm, setSearchTerm] = useState('')



  

  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}  
          className="
            text-neutral-700
            absolute
            top-5
            left-2
          "
        />
      )}
      <input
    id={id}
    disabled={disabled}
    {...register(id, { required })}
    placeholder=" "
    type={type}
    className={`
      peer
      w-full
      p-4
      pt-6 
      font-light 
      bg-white 
      border-2
      rounded-md
      outline-none
      transition
      disabled:opacity-70
      disabled:cursor-not-allowed
      ${formatPrice ? 'pl-9' : 'pl-4'}
      ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
      ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
    `}
  /> 
      
      
      <label 
        className={`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          ${formatPrice ? 'left-9' : 'left-4'}
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
           cursor-text
          ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
        `}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  formatPrice: PropTypes.bool,
  required: PropTypes.bool,
  register: PropTypes.any.isRequired,
  errors: PropTypes.any.isRequired,

}

export default Input
