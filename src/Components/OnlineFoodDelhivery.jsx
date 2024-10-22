import React, { useState } from "react";
import ResturantCard from "./ResturantCard";
import { useDispatch } from "react-redux";
import { setFilterValue } from "../utils/filterSlice";

function OnlineFoodDelhivery({ Data , title}) {
  // console.log(Data)
 const filterOptions =["Rating 4.0+","Less Than Rs . 300","Rs . 300 - Rs . 600","Offers"]

  const [activeBtn, setactiveBtn] = useState(null)


  const dispatch = useDispatch()

function handleFilterBtn(filterName){
setactiveBtn(activeBtn === filterName ? null : filterName)
}

dispatch(setFilterValue(activeBtn))

  return (
    Data&&
    <>
      <div>
        <div className="my-8">
        <p className='font-bold text-2xl'>{title}</p>
              <div className="my-7 flex flex-wrap gap-3">
                {
                  filterOptions &&
                  filterOptions.map((Name,i)=>(
                    <div key={i}>
                    <button onClick={()=>handleFilterBtn(Name)} className={"filterBtn flex gap-3 shadow-lg "  + (activeBtn === Name ? " bg-gray-200 border border-black" : "")}>
                       <p>{Name}</p>
                       <i className={"fi text-sm mt-1 fi-br-cross-small " + (activeBtn === Name ? "visible" : "hidden")}></i>
                       </button>
                       </div>
                  ))
                }
                 {/* <button className='filterBtn'>Rating 4.0+</button>
                  <button className='filterBtn'>Offers</button>
                  <button className='filterBtn'>Rs . 300 - Rs . 600 </button>
                  <button className='filterBtn'>Less Than Rs . 300</button> */}
              </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
        {
        Data &&
        Data.map((restaurant,i) => (
          <div key={i} className="hover:scale-95 duration-200">
            <ResturantCard {...restaurant} link={restaurant?.cta?.link}/>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default OnlineFoodDelhivery;
