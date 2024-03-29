"use client"

import Image from "next/image";
import bgImage from "../../assests/Rectangle 4281.png"
import Logo from "../../assests/Logo.png"
import { useState } from "react";
import Link from "next/link";



const Navbar = () => {

    const [isOpen, setIsOpen] = useState()
 
    const toggleNavbar = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <div className=" m-0 ">
      <div className>
      <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image alt="logo" className=" w-36" src={Logo}/>
            {/* <a href="#" className="text-black text-2xl font-bold">Logo</a> */}
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
              <Link href="/" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="/donation" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Donation</Link>
              <Link href="/statitics" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Statistics</Link>
              <Link href="/contact" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              <Link href="/login" className=" text-white bg-blue-600 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="text-black block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/donation" className="text-black block px-3 py-2 rounded-md text-base font-medium">Donation</Link>
            <Link href="/statistics" className="text-black block px-3 py-2 rounded-md text-base font-medium">Statistics</Link>
            <Link href="/contact" className="text-black block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <Link href="/login" className=" text-white bg-blue-600 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
          </div>
        </div>
      )}
    </nav>
      </div>
    </div>
  );
};

export default Navbar;
