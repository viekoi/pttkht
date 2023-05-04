'use client'
import React, { useState,useCallback,useEffect} from 'react'
import { useRouter,useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react';
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



const LoginModal = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const search = searchParams?.get('error');
    const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)



  const { register, handleSubmit, formState: { errors, } } = useForm({ defaultValues: { email:'', password:'' } })

  const onSubmit = 
  (data) => {
    setIsLoading(true);

    signIn('credentials', { 
      ...data, 
      redirect: false,
    })
    .then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('Đăng nhập thành công');
        router.refresh();
        loginModal.onClose();
      }
      
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  }
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title='Chào mừng bạn trở lại với Lazada' subtitle='đăng nhập vào tài khoản sẵn có' />
      <Input id='email' label='Email' disabled={isLoading} register={register} errors={errors} required></Input>
      <Input id='password' type='password' label='Mật khẩu' disabled={isLoading} register={register} errors={errors} required></Input>


    </div>
  )

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal])

  const footerContent=(
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button outLine label='Tiếp tục bằng tài khoản Google' icon={FcGoogle} onClick={()=>signIn(`google`)}></Button>

      <div 
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p>Chưa có tài khoản?
          <span 
            onClick={onToggle} 
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            > Đăng ký ngay</span>
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
  }, [search,registerModal,router]);

  
  return (
    <Modal disabled={isLoading} isOpen={loginModal.isOpen} title='Đăng nhập' actionLabel='Tiếp tục' onClose={loginModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent}></Modal>
  )
}




export default LoginModal


