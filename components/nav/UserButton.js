'use client'
import React, { useState } from 'react'
import Avatar from './Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '../../hooks/useRegisterModal'
import useLoginModal from '../../hooks/useLoginModal';
import {signOut} from 'next-auth/react'
const UserButton = ({ currentUser }) => {

  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='h-auto relative ' onClick={toggleOpen}>
      <button className=' relative flex items-center justify-center gap-2 px-3 hover:bg-stone-300 h-[30px] lg:h-[50px] rounded-xl'>
        <Avatar src={currentUser?.image}></Avatar>
        <span className=' hidden lg:block'>{currentUser? `${currentUser.name}`:'Tài khoản'}</span>
      </button>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            lg:w-[10vw]
            bg-white 
            overflow-hidden 
            right-0
            lg:top-[50px]
            top-[30px]
            text-sm
            h-auto
            z-[100]
          "
        >
          <div className="flex flex-col cursor-pointer ">
            {currentUser ?
              <>
                <MenuItem
                  label="Trang cá nhân"
                  onClick={() => { }}
                />
                <MenuItem
                  label="Đơn hàng của tôi"
                  onClick={() => { }}
                />

                <MenuItem
                  label="Lịch sử mua hàng"
                  onClick={() => { }}
                />

                <MenuItem
                  label="Yêu thích"
                  onClick={() => { }}
                />
                <hr/>
                <MenuItem
                  label="Đăng xuất"
                  onClick={signOut}
                />
              </> : <>
                <MenuItem
                  label="Đăng nhập"
                  onClick={loginModal.onOpen}
                />
                <MenuItem
                  label="Đăng ký"
                  onClick={registerModal.onOpen}
                />
              </>
            }


          </div>
        </div>
      )}
    </div>
  )
}

export default UserButton
