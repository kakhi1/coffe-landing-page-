import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-[1210px] h-[1100px] flex md:flex-row flex-col md:gap-10 gap-3 border-t-2 border-black '>
      <div className='md:h-full md:w-[50%] flex flex-col items-start justify-end text-left md:gap-6 gap-2 md:px-[88px]'>
        <h1 className='text-textColor font-normal font-Source  md:text-[64px] text-[32px]'>About Us</h1>
        <span className='font-Source font-normal md:text-[24px] text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Proin sed mauris vel dui feugiat tempus.</span>
        <button className='md:w-[184px] md:h-[48px] md:text-[24px] text-[12px] font-Source font-medium bg-[#50382C] text-[#FFFFFF]'>BUY NOW</button>
        <div className='md:w-[582px] w-full md:h-[820px] h-[400px] bg-[length:375px_600px] bg-no-repeat md:bg-auto bg-about'></div>
      </div>
      <div className='md:h-full flex flex-col w-full md:w-[50%] items-start justify-end md:gap-8 gap-3'>
         <div className='md:w-[584px] w-full md:h-[750px] h-[400px] bg-about1 bg-[length:375px_600px] bg-no-repeat md:bg-auto'></div>
         <span className='font-Source font-normal md:text-[24px] text-[12px] text-left md:w-[584px] w-full'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin sed mauris vel dui feugiat tempus. Suspendisse
          in arcu a dui pretium viverra.Donec sit amet aliquam
          tellus.Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit.Proin sed mauris vel dui feugiat tempus. Suspendisse
          in arcu a dui pretium viverra.Donec sit amet aliquam
          tellus.
         </span>
         <button className='md:w-[184px] md:h-[48px] md:text-[24px] text-[12px] font-Source font-medium border-2 border-[#50382C]'>READ MORE</button>
       </div>
    </div>
  )
}

export default About