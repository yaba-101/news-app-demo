import React from "react";
import { UserCircleIcon, MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="relative grid grid-cols-3 text-gray-300 p-[3px]  py-[5px]"> 
      <div className="flex items-center "> 
        <UserCircleIcon className="h-5 cursor-pointer" />
      </div>

      <div className="flex items-center border border-gray-400 rounded-lg  pl-2 text-sm ">
        <MagnifyingGlassIcon className="h-3"/>
        <input 
          className="bg-transparent items-center text-white placeholder-gray-400 w-[50px] 
          placeholder:text-[12px] outline-none pl-[3px]" 
          placeholder="search.."
          type="text" 
        />
      </div>
      <div className="flex items-center justify-end ">
        <BellIcon className="h-5 cursor-pointer"/>
      </div>
    </header>
  );
}

export default Header;
