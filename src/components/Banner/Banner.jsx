"use client"

import Image from "next/image";
import bgImage from "../../assests/Rectangle 4281.png"
import Logo from "../../assests/Logo.png"
import { useState } from "react";
import Link from "next/link";
import Navbar from "../shared/Navbar";



const Banner = () => {

    const [isOpen, setIsOpen] = useState()
 
    const toggleNavbar = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <div className=" m-0 ">
      {/* <p className="text-black text-4xl font-bold">Mobarak Miah</p> */}
      {/* <Image src={bgImage} className=" opacity-5 h-full" /> */}
      <div>
      <Navbar/>
    <div>
      <h1 className=" text-center text-xl md:text-3xl font-bold mt-32 md:mt-52">I Grow By Helping People In Need</h1>
      <div className=" flex justify-center mt-12">
        <input placeholder="Search here...." className=" px-2 relative left-2 border border-r-0 rounded-l-md  border-gray-400 py-1" type="text" /> <button className="  bg-red-500 px-6 py-1 text-white rounded-r-md">Search</button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Banner;
