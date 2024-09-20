import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ResturantMenu() {
  const { id } = useParams();
  let mainId = id.split("-rest").at(-1);
  // console.log(id.split("-rest"))

  const [resInfo, setResInfo] = useState([]);
  const [MenuData, setMenuData] = useState([]);
  const [discountData, setDiscountData] = useState([]);

//   console.log(discountData)

  async function FetchMenu() {
    let Data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`
    );
    let res = await Data.json();

    //    console.log(res?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)

    setResInfo(res?.data?.cards[2]?.card?.card?.info);
    setDiscountData(
      res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
    setMenuData(
      res?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card
    );
  }

  useEffect(() => {
    FetchMenu();
  }, []);





function handlePrev (){
    
}


function handleNext (){

}






  return (
    <div className="w-full">
      <div className="w-1/2 mx-auto pt-8">
        <p className="text-sm hover:cursor-pointer text-slate-700 hover:text-black">
          <Link to={"/"}>Home </Link>/ <Link to={"/"}>{resInfo.city}</Link> /{" "}
          {resInfo.name}
        </p>
        <h1 className="font-bold pt-6 text-2xl">{resInfo?.name}</h1>
        <div className="w-full h-[206px] bg-gradient-to-t from-slate-200/70 mt-3 px-4 pb-4 rounded-[30px]">
          <div className="w-full h-full bg-white border-slate-200/70 rounded-[30px]">
            <div className="p-4">
              <div className="flex items-center gap-1 font-semibold">
                <i className="fi mt-1 text-green-600 fi-ss-circle-star"></i>
                <span>{resInfo?.avgRating}</span>
                <span>({resInfo?.totalRatingsString})</span>.
                <span>{resInfo.costForTwoMessage}</span>
              </div>

              <p className="underline font-semibold text-orange-600">
                {resInfo?.cuisines?.join(", ")}
              </p>

              <div className="mt-2 flex gap-1">
                <div className="w-[7px] flex flex-col justify-center items-center">
                  <div className="w-[7px] h-[7px] rounded-full bg-gray-400"></div>
                  <div className="w-[1px] h-[25px] bg-gray-400"></div>
                  <div className="w-[7px] h-[7px] rounded-full bg-gray-400"></div>
                </div>
                <div className="flex flex-col gap-2 text-sm font-semibold">
                  <p className="flex gap-3">
                    Outlet
                    <span className="text-gray-400 font-normal">
                      {resInfo.locality}
                    </span>
                  </p>
                  <p>{resInfo?.sla?.slaString}</p>
                </div>
              </div>
            </div>

            <hr className="" />

            <div className="w-full">
              <div className="flex items-center p-4 gap-4">
                <img
                  className="w-7"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/" +
                    resInfo?.feeDetails?.icon
                  }
                  alt=""
                />
                <span className="font-normal text-sm text-gray-500 ">
                  {resInfo?.feeDetails?.message?.replace(/<[^>]*>/g, "")}
                </span>
              </div>
            </div>




        </div>







          <div className="w-full">

            <div className="flex justify-between mt-8">
              <p className="font-bold text-xl">Deals For You.</p>
              <div className="flex gap-3">
                <div
                  onClick={handlePrev}
                  className="cursor-pointer bg-gray-200 rounded-full w-9 h-9 flex justify-center items-center"
                >
                  <i className="fi text-2xl mt-1 fi-rr-arrow-small-left"></i>
                </div>
                <div
                  onClick={handleNext}
                  className="cursor-pointer bg-gray-200 rounded-full w-9 h-9 flex justify-center items-center"
                >
                  <i className="fi text-2xl mt-1 fi-rr-arrow-small-right"></i>
                </div>
              </div>
            </div>
     
            <div className="flex gap-4 mt-5 overflow-hidden">
            {
                discountData.map((data)=>(
                     <Discount data={data}/>
                ))
            }

           </div>


            </div>








            <h2 className="text-center mt-10 font-bold">MENU</h2>



            <div className="w-full mt-6 relative cursor-pointer">
              <div className="w-full p-3 rounded-xl font-semibold text-lg bg-slate-200 text-center">Search For Dishes ?</div>
              <i className="fi fi-rr-search absolute top-3 right-4 text-xl"></i>
            </div>


















          </div>
        </div>
      </div>
    // </div>
  );
}



function Discount({data : {info :{header , offerLogo , couponCode}}}){
    console.log(offerLogo)
    return(
       <div className="flex gap-6 min-w-[328px] h-[76px] p-3 border rounded-2xl">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/" + offerLogo} alt="" />
        <div>
            <h2 className="font-bold text-xl">{header}</h2>
            <p className="text-gray-500">{couponCode}</p>
        </div>
       </div>
    )
}






export default ResturantMenu;
