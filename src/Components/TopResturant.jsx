import React from 'react'
import { useState , useEffect } from 'react';
import ResturantCard from './ResturantCard';

function TopResturant({Data =[] , title}) {
  // console.log(Data)

  // const [Data,setData] = useState([]);
  const [Value, setValue] = useState(0);


  // async function fetchData(){
  //     const Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  //     const result = await Data.json()
  //     setData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //     // console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  // }
  // useEffect(()=>{
  //     fetchData()
  // },[])





  function handleNext() {
    setValue((prev)=>prev + 40)
  }
  function handlePrev() {
    setValue((prev)=>prev - 40)
  }
  return (
    Data&&
    <div className='mt-10  w-full'>
          <div className='flex justify-between mt-5'>
                <p className='font-bold text-2xl'>{title}</p>
               <div className='flex gap-3'>
               <div onClick={handlePrev} className='cursor-pointer bg-gray-200 rounded-full w-9 h-9 flex justify-center items-center'>
                    <i className="fi text-2xl mt-1 fi-rr-arrow-small-left"></i>
                </div>
                <div onClick={handleNext} className='cursor-pointer bg-gray-200 rounded-full w-9 h-9 flex justify-center items-center'>
                    <i className="fi text-2xl mt-1 fi-rr-arrow-small-right"></i>
                </div>
               </div>
            </div>
            <div className={`flex mt-4 gap-5  w-full duration-300`} style={{translate : `-${Value}%`}}>
                {  
                Data &&
                Data.map((restaurant)=>(
      <div className='hover:scale-95 duration-200'> 
          {/* <div className='min-w-[295px] h-[182px] relative'>

              <img className='w-full h-full object-cover rounded-2xl' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restaurant?.info?.cloudinaryImageId} alt="" />
              <div className='bg-gradient-to-t from-black from-1% to-transparent to-40% w-full h-full rounded-2xl top-0 absolute'></div>
              <p className='absolute bottom-0 text-2xl text-white ml-2 mb-2 font-bold'>{restaurant?.info?.aggregatedDiscountInfoV3?.header +" "+ restaurant?.info?.aggregatedDiscountInfoV3?.subHeader}</p>

          </div>

          <div className='mt-3'>
              <h2 className='text-lg font-bold'>{restaurant?.info?.name}</h2>
              <p className='flex items-center gap-2 text-base font-semibold'><i className="fi mt-1 text-green-600 fi-ss-circle-star"></i> {restaurant?.info?.avgRating} - <span>{restaurant?.info?.sla?.slaString}</span></p>
              <p className='line-clamp-1 text-black/60 font-medium'>{restaurant?.info?.cuisines?.join(" , ")}</p>
              <p>{restaurant?.info?.locality}</p>
          </div> */}
          <ResturantCard {...restaurant} link={restaurant?.cta?.link}/>

      </div>
                ))
                }
            </div>

            <hr className='border mt-5'/>

    </div>
  )
}

export default TopResturant