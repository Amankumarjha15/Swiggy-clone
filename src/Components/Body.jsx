import React, { useEffect, useState } from 'react'

function Body() {

    const [Data,setData] = useState([]);
    async function fetchData(){
        const Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const result = await Data.json()
        console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
        setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    }
    useEffect(()=>{
        fetchData()
    },[])


  return (
    <div className='w-full mt-3'>
      
        <div className='w-[80%] mt-3 mx-auto overflow-hidden'>
            <div>
                <p>What's in your mind?</p>
            </div>
            <div className='flex'>
                {
                    Data.map((item)=>(
                        <img className='w-40' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`} alt="" />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Body