import React, { useEffect, useState } from 'react';
import OnYourMind from './onYourMind';
import TopResturant from './TopResturant';
import ResturantCard from './ResturantCard';
import OnlineFoodDelhivery from './OnlineFoodDelhivery';


function Body() {

  const [onYourMind, setonYourMind] = useState([])
  const [topResturant, setTopResturant] = useState([])

  
  async function fetchData(){
    const Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const result = await Data.json()
    setTopResturant(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setonYourMind(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
}
useEffect(()=>{
    fetchData()
},[])


  return (
    <div className='w-full mt-3'>
        <div className='w-[80%] mt-3 mx-auto overflow-hidden'>
        <OnYourMind Data={onYourMind}/>
        <TopResturant Data={topResturant}/>
        <OnlineFoodDelhivery Data={topResturant}/>
        </div>
    </div>
  )
}

export default Body