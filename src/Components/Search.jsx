import React, { useContext, useEffect, useState } from 'react'
import { Coordinates } from '../context/contextApi'
import AddToCartButton from './AddToCartButton';
import SearchCard from './SearchCard';
import { SearchShimmer } from './Shimmer';

function Search() {

  const {Coord : {lat , lng}} = useContext(Coordinates);


  const [SearchQuery, setSearchQuery] = useState("")
  const [DishesData, setDishesData] = useState([])
  const [Shimmer, setShimmer] = useState(false)



    async function recommendDish () {
         
      
      // const data = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${lat}&lng=${lng}&str=${SearchQuery}&trackingId=null&includeIMItem=true`)
      const res = await data.json()
      const finalData = (res?.data?.suggestions).filter(data => data?.type ==="DISH")
      console.log(res)
    }
    
    
    // https://www.swiggy.com/dapi/restaurants/search/v3?lat=25.5960176&lng=85.2298706&str=Pizza&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=1f6a9f85-0bb6-1196-a8f2-7d906de8fdba&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22z5s9vrflt9bnyqwgvbo3%22%2C%22dishFamilyId%22%3A%22846647%22%2C%22dishFamilyIds%22%3A%5B%22846647%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D
    
    
    
    async function searchDishes(){
      setShimmer(true)
      
      const data = await fetch(`${import.meta.env.VITE_BASE_URL}/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${SearchQuery}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=1f6a9f85-0bb6-1196-a8f2-7d906de8fdba&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22z5s9vrflt9bnyqwgvbo3%22%2C%22dishFamilyId%22%3A%22846647%22%2C%22dishFamilyIds%22%3A%5B%22846647%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`)
    // const data = await fetch(`https://www.swiggy.com/mapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${SearchQuery}&trackingId=2043d270-9fee-2ece-b020-e3bbbcc2fd6e&submitAction=ENTER&queryUniqueId=ce0c96b8-63c1-36f8-4453-41a9c306f520`)
    const res = await data.json()
    const finalData =(res?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards.filter(data => data?.card?.card?.info))
    setShimmer(false)
    setDishesData(finalData)
    console.log(finalData)
  }

   let x = "";

  function handleSearchData(e){
      let val = e.target.value.trim()
      if(e.keyCode == 13){
        setSearchQuery(val)
      }
     
  }



  useEffect(()=>{
    if(SearchQuery === ""){
      return
    }
    searchDishes()
  },[SearchQuery])

  // h-[calc(100vh-15rem)]

  return (
    <div className='w-[90%] min-h-[70vh]  xl:w-[70%] mx-auto'>

    <input  onKeyDown={handleSearchData} className='w-full p-6 my-10 border-2 focus:outline-none border-black ' type="text" placeholder='Search Your Favorite Food From Here' />



  
     
{
  Shimmer ? <SearchShimmer/> :
<div className='grid  grid-cols-1 md:grid-cols-2 bg-[#f4f5f7]'>
{
  

   DishesData.map((data,i)=>(
     
<SearchCard key={i} data={data}/>

      // <div className='w-[90%] h-[250px] m-5 bg-white text-black rounded-3xl'>
      //      <div className="h-[30%] border-b-4 flex justify-between mx-5 items-center gap-3">
      //       <div>
      //       <h1 className='font-bold line-clamp-1'>{resname}</h1>
      //       {
      //         avgRating && <div className="flex items-center gap-3"> <i className="fi mt-1 fi-ss-star text-green-700"></i> <span className='text-slate-700'> ({avgRating})</span> <span className='text-slate-700'>{slaString}</span> </div>
      //       }
      //       </div>

      //       <div>
      //       <i className="fi fi-br-angle-right"></i>
      //       </div>

      //      </div>


          
      //     <div className="h-[70%] m-5 flex justify-between">
      //       <div className="w-[60%] flex flex-col gap-3 p-3">
      //       <img className="w-4" src={isVeg === 1 ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh71sfIQVPk_TuhnuWB0Q1E6FlciHqRH-wRA&s" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/768px-Non_veg_symbol.svg.png"} alt="" />
      //       <h1 className='font-bold text-xl line-clamp-2'>{dish}</h1>
      //       <h1 className='font-bold text-lg text-slate-500'>₹{price/100}</h1>
      //       </div>


      //       <div className="w-[35%] relative">
      //       <img className="rounded-2xl w-[156px] h-[130px] aspect-square" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId} alt="" />
      //       <AddToCartButton/>
      //       </div>
      //     </div>



      // </div>
    


  )
   )
 

}
     </div>
}










    </div>
  )
}

export default Search