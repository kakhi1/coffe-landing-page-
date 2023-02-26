import React from "react";
import { TfiShoppingCart } from 'react-icons/tfi';
import { HiOutlineMenu } from 'react-icons/hi';


const Navbar = () => {
  return (
    <div className="w-full md:h-[100px] h-[50px] flex flex-row justify-between md:px-[88px]">
      <div className="flex items-center">
        <h1 className="text-[#50382C] font-medium md:text-[48px] text-[24px]" >Coffee</h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        <ul className="flex flex-row text-textColor md:text-[20px] font-normal md:gap-4 gap-2 invisible md:visible">      
          <li className="cursor-pointer">
          Home
          </li>
          <li className="cursor-pointer" >
             Products
          </li>
          <li className="cursor-pointer">
            Landing
          </li>
          <li className="cursor-pointer">
            About Us
          </li>
        </ul>
      </div>
      <div className="flex items-center md:gap-4 gap-2 cursor-pointer">
      <TfiShoppingCart size={20}/>
      <HiOutlineMenu size={20} className="visible md:invisible"/>
      </div>
    </div>
  );
};

export default Navbar;
