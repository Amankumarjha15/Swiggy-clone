import React, { useState } from "react";
import ResturantCard from "./ResturantCard";
import { useDispatch } from "react-redux";
import { setFilterValue } from "../utils/filterSlice";

function OnlineFoodDelhivery({ Data , title}) {
  // console.log(Data)
 const filterOptions =[
    {
      Name : "Rating 4.0+"
    },
    {
      Name : "Less Than Rs . 300"
    },
    {
      Name : "Rs . 300 - Rs . 600"
    },
    {
      Name : "Offers"
    },
  ]

  const [activeBtn, setactiveBtn] = useState(null)


  const dispatch = useDispatch()

function handleFilterBtn(filterName){
setactiveBtn(activeBtn === filterName ? null : filterName)
}

dispatch(setFilterValue(activeBtn))

  return (
    <>
      <div>
        <div className="my-8">
        <p className='font-bold text-2xl'>{title}</p>
              <div className="my-7 flex gap-3">
                {
                  filterOptions &&
                  filterOptions.map((data)=>(
                    <button onClick={()=>handleFilterBtn(data.Name)} className={"filterBtn flex gap-3 shadow-lg "  + (activeBtn === data.Name ? " bg-gray-200 border border-black" : "")}>
                       <p>{data.Name}</p>
                       <i className={"fi text-sm mt-1 fi-br-cross-small " + (activeBtn === data.Name ? "visible" : "hidden")}></i>
                       </button>
                  ))
                }
                 {/* <button className='filterBtn'>Rating 4.0+</button>
                  <button className='filterBtn'>Offers</button>
                  <button className='filterBtn'>Rs . 300 - Rs . 600 </button>
                  <button className='filterBtn'>Less Than Rs . 300</button> */}
              </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
        {
        Data &&
        Data.map((restaurant) => (
          <div className="hover:scale-95 duration-200">
            <ResturantCard {...restaurant} link={restaurant?.cta?.link}/>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default OnlineFoodDelhivery;
