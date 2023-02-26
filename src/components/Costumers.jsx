import React from 'react'
import { SlArrowLeftCircle,SlArrowRightCircle } from "react-icons/sl";
import { AiFillStar } from 'react-icons/ai';

const Costumers = () => {
  return (
    <div className='w-full md:h-[600px] bg-[#DBC5BA] md:flex items-center justify-center  '>
      <div className='md:w-[1390px] w-full md:h-[429px]'>
        <h1 className='font-Source font-medium text-[#000000] text-[48px]' >What our customers are saying?</h1>
        <div className='md:w-[1390px] w-full flex justify-between pb-8'>
         <SlArrowLeftCircle size={40}/>
         <SlArrowRightCircle size={40}/>
        </div>
        <div className='flex flex-col md:flex-row justify-around p-2'>
          <div className='md:w-[440px] w-full md:h-[294px] h-[150px] rounded-[18px] text-left  bg-white md:p-6 p-2 mb-2'>
            <div className='flex flex-row n-5'><AiFillStar color='#F8D270'/><AiFillStar color='#F8D270'/><AiFillStar color='#F8D270'/><AiFillStar color='#F8D270'/><AiFillStar color='#F8D270'/><AiFillStar color='#F8D270'/></div>
            <div className='md:py-6'><span className='text-[#000000] font-Source font-normal md:gap-5 md:text-[14px] text-[10px]'>There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. What’s more.</span></div>
            <div className='flex flex-row items-center gap-2'>
              <div className='md:w-[51px] w-[25px] md:h-[51px] h-[25px] rounded-full bg-round'></div>
              <h1 className='text-[#50382C] font-Source font-medium'>Serhiy Hajh</h1>
          </div>
          </div>
          <div className='md:w-[440px] w-full md:h-[294px] h-[150px] rounded-[18px] text-left  bg-white md:p-6 p-2 mb-2'>
            <div className='flex flex-row n-5'><AiFillStar color='#F8D270'/><AiFillStar color='#F8D270'/><AiFillStar color='#F8D270'/><AiFillStar color='#F8D270'/><AiFillStar color='#F8D270'/><AiFillStar color='#F8D270'/></div>
            <div className='md:py-6'><span className='text-[#000000] font-Source font-normal md:text-[14px] text-[10px] md:gap-5'>There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. What’s more.</span></div>
            <div className='flex flex-row items-center gap-2'>
              <div className='md:w-[51px] w-[25px] md:h-[51px] h-[25px] rounded-full bg-round1'></div>
              <h1 className='text-[#50382C] font-Source font-medium'>Anyt Hikh</h1>
          </div>
          </div>
          <div className='md:w-[440px] w-full md:h-[294px] h-[150px] rounded-[18px] text-left  bg-white md:p-6 p-2 mb-2' >
            <div className='flex flex-row n-5'><AiFillStar color='#F8D270'/><AiFillStar color='#F8D270'/><AiFillStar color='#F8D270'/><AiFillStar color='#F8D270'/><AiFillStar color='#F8D270'/><AiFillStar color='#F8D270'/></div>
            <div className='md:py-6'><span className='text-[#000000] font-Source font-normal md:text-[14px] text-[10px] md:gap-5'>There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. What’s more.</span></div>
            <div className='flex flex-row items-center gap-2'>
              <div className='md:w-[51px] w-[25px] md:h-[51px] h-[25px] rounded-full bg-round2'></div>
              <h1 className='text-[#50382C] font-Source font-medium'>Dfhgy Uhbj</h1>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Costumers