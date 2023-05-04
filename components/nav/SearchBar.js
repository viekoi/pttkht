import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
const SearchBar = () => {
  return (
    <div className='flex-1 flex items-center bg-white border-solid border-[1px] border-stone-100 shadow-xl h-[30px] lg:h-[50px] rounded-xl pl-5'>
      <input type="text" placeholder='Tìm Kiếm...'  className=' outline-0  w-full '/>
      <button className=' bg-orange-400 w-[30px] lg:w-[50px] h-full flex items-center justify-center rounded-sm'><AiOutlineSearch></AiOutlineSearch></button>
    </div>
  )
}

export default SearchBar
