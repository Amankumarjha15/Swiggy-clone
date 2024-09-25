import React from "react";
import ResturantCard from "./ResturantCard";

function OnlineFoodDelhivery({ Data , title}) {
  // console.log(Data)
  return (
    <>
      <div>
        <div className="my-5">
        <p className='font-bold text-2xl'>{title}</p>
        </div>
        <div className="grid grid-cols-4 gap-3">
        {Data.map((restaurant) => (
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
