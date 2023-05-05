'use client';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from '../Slider'
import { usePathname, useSearchParams } from 'next/navigation';
import { AiOutlineCamera, AiOutlineUsb } from 'react-icons/ai'
import { CgSmartHomeRefrigerator } from 'react-icons/cg'
import {
  GiLipstick
} from 'react-icons/gi';
import { BiFootball } from 'react-icons/bi'
import { FaCouch } from 'react-icons/fa';
import { BsRobot, BsCarFrontFill } from 'react-icons/bs';
import { IoShirtOutline } from 'react-icons/io5';


import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Thiết bị điện tử',
    icon: AiOutlineCamera,
    description: 'Các sản phẩm thiết bị điện tử',
  },
  {
    label: 'Phụ kiện điện tử',
    icon: AiOutlineUsb,
    description: 'Các sản phẩm phụ kiện điện tử',
  },
  {
    label: 'TV & Thiết bị điện gia dụng',
    icon: CgSmartHomeRefrigerator,
    description: 'Các sản phẩm thiết bị gia dụng'
  },
  {
    label: 'Sức khỏe & làm đẹp',
    icon: GiLipstick,
    description: 'Các sản phẩm sức khỏe & làm đẹp'
  },
  {
    label: 'Mẹ, Bé & Đồ chơi',
    icon: BsRobot,
    description: 'Các sản phẩm mẹ, bé & Đồ chơ'
  },
  {
    label: 'Gia dụng, Đời sống',
    icon: FaCouch,
    description: 'Các sản phẩm gia dụng, đời sống'
  },
  {
    label: 'Thời trang',
    icon: IoShirtOutline,
    description: 'các sản phẩm thời trang'
  },
  {
    label: 'Thể thao, du lịch',
    icon: BiFootball,
    description: 'các sản phẩm thể thao, du lịch'
  },
  {
    label: 'Ô tô, xe máy',
    icon: BsCarFrontFill,
    description: 'Các sản phẩm ô tô, xe máy'
  },



  




]

const Categories = () => {
  const params = useSearchParams();

  const category = params?.get('category');

  const pathname = usePathname();

  const isMainPage = pathname === '/';

  const slideCol = 8

  


  function chunk(arr, size) {
    var subArrayCount = arr.length / size;
    var res = [];
    for (let i = 0; i < subArrayCount; i++) {
      var from = size * i;
      var to = (size * (1 + i));
      var sliced = arr.slice(from, to);
      res.push(sliced);
    }
    return res;
  }

  const chunkCategories = chunk(categories, slideCol)



 
 const slides = chunkCategories.map((items, index) => {
  return (
    <div className={`grid grid-cols-${slideCol} flex-[0_0_100%] `}    key={index}>
      {items.map((item) => (
        <div className={` col-span-1 `} key={item.label}>
          <CategoryBox
            label={item.label}
            icon={item.icon}
            selected={category === item.label}

          />
        </div>
      ))}
    </div>
  )
})


  if (!isMainPage) {
    return null;
  }

  return (
 
      
        <Slider slides={slides}></Slider>
      
   
   
  );
}

export default Categories;