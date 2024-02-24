import Image from "next/image";
import Education from "../../assests/Education.png";

const Card_Home = () =>{
    return (
        <>
        <div className=" md:mx-40 mx-5 mt-28 ">
<div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

    <div className=" single-card w-[350px] gap-4">
        <Image src={Education} alt="education" className="w-[350px]"/>
       <div className=" w-[350px] bg-sky-600 px-4 py-4 rounded-tl-0 rounded-tr-0 rounded-bl-md rounded-br-md ">
        <button className="text-sky-600 bg-white px-1 rounded-md">Health</button>
<h3 className=" text-white text-xl font-medium mt-4">Good Education</h3>
       </div>

    </div>
    <div className=" single-card w-[350px] gap-4">
        <Image src={Education} alt="education" className="w-[350px]"/>
       <div className=" w-[350px] bg-sky-600 px-4 py-4 rounded-tl-0 rounded-tr-0 rounded-bl-md rounded-br-md ">
        <button className="text-sky-600 bg-white px-1 rounded-md">Health</button>
<h3 className=" text-white text-xl font-medium mt-4">Good Education</h3>
       </div>

    </div>
    <div className=" single-card w-[350px] gap-4">
        <Image src={Education} alt="education" className="w-[350px]"/>
       <div className=" w-[350px] bg-sky-600 px-4 py-4 rounded-tl-0 rounded-tr-0 rounded-bl-md rounded-br-md ">
        <button className="text-sky-600 bg-white px-1 rounded-md">Health</button>
<h3 className=" text-white text-xl font-medium mt-4">Good Education</h3>
       </div>

    </div>
    <div className=" single-card w-[350px] gap-4">
        <Image src={Education} alt="education" className="w-[350px]"/>
       <div className=" w-[350px] bg-sky-600 px-4 py-4 rounded-tl-0 rounded-tr-0 rounded-bl-md rounded-br-md ">
        <button className="text-sky-600 bg-white px-1 rounded-md">Health</button>
<h3 className=" text-white text-xl font-medium mt-4">Good Education</h3>
       </div>

    </div>
    <div className=" single-card w-[350px] gap-4">
        <Image src={Education} alt="education" className="w-[350px]"/>
       <div className=" w-[350px] bg-sky-600 px-4 py-4 rounded-tl-0 rounded-tr-0 rounded-bl-md rounded-br-md ">
        <button className="text-sky-600 bg-white px-1 rounded-md">Health</button>
<h3 className=" text-white text-xl font-medium mt-4">Good Education</h3>
       </div>

    </div>
 

</div>
        </div>
        
        </>
    )
}

export default Card_Home;