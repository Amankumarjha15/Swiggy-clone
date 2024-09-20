import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ResturantMenu() {
    const {id} = useParams()
    let mainId = id.split("-rest").at(-1)
    // console.log(id.split("-rest"))




    const [resInfo, setResInfo] = useState([])
    const [MenuData, setMenuData] = useState([])
    const [discountData, setDiscountData] = useState([])


    // console.log(resInfo)
    
    
   async function FetchMenu(){
               let Data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`)
               let res = await Data.json()



            //    console.log(res?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)



               setResInfo(res?.data?.cards[2]?.card?.card?.info)
               setDiscountData(res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)
               setMenuData(res?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
    }

    useEffect(()=>{
        FetchMenu()
    },[])


  return (
    <div className='w-full'>

        <div className='w-1/2 mx-auto pt-8'>
           <p className='text-sm hover:cursor-pointer text-slate-700 hover:text-black'><Link to={"/"}>Home </Link>/ <Link to={"/"}>{resInfo.city}</Link> / {resInfo.name}</p>
           <h1 className='font-bold pt-6 text-2xl'>{resInfo?.name}</h1>
           <div className='w-full h-[206px] bg-gradient-to-t from-slate-200/70 mt-3 px-4 pb-4 rounded-[30px]'>
                <div className='w-full h-full bg-white border-slate-200/70 rounded-[30px]'>
                <div className="p-4">
                <div className="flex items-center gap-1 font-semibold">
                <i className="fi mt-1 text-green-600 fi-ss-circle-star"></i>
                <span>{resInfo?.avgRating}</span>
                <span>({resInfo?.totalRatingsString})</span>
                .
                <span>{resInfo.costForTwoMessage}</span>
                </div>
                 
                 <p className='underline font-semibold text-orange-600'>{resInfo?.cuisines?.join(", ")}</p>

                <div className='mt-2 flex gap-1'>
                    <div className='w-[7px] flex flex-col justify-center items-center'>
                        <div className='w-[7px] h-[7px] rounded-full bg-gray-400'></div>
                        <div className='w-[1px] h-[25px] bg-gray-400'></div>
                        <div className='w-[7px] h-[7px] rounded-full bg-gray-400'></div>
                    </div>
                    <div className='flex flex-col gap-2 text-sm font-semibold'>
                        <p className='flex gap-3'>Outlet<span className='text-gray-400 font-normal'>{resInfo.locality}</span></p> 
                        <p>{resInfo?.sla?.slaString}</p>
                    </div>
                </div>
                </div>

                <hr className=''/>

                <div className='w-full'>
                    <div className='flex items-center p-4 gap-4'>
                        <img className='w-7' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/" + resInfo?.feeDetails?.icon} alt="" />
                        <span>{resInfo?.feeDetails?.message.replace(/<[^>]*>/g,"")}</span>
                    </div>
                </div>
                
                
                
                </div>
           </div>
        </div>
        
    </div>
  )
}

export default ResturantMenu