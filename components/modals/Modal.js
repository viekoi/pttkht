'use client'
import React,{useCallback, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {IoMdClose} from 'react-icons/io'
import Button from '../Button'


const Modal =({isOpen,onClose,onSubmit,body,title,footer,actionLabel,secondaryAction,secondaryActionLabel,disabled}) => {
    const [showModel,setShowModel] = useState(isOpen)
    useEffect(()=>{
        setShowModel(isOpen)
    },[isOpen])

    const handleClose = useCallback(()=>{
        if(disabled){
            return
        }
        setShowModel(false)
        setTimeout(()=>{
            onClose()
        },300)
    },[disabled,onClose])

    const handleSubmit = useCallback(()=>{
        if(disabled){
            return
        }

        onSubmit()
    },[disabled,onSubmit])

    const handleSecondary = useCallback(()=>{
        if(disabled || !secondaryAction){
            return
        }
        secondaryAction()
    },[disabled, secondaryAction])

    if(!isOpen){
        return null
    }
  return (
   <>
    <div className=" flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[150] outline-none focus:outline-none bg-neutral-800/70">
        <div className=" relative w-3/4 sm:w-2/4 xl:w-1/4 my-6 mx-auto h-auto ">
            <div className={` translate duration-300 h-full ${showModel? 'translate-y-0':'translate-y-full'}  ${showModel? ' opacity-100':'opacity-0'}`}>
                <div className=" translate h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                            <button onClick={handleClose} className='p-1 border-0 hover:opacity-70 transition absolute left-9 '>
                                <IoMdClose size={18}></IoMdClose>
                            </button>
                            <div className=" text-lg font-semibold">{title}</div>
                        </div>
                        <div className=" relative p-6 flex-auto">
                            {body}
                        </div>
                        <div className="flex flex-col gap-2 p-6">
                            <div className="flex items-center gap-4 w-full">
                                {secondaryAction && secondaryActionLabel && <Button disabled={disabled} outLine label={secondaryActionLabel} onClick={handleSecondary}></Button>}  
                                <Button disabled={disabled} label={actionLabel} onClick={handleSubmit}></Button>
                            </div>
                            {footer}
                        </div>
                </div>
            </div>
        </div>
    </div>
    
   </>
  )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onSubmit:PropTypes.func.isRequired,
    title: PropTypes.string,
    body:PropTypes.object,
    footer: PropTypes.object,
    actionLabel:PropTypes.string,
    disabled:PropTypes.bool,
    secondaryAction: PropTypes.func,
    secondaryActionLabel:PropTypes.string
}

export default Modal

