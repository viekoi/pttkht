'use client'
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({label,onClick,disabled,outLine,icon:Icon,small}) => {
  return (
    <button  onClick={onClick} disabled={disabled} className={`
     relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${outLine ? 'bg-white':'bg-rose-500'}
     ${outLine ? 'border-black':'border-rose-500'}
     ${outLine ? 'text-black':'text-white'}
     ${small? 'py-1':'py-3'}
     ${small? 'test-sm':'test-md'}
     ${small? 'font-light':' font-semibold'}
     ${small? 'border-[1px]':'border-[2px]'}
     
     
    
    
    `}>
        {Icon && <Icon size={24} className={`absolute left-4 top-3`}></Icon>}
        {label}
    </button>
  )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.any.isRequired,
    disabled: PropTypes.bool,
    outLine: PropTypes.bool,
    small: PropTypes.bool,
    icon: PropTypes.elementType
}

export default Button
