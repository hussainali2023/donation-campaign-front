"use client"

import Image from "next/image";
import bgImage from "../../../assests/Rectangle 4281.png"
import Logo from "../../../assests/Logo.png"
import { useState } from "react";



const Banner = () => {

    const [isOpen, setIsOpen] = useState()
 
    const toggleNavbar = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <div
      className=""
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* <p className="text-black text-4xl font-bold">Mobarak Miah</p> */}
      <Image src={bgImage} className=" opacity-5"/>
      <div className=" relative -top-[17vh] lg:-top-[550px]">
      <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-black text-2xl font-bold">Logo</a>
          </div>
          <div className="block sm:hidden">
            <button onClick={toggleNavbar} className="text-black hover:text-gray-300 focus:outline-none focus:text-gray-300">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <div className="space-x-4">
              <a href="#" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
      </div>
    </div>
  );
};

export default Banner;
