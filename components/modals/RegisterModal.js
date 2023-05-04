'use client'
import React, { useCallback, useState,useEffect} from 'react'
import axios from 'axios'
import { FcGoogle } from 'react-icons/fc'
import {
  useForm
} from 'react-hook-form'
import useRegisterModal from '../../hooks/useRegisterModal'
import useLoginModal from '../../hooks/useLoginModal'

import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/Input'
import { toast } from 'react-hot-toast'
import Button from '../Button'
import { signIn } from 'next-auth/react'
import { useSearchParams,useRouter } from 'next/navigation'


const RegisterModal = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get('error');


  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()

  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors, } } = useForm({ defaultValues: { name: '', email: '', password: '' } })



  const onSubmit = (data) => {
    setIsLoading(true)
    axios.post('/api/register', data).then((res) => {
      if(res.data?.message){
        toast.error(res.data.message)
      }
      else{
        toast.success('đăng ký thành công')
        registerModal.onClose()
      }
    }).catch((error) => {
      toast.error('đã có lỗi...')
    }).finally(() => {
      setIsLoading(false)
    })


  }

  
  
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title='Chào mừng đến với Lazada' subtitle='Tạo một tài khoản' />
      <Input id='email' label='Email' disabled={isLoading} register={register} errors={errors} validateAction={(data)=>validateEmail}  required></Input>
      <Input id='name' label='Tên người dùng' disabled={isLoading} register={register} errors={errors} required></Input>
      <Input id='password' type='password' label='Mật khẩu' disabled={isLoading} register={register} errors={errors} required></Input>


    </div>
  )

  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal])

  const footerContent=(
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button outLine label='Tiếp tục bằng tài khoản Google' icon={FcGoogle}  onClick={() => signIn('google')} ></Button>
      <div 
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p>Đã có tài khoản?
          <span 
            onClick={onToggle} 
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            > Đăng nhập</span>
        </p>
      </div>
    </div>
  )

  useEffect(() => {
    if(search || search === 'OAuthAccountNotLinked'){
      toast.error("Email này đã được sử dụng")
      router.push('/')
      registerModal.onOpen()
    }
  }, [search,router,registerModal]);

  
  return (
    <Modal disabled={isLoading} isOpen={registerModal.isOpen} title='Đăng ký' actionLabel='Tiếp tục' onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent}></Modal>
  )
}




export default RegisterModal

