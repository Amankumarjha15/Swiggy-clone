import React, { useContext, useEffect, useState } from 'react';
import OnYourMind from './onYourMind';
import TopResturant from './TopResturant';
import ResturantCard from './ResturantCard';
import OnlineFoodDelhivery from './OnlineFoodDelhivery';
import { Coordinates } from '../context/contextApi';


function Body() {

  const [onYourMind, setonYourMind] = useState([])
  const [topResturant, setTopResturant] = useState([])

  const [ResultData, setResultData] = useState({})

  const [TopResTitle, setTopResTitle] = useState("")
  const [OnlineTitle, setOnlineTitle] = useState("")



  const {Coord : {lat , lng}} = useContext(Coordinates);

  
  async function fetchData(){
    const Data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
    const result = await Data.json();

    setResultData(result?.data?.cards[0]?.card?.card?.title)

    setTopResturant(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(result)
    setonYourMind(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    // console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    // console.log(result?.data?.cards[2]?.card?.card?.title)
    setOnlineTitle(result?.data?.cards[2]?.card?.card?.title);
    setTopResTitle(result?.data?.cards[1]?.card?.card?.header?.title);
}
useEffect(()=>{
    fetchData()
},[lat , lng])

// console.log(ResultData)
// console.log(result)


  return (
    <div className='w-full mt-3'>
        <div className='w-[80%] mt-3 mx-auto overflow-hidden'>
        <OnYourMind Data={onYourMind}/>
        <TopResturant Data={topResturant} title={TopResTitle}/>
        <OnlineFoodDelhivery Data={topResturant} title={OnlineTitle}/>
        </div>
    </div>
  )
}

export default Body