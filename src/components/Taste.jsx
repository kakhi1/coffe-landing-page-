import React from 'react'

const Taste = () => {
  return (
    <div className='w-full h-[1160px] '>
      <div className='w-full md:h-[206px] h-[100px] bg-[#DBC5BA] flex flex-row'>
        <div className='flex items-center justify-center w-[50%]'><h1 className='font-medium font-Source md:text-[48px] text-[24px] text[#000000]'>Organic Products</h1></div>
        <div className='h-full flex flex-col justify-center items-center border-l-[1px] border-textColor w-[50%]' >
          <h1 className='font-medium font-Source md:text-[48px] text-[24px] text[#000000]'>1 Million+</h1>
          <span className='font-normal font-Source md:text-[24px] text-[12px] text[#000000]'>sales through-out the world </span>
        </div>
      </div>
      <div className='h-[954px] w-full md:flex flex-row justify-start items-center md:ml-[116px] md:gap-12 gap-6'>
        <div className=' md:w-[551px] md:h-[780px] h-[750px] w-full  relative justify-center items-center flex flex-col'>
          <div className='bg-taste md:w-[500px] w-full md:h-[750px] h-full bg-no-repeat absolute z-10'></div>
          <div className='bg-[#DBC5BA] w-[500px] h-[750px] absolute bottom-0 left-0'></div>
        </div>
        <div className='md:w-[630px] w-full md:h-[555px] flex flex-col items-start justify-around gap-4 text-left'>
          <h1 className='font-medium text-textColor md:text-[64px] text-[40px]  '>We give you the best taste . . .</h1>
          <span className='font-normal text-textColor md:text-[24px] text-[12px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Proin sed mauris vel dui feugiat tempus. Suspendisse
               in arcu a dui pretium viverra.Donec sit amet aliquam
               tellus.Lorem ipsum dolor sit amet, consectetur adipiscing 
               elit.Proin sed mauris vel dui feugiat tempus. Suspendisse
               in arcu a dui pretium viverra.Donec sit amet aliquam
               tellus.</span>
               <button className='md:w-[184px] w-[90px] md:h-[48px] md:text-[24px] text-[12px] font-Source font-medium bg-[#50382C] text-[#FFFFFF]'>BUY NOW</button>     
        </div>
      </div>
    </div>
  )
}

export default Taste