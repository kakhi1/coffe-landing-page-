import React from 'react'
import { TfiShoppingCart } from 'react-icons/tfi';

const Product = () => {
  return (
    <div className='md:px-[88px] w-full md:h-[1340px] md:py-20 '>
        <div className='md:my-20'>
           <h1 className='font-medium text-textColor font md:text-[64px] text-[40px] md:py-10 w-full'>Products</h1>
           <span className='font-normal text-textColor md:text-[24px] text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           </span> 
        </div>
        <div className='md:flex justify-around'>
            <div className='md:w-[378px] w-full md:h-[736px] h-[500px] flex  flex-col justify-end gap-5 p-4'>
                <div className='w-[378px] h-[501px] bg-product'></div>
                <h1 className='text-textColor font-medium md:text-[36px] font-Source'>ceramic mugs</h1>
                <span className='text-textColor font-normal md:text-[24px] font-Source' >   Lorem ipsum dolor sit  consectetur
                       adipiscing elit.</span>
                <div className='flex justify-between'>
                    <button className='md:w-[184px] w-[90px] md:h-[48px] md:text-[24px] text-[12px] font-Source font-medium bg-[#50382C] text-[#FFFFFF]'>BUY NOW</button>
                    <div className='border-2 border-textColor flex justify-center items-center w-[56px] cursor-pointer' ><TfiShoppingCart size={30}/> </div>
                 </div>       

            </div>
            <div className='md:w-[378px] w-full p-4 md:h-[736px] h-[500px] flex  flex-col justify-end gap-5'>
                <div className='w-[378px] h-[501px] bg-product1'></div>
                <h1 className='text-textColor font-medium md:text-[36px] font-Source'>ceramic mugs</h1>
                <span className='text-textColor font-normal md:text-[24px] font-Source' >   Lorem ipsum dolor sit  consectetur
                       adipiscing elit.</span>
                <div className='flex justify-between'>
                    <button className='md:w-[184px] w-[90px] md:h-[48px] md:text-[24px] text-[12px] font-Source font-medium bg-[#50382C] text-[#FFFFFF]'>BUY NOW</button>
                    <div className='border-2 border-textColor flex justify-center items-center w-[56px] cursor-pointer' ><TfiShoppingCart size={30}/> </div>
                 </div>       

            </div>
            <div className='md:w-[378px] md:h-[736px] h-[500px] flex w-full p-4 flex-col justify-end gap-5'>
                <div className='w-[378px] h-[501px] bg-product2'></div>
                <h1 className='text-textColor font-medium md:text-[36px] font-Source'>coffee beans</h1>
                <span className='text-textColor font-normal md:text-[24px] font-Source' >   Lorem ipsum dolor sit  consectetur
                       adipiscing elit.</span>
                <div className='flex justify-between'>
                    <button className='md:w-[184px] w-[90px] md:h-[48px] md:text-[24px] text-[12px] font-Source font-medium bg-[#50382C] text-[#FFFFFF]'>BUY NOW</button>
                    <div className='border-2 border-textColor flex justify-center items-center w-[56px] cursor-pointer' ><TfiShoppingCart size={30}/> </div>
                 </div>       

            </div>
        </div>    
    </div>
  )
}

export default Product