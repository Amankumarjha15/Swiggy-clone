import React from "react";
import { Link } from "react-router-dom";

function ResturantCard(restaurant) {
  return (
    <Link to={`/ResturantMenu/${restaurant?.info?.id}`}>
      <div className="min-w-[295px] h-[182px] relative">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restaurant?.info?.cloudinaryImageId
          }
          alt=""
        />
        <div className="bg-gradient-to-t from-black from-1% to-transparent to-40% w-full h-full rounded-2xl top-0 absolute"></div>
        <p className="absolute bottom-0 text-2xl text-white ml-2 mb-2 font-bold">

          {
            restaurant?.info?.aggregatedDiscountInfoV3 ? restaurant?.info?.aggregatedDiscountInfoV3?.header +
            " " +
            restaurant?.info?.aggregatedDiscountInfoV3?.subHeader : ""
          }

        {/* //   {restaurant?.info?.aggregatedDiscountInfoV3?.header +
        //     " " +
        //     restaurant?.info?.aggregatedDiscountInfoV3?.subHeader} */}
        </p>
      </div>

      <div className="mt-3">
        <h2 className="text-lg font-bold">{restaurant?.info?.name}</h2>
        <p className="flex items-center gap-2 text-base font-semibold">
          <i className="fi mt-1 text-green-600 fi-ss-circle-star"></i>{" "}
          {restaurant?.info?.avgRating} -{" "}
          <span>{restaurant?.info?.sla?.slaString}</span>
        </p>
        <p className="line-clamp-1 text-black/60 font-medium">
          {restaurant?.info?.cuisines?.join(" , ")}
        </p>
        <p>{restaurant?.info?.locality}</p>
      </div>
    </Link>
  );
}

export default ResturantCard;
