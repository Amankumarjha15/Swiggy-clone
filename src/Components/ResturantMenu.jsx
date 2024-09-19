import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ResturantMenu() {
    const {id} = useParams()
    const [MenuData, setMenuData] = useState("")
    // console.log(id.split("-rest"))
    let mainId = id.split("-rest")[1]
    
   async function FetchMenu(){
               let Data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`)
               let res = await Data.json()
          
               setMenuData(res?.data?.cards[0]?.card?.card?.text)
    }

    useEffect(()=>{
        FetchMenu()
    },[])


  return (
    <div>
        ResturantMenu   ---- {MenuData} {mainId}
    </div>
  )
}

export default ResturantMenu