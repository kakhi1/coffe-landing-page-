import React from 'react'
import { AiFillTwitterCircle,AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='w-full h-[400px] flex items-center justify-center'>
        <div className='w-[1230px] h-[281px] md:flex flex-col justify-center'>
            <div className='md:flex flex-row'>
                <div className='md:w-[615px] w-full h-[181px] text-left flex flex-col justify-end'>
                  <div className='md:w-[400px] md:h-[181px]'>
                    <h1 className='text-textColor font-medium font-Source text-[36px] '>Coffee</h1>
                    <span className='text-textColor font-normal font-Source text-[24px] '>Lorem ipsum dolor sit 
                        consectetur adipiscing elit.
                    </span>    
                    <div className='flex gap-10 mt-4'>
                     <AiFillLinkedin color='#50382C' size={24}/>
                     <AiFillTwitterCircle color='#50382C' size={25}/>
                    </div>
                  </div>                
                </div>
                <div className='md:w-[615px] w-full flex flex-row justify-around'>  
                <div>
                    <h1 className='text-textColor font-Source font-medium md:text-[28px] text-[14px]'>Menu</h1> 
                    <h2 className='text-textColor font-Source font-normal md:text-[20px] text-[10px]'>products</h2> 
                    <h2 className='text-textColor font-Source font-normal md:text-[20px] text-[10px'>landing</h2> 
                    <h2 className='text-textColor font-Source font-normal md:text-[20px] text-[10px'>about us</h2>
                </div>
                <div>
                    <h1 className='text-textColor font-Source font-medium md:text-[28px] text-[14px]'>products</h1> 
                    <h2 className='text-textColor font-Source font-normal md:text-[20px] text-[10px]'>coffee</h2> 
                    <h2 className='text-textColor font-Source font-normal md:text-[20px] text-[10px'>Chocolate</h2> 
                    <h2 className='text-textColor font-Source font-normal md:text-[20px] text-[10px'>Paper cups</h2>
                    <h2 className='text-textColor font-Source font-normal md:text-[20px] text-[10px'>mugs</h2>
                </div>
                <div>
                    <h1 className='text-textColor font-Source font-medium md:text-[28px] text-[14px]'>about us</h1> 
                    <h2 className='text-textColor font-Source font-normal md:text-[20px] text-[10px]'>Who are you ?</h2> 
                    <h2 className='text-textColor font-Source font-normal md:text-[20px] text-[10px'>Contact us </h2> 
                    <h2 className='text-textColor font-Source font-normal md:text-[20px] text-[10px'>Help</h2>
                </div>
              </div> 
            </div>
            <div className='w-full md:h-[100px] flex justify-center items-center border-t-2 border-[#50382C] border-current'> <span>Copyright © 2021 Coffee - All Rights Reserved</span></div>
            
        </div>
    </div>
  )
}

export default Footer