import React from 'react'
import { useState , useEffect } from 'react';

function TopResturant() {

  const [Data,setData] = useState([]);
  const [Value, setValue] = useState(0);


  async function fetchData(){
      const Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const result = await Data.json()
      setData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  useEffect(()=>{
      fetchData()
  },[])





  function handleNext() {
    setValue((prev)=>prev + 40)
  }
  function handlePrev() {
    
  }
  return (
    <div className='mt-16  w-full'>
          <div className='flex justify-between mt-5'>
                <p className='font-bold text-2xl'>Top restaurant chains in Delhi</p>
               <div className='flex gap-3'>
               <div onClick={handlePrev} className='cursor-pointer bg-gray-200 rounded-full w-9 h-9 flex justify-center items-center'>
                    <i className="fi text-2xl mt-1 fi-rr-arrow-small-left"></i>
                </div>
                <div onClick={handleNext} className='cursor-pointer bg-gray-200 rounded-full w-9 h-9 flex justify-center items-center'>
                    <i className="fi text-2xl mt-1 fi-rr-arrow-small-right"></i>
                </div>
               </div>
            </div>
            <div className={`flex mt-4 gap-5  w-full`} style={{translate : `-${Value}%`}}>
                {  
                Data.map((restaurant)=>(
                  <div className='min-w-[295px] h-[182px]'>
                  <img className='w-full h-full object-cover rounded-2xl' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restaurant?.info?.cloudinaryImageId} alt="" />
                  </div>
                ))
                }
            </div>

            <hr className='border'/>

    </div>
  )
}

export default TopResturant