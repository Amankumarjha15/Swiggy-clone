import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ResturantMenu() {
  const { id } = useParams();
  let mainId = id.split("-rest").at(-1);
  // console.log(id.split("-rest"))

  const [resInfo, setResInfo] = useState([]);
  const [MenuData, setmenuData] = useState([]);
  const [discountData, setDiscountData] = useState([]);
  // const [currIndex, setcurrIndex] = useState(null);

  // console.log(MenuData)


  async function FetchMenu() {
        
        let Data = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`
        );
        let res = await Data.json();
        setResInfo(res?.data?.cards[2]?.card?.card?.info);
        setDiscountData(
          res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
        );


        let actualMenu = (res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.filter(data=>data?.card?.card.itemCards || data?.card?.card.categories)
        setmenuData(actualMenu);
       
  }

  useEffect(() => {
    FetchMenu()
  }, []);





function handlePrev (){
    
}


function handleNext (){

}


// function tooglefun (i){
// console.log(i)
// setcurrIndex( i === currIndex ? null : i )
// }





  return (
    <div className="w-full">
      <div className="w-1/2 mx-auto pt-8">
        <p className="text-sm hover:cursor-pointer text-slate-700 hover:text-black">
          <Link to={"/"}>Home </Link>/ <Link to={"/"}>{resInfo.city}</Link> /{" "}
          {resInfo.name}
        </p>
        <h1 className="font-bold pt-6 text-2xl">{resInfo?.name}</h1>
        <div className="w-full h-[206px] bg-gradient-to-t from-slate-200/70 mt-3 p-4 rounded-[30px]">
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

            {/* <div className="w-full">
              <div className="flex items-center p-4 gap-4">
                <img
                  className="w-7"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/uploa…uto,w_40,h_40/"+resInfo?.feeDetails?.icon
                  }
                  alt="logo"
                />
                <span className="font-normal text-sm text-gray-500 ">
                  {resInfo?.feeDetails?.message?.replace(/<[^>]*>/g, "")}
                </span>
              </div>
            </div> */}




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





            {/* <div>
                {
                    MenuData && MenuData.map(({card : {card : {itemCards, title}}},i)=>(
                    <div>
              <div className="flex justify-between ">
                      <h1>{title} ({itemCards?.length})</h1>
                       <i className="fi text-2xl fi-rr-angle-small-down" onClick={()=>tooglefun(i)}></i> 
              </div>
                    { 
                       currIndex === i &&
                      <div className="m-10">
                      {
                        itemCards.map(({card : {info}})=>(
                          <h1>{info?.name}</h1>
                        ))
                      }
                      </div>}
                    </div>
                 ))
                }
            </div> */}


            <div>
            {
              MenuData && MenuData.map(({card : {card}})=>(
                <MenuCard card={card}/>
              ))
            }
            </div>


















          </div>
        </div>
      </div>
  );
}



function Discount({data : {info :{header , offerLogo , couponCode}}}){
    // console.log(offerLogo)
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



function MenuCard ({card}){

  let open = false;
  
  if (card["@type"]) {
   open = true
  }

  const [isOpen, setisOpen] = useState(open)

function toggledropdown (){
  setisOpen((prev) => !prev)
}



if(card.itemCards){

  const {title,itemCards} = card;

  return(
    <>
    <div className="mt-7 mb-7">
    <div className="flex justify-between">
      <h1 className={"font-bold text-" + (card["@type"] ? "xl" : "base")}>{title} ({itemCards?.length})</h1>
      <i className={"fi text-2xl fi-rr-angle-small-" + (isOpen ? "up" : "down")} onClick={toggledropdown}></i>
    </div>
      {isOpen && <MenuDetails itemCards={itemCards}/>}
    </div>


    <hr className={"my-5 border-" + (card["@type"] ? "[10px]" : "[px]")}/>

  </>

  )

} else{
  const {title,categories} = card;
  return(
    <div>
    <h1 className="font-bold text-xl">{card.title}</h1>
    {
      categories.map((data)=>(
        <MenuCard card={data}/>
      ))
    }
    </div>
  )
}


}

function MenuDetails ({itemCards}){
  console.log(itemCards)
return(
  <div className="my-5">
    {
      itemCards.map(({card : {info :{name ,defaultPrice, price ,finalPrice, itemAttribute : {vegClassifier}, ratings :{aggregatedRating : {rating ,ratingCountV2}}, description , imageId}}})=>(
      <>
       <div className="flex justify-between w-full">
        <div className="w-[70%]">
          <p>{vegClassifier}</p>
          <h1>{name}</h1>
          <p>₹{defaultPrice /100}</p>
          <p> <i className="fi fi-ss-star"></i> <span> {rating}({ratingCountV2}) </span> </p>
          <p>{description}</p>

        </div>
        <div className="w-[20%]">
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId} alt="" />
          <button>ADD</button>
        </div>
       </div>  

       <hr className="my-5"/> 

       </>   


      ))
    }
  </div>
)
}





export default ResturantMenu;
