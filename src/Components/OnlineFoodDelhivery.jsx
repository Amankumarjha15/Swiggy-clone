import React from "react";
import ResturantCard from "./ResturantCard";

function OnlineFoodDelhivery({ Data }) {
  return (
    <>
      <div>
        <div>TopResturant in Delhi</div>
        <div className="grid grid-cols-4 gap-3">
        {Data.map((restaurant) => (
          <div className="hover:scale-95 duration-200">
            <ResturantCard {...restaurant} />
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default OnlineFoodDelhivery;
