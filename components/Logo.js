'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Logo = () => {
    const router = useRouter()


    return (
        <Image alt='logo' src={`/images/logo.png`} width={150} height={150} onClick={() => { router.push('/') }} className=' w-[100px]  lg:w-[150px] cursor-pointer'></Image>
    )
}

export default Logo
