import { useContext, useEffect, useState } from "react"
import { Coordinates } from "../context/contextApi"


function useRestaurantData() {

    const [onYourMind, setonYourMind] = useState([])
    const [topResturant, setTopResturant] = useState([])
  
    const [ResultData, setResultData] = useState({})
  
    const [TopResTitle, setTopResTitle] = useState("")
    const [OnlineTitle, setOnlineTitle] = useState("")
  
  
  
    const {Coord : {lat , lng}} = useContext(Coordinates);
  
    
    async function fetchData(){
      const Data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
      const result = await Data.json();
  
  
      // console.log(result)
  
      setResultData(result?.data?.cards[0]?.card?.card?.title)
  
      let mainData = result?.data?.cards.find(
        (data) => data?.card?.card?.id == "top_brands_for_you"
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
      let mainData2 = result?.data?.cards.find(
        (data) => data?.card?.card?.id == "restaurant_grid_listing"
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
  
    //   let onminddata = result?.data?.cards.find(
    //     (data) => data?.card?.card?.id == "whats_on_your_mind"
    // )?.card?.card?.imageGridCards?.info;
  
  
    let onminddata = result?.data?.cards.find(
      (data) => data?.card?.card?.id == "whats_on_your_mind"
  )?.card?.card?.imageGridCards?.info;
  
  // console.log(data2)
  
      setTopResturant(mainData || mainData2);
  
      // setTopResturant(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
      // setonYourMind(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      
      setonYourMind(onminddata)
  
  
      setOnlineTitle(result?.data?.cards[2]?.card?.card?.title);
      setTopResTitle(result?.data?.cards[1]?.card?.card?.header?.title);
    }
    useEffect(()=>{
      fetchData()
    },[lat , lng])



    return [onYourMind,topResturant,ResultData,TopResTitle,OnlineTitle] 
 
}

export default useRestaurantData