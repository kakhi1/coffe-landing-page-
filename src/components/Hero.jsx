import React from 'react'

const Hero = () => {
  return (
      <div className='w-full h-[700px] md:flex flex-row'> 
        <div className='flex flex-col md:h-full w-full text-left justify-center md:gap-10 gap-4 md:mx-[88px]'>
          <h1 className='w-full md:text-[48px] text-[24px] text-textColor font-bold '>We have your coffee!</h1>
          <span className="text-textColor md:text-[24px] text-[15px] w-full font-normal gap-2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin sed mauris vel dui feugiat tempus. 
                Suspendisse in arcu a dui pretium viverra.
                Donec sit amet aliquam tellus.</span>
        </div>
        <div className='md:h-full bg-hero w-full md:bg-local h-[80%] bg-[length:375px_600px] md:bg-auto bg-no-repeat md:mr-[72px]'>
        </div>
      </div>
  );
}

export default Hero