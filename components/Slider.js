// 'use client'
// import React, { useState } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';
// import Container from './Container';

// function Slider({ slides }) {


//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div className=' w-full m-auto py-2 px-2 group'>
//       <Container>
//         <div
//           className='w-full h-[150px] flex justify-center items-center  rounded-2xl bg-center bg-cover duration-500  relative'
//         >
//           {slides[currentIndex]}
          
//           <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-100px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//             <BsChevronCompactLeft onClick={prevSlide} size={30} />
//           </div>
//         {/* Right Arrow */}
//           <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-100px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//             <BsChevronCompactRight onClick={nextSlide} size={30} />
//           </div>
//         <div className='flex justify-center py-2 gap-2 absolute top-[100%] left-[50%]  -translate-x-[50%]'>
//           {slides.map((slide, slideIndex) => (
//             <div
//               key={slideIndex}
//               onClick={() => goToSlide(slideIndex)}
//               className={`rounded-xl text-sm cursor-pointer ${slideIndex === currentIndex ? 'bg-orange-300':'bg-black/10'}`}
//             >
//               <RxDotFilled color='white' size={15} />
//             </div>
//           ))}
//         </div>
//         </div>
//       </Container>
//       {/* Left Arrow */}
//     </div>
//   );
// }

// export default Slider;
// 'use client'
// // import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

//  const  Slider=({slides}) => {
//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={1}
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       {slides?.map((slide,index)=>{
//         return(
//           <SwiperSlide key={index}>{slide}</SwiperSlide>
//         )
//       })}

//     </Swiper>
//   );
// };

// export default Slider

'use client'

import React from 'react'

const Slider = ({slides}) => {
  return (
    <div className='w-full flex overflow-x-scroll snap-x snap-proximity scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 '>
      {slides?.map((slide,index)=>{
        return (
          <div className="min-w-full flex justify-center items-center snap-center" key={index}>
            {slide}
        </div>
        )
      })}
   
    </div>
  )
}

export default Slider
