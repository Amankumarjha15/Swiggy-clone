import React, { useContext, useEffect, useState } from 'react';
import OnYourMind from './OnYourMind';
import TopResturant from './TopResturant';
// import ResturantCard from './ResturantCard';
import OnlineFoodDelhivery from './OnlineFoodDelhivery';
import { Coordinates } from '../context/contextApi';
import { useSelector } from "react-redux";
import Shimmer from './Shimmer';
import useRestaurantData from '../Hooks/useRestaurantData';


function Body() {


  const  [onYourMind,topResturant,ResultData,TopResTitle,OnlineTitle] = useRestaurantData()

//   const [onYourMind, setonYourMind] = useState([])
//   const [topResturant, setTopResturant] = useState([])

//   const [ResultData, setResultData] = useState({})

//   const [TopResTitle, setTopResTitle] = useState("")
//   const [OnlineTitle, setOnlineTitle] = useState("")



//   const {Coord : {lat , lng}} = useContext(Coordinates);

  
//   async function fetchData(){
//     const Data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
//     const result = await Data.json();


//     // console.log(result)

//     setResultData(result?.data?.cards[0]?.card?.card?.title)

//     let mainData = result?.data?.cards.find(
//       (data) => data?.card?.card?.id == "top_brands_for_you"
//   )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

//     let mainData2 = result?.data?.cards.find(
//       (data) => data?.card?.card?.id == "restaurant_grid_listing"
//   )?.card?.card?.gridElements?.infoWithStyle?.restaurants;


//   //   let onminddata = result?.data?.cards.find(
//   //     (data) => data?.card?.card?.id == "whats_on_your_mind"
//   // )?.card?.card?.imageGridCards?.info;


//   let onminddata = result?.data?.cards.find(
//     (data) => data?.card?.card?.id == "whats_on_your_mind"
// )?.card?.card?.imageGridCards?.info;

// // console.log(data2)

//     setTopResturant(mainData || mainData2);

//     // setTopResturant(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
//     // setonYourMind(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    
//     setonYourMind(onminddata)


//     setOnlineTitle(result?.data?.cards[2]?.card?.card?.title);
//     setTopResTitle(result?.data?.cards[1]?.card?.card?.header?.title);
//   }
//   useEffect(()=>{
//     fetchData()
//   },[lat , lng])
  



const filterVal = useSelector((state)=>state.filterSlice.filterVal)


const filteredData = topResturant.filter((item) => {
  if (!filterVal) return true;

  switch (filterVal) {
      case "Rating 4.0+":
          return item?.info?.avgRating > 4;
      case "Rs . 300 - Rs . 600":
          return (
              item?.info?.costForTwo?.slice(1, 4) >= "300" &&
              item?.info?.costForTwo?.slice(1, 4) <= "600"
          );
      case "Offers":
        return !!item?.info?.aggregatedDiscountInfoV3;

      case "Less Than Rs . 300":
          return item?.info?.costForTwo?.slice(1, 4) < "300";
      default:
          return true;
  }
});









  return (
    <div className='w-full'>
      {
        topResturant.length ? (

        <div className='w-[90%] xl:w-[80%] mt-3 mx-auto overflow-hidden'>
         
              <OnYourMind Data={onYourMind}/>
              <TopResturant Data={topResturant} title={TopResTitle}/>
              <OnlineFoodDelhivery Data={filterVal ? filteredData : topResturant} title={OnlineTitle}/>
          
        </div>
        ) : <Shimmer/>
      }
    </div>
  )
}

export default Body