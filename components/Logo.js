'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {



    return (
        <Link href={'/'}
        >
            <Image alt='logo' src={`/images/logo.png`} width={150} height={150} className=' w-[100px]  lg:w-[150px] cursor-pointer'></Image>
        </Link>
    )
}

export default Logo
