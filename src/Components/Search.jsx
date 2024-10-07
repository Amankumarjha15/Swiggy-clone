import React, { useContext, useEffect, useState } from 'react'
import { Coordinates } from '../context/contextApi'

function Search() {

  const {Coord : {lat , lng}} = useContext(Coordinates);


  const [SearchQuery, setSearchQuery] = useState("")
  const [DishesData, setDishesData] = useState([])



  async function searchDishes(){
    const data = await fetch(`https://www.swiggy.com/mapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${SearchQuery}&trackingId=2043d270-9fee-2ece-b020-e3bbbcc2fd6e&submitAction=ENTER&queryUniqueId=ce0c96b8-63c1-36f8-4453-41a9c306f520`)
    const res = await data.json()
    const finalData =(res?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards.filter(data => data?.card?.card?.info))
    setDishesData(finalData)
    // console.log(SearchQuery)
  }


  useEffect(()=>{
    if(SearchQuery === ""){
      return
    }
    searchDishes()
  },[SearchQuery])



  // console.log(DishesData)


  // {card : {card : {info : {imageId = "" ,name:dish, price , isVeg = 0 },
  //     restaurant : {info : {id , name:resname , avgRating ,sla:{slaString}}}}}}


  return (
    <div className='w-[90%]  xl:w-[70%] mx-auto'>

    

    <input className='' onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder='Search Your Favorite Food From Here' />


  
     
     
<div>
{
  DishesData&&
   DishesData.map(({card : {card : {info : {imageId = "" ,name:dish, price , isVeg = 0 } , restaurant : {info : {name:resname , id , avgRating = 0 , sla : {slaString}}}}}})=>{
     

    return(
      <div>
       <h1>{dish}</h1>
      </div>
    )


}
   )

}
     </div>










    </div>
  )
}

export default Search