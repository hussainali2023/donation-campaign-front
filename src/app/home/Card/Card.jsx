import Image from "next/image";
import Education from "../../../assests/Education.png";
import Cloth from "../../../assests/cloth.png"
import Food from "../../../assests/food.png"
import Health from "../../../assests/health.png"
import Link from "next/link";


const donationItem = [
  {
    donationName:"Good Education",
    donationCategory:"Education",
    donationLogo: Education
  },
  {
    donationName:"Good Health",
    donationCategory:"Health",
    donationLogo: Health
  },
  {
    donationName:"Good Education",
    donationCategory:"Education",
    donationLogo: Education
  },
  {
    donationName:"Good Education",
    donationCategory:"Education",
    donationLogo: Education
  },
  {
    donationName:"Good Education",
    donationCategory:"Education",
    donationLogo: Education
  },
  
]

const Card = () =>{
    return (
        <>
      {/* <!-- Card Blog --> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Grid --> */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* <!-- Card --> */}
    {
donationItem.map((donation) => (
  <>
  <Link donationItem={donationItem} href={`/details/${donation.donationCategory}`}>
  <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="h-58 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
        <Image alt="donation_logo" className="h-58 w-full" src={donation.donationLogo}></Image>
      </div>
      <div className="p-4 md:p-6">
        <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
          {donation.donationCategory}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
          {donation.donationName}
        </h3>
       
      </div>
      
    </div>
  </Link>
  </>
)) 
    }
   
   
    {/* end card  */}

   
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Card Blog --> */}
        
        </>
    )
}

export default Card;