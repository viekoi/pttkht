'use client'
import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const CartButton = () => {
    return (
        <button className=' flex items-center justify-center gap-2 px-3 hover:bg-stone-300 h-[30px] lg:h-[50px] rounded-xl '>
            <div className={` relative after:content-["0"] after:absolute after:w-[18px] after:h-[18px]  lg:after:h-[20px] lg:after:w-[20px] after:bg-orange-400  after:top-[-5px]  after:rounded-full after:flex after:items-center after:justify-center after:text-sm after:right-[-5px]`}>
                <AiOutlineShoppingCart size={30} className=' text-neutral-400'></AiOutlineShoppingCart>
            </div>
            <span className=' hidden lg:block'>Giỏ hàng</span>
        </button>
    )
}

export default CartButton
