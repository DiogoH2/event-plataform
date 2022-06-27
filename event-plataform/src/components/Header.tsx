import { Logo } from "./Logo";
import { FaBars } from 'react-icons/fa';
import { useState } from "react";


export function Header() {

  return (
  
    <header className="lg:w-full lx:w-full 2lx:w-full lg:py-5 xl:py-5 2xl:py-5 flex lg:items-center lg:justify-center xl:items-center xl:justify-center 2xl:items-center 2xl:justify-center bg-gray-700 border-b border-gray-600 md:justify-between md:p-2 sm:justify-between sm:p-2">
         <div>
         <Logo />
         </div>
        <div className="2xl: invisible xl:invisible sm:visible md:visible cursor-pointer hover:text-blue-500">
        <FaBars/>
        </div>
    </header>
    
  )
  
}
