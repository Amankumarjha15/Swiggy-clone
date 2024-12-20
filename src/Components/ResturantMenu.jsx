import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext, Coordinates } from "../context/contextApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart , deleteItem ,clearCart } from "../utils/cartSlice";
import toast from "react-hot-toast";
import AddToCartButton from "./AddToCartButton";
import { MenuShimmer } from "./Shimmer";

function ResturantMenu() {
  const { id } = useParams();
  let mainId = id.split("-rest").at(-1);
  // console.log(id.split("-rest"))

  const [resInfo, setResInfo] = useState([]);
  const [MenuData, setmenuData] = useState([]);
  const [discountData, setDiscountData] = useState([]);
  const [TopPicksData, setTopPicksData] = useState([])

  const {Coord : {lat , lng}} = useContext(Coordinates);

  // const [currIndex, setcurrIndex] = useState(null);

  // console.log(TopPicksData)


  async function FetchMenu() {
        
        let Data = await fetch(`${import.meta.env.VITE_BASE_URL}/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`);
        let res = await Data.json();

















        
        const resInfo = res?.data?.cards.find((data) =>
          data?.card?.card?.["@type"].includes("food.v2.Restaurant")
      )?.card?.card?.info;

      // console.log(resInfo);

      const discountInfo = res?.data?.cards.find((data) =>
          data?.card?.card?.["@type"].includes("v2.GridWidget")
      )?.card?.card?.gridElements?.infoWithStyle?.offers;

      setResInfo(resInfo);
      setDiscountData(discountInfo);

      let actualMenu = res?.data?.cards.find((data) => data?.groupedCard);

      // console.log(res);

      setTopPicksData(
          (actualMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
              (data) => data.card.card.title == "Top Picks"
          )[0]
      );

      setmenuData(
          actualMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
              (data) =>
                  data?.card?.card?.itemCards || data?.card?.card?.categories
          )
      );




























        // setResInfo(res?.data?.cards[2]?.card?.card?.info);
        // setDiscountData(
        //   res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
        // );


        // let actualMenu = (res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.filter(data=>data?.card?.card.itemCards || data?.card?.card.categories)
        // setmenuData(actualMenu);

        // setTopPicksData((res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.filter(data=>data?.card?.card.title == "Top Picks")[0])
        // // console.log((res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.filter(data=>data?.card?.card.title == "Top Picks")[0])
       
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
    <>

    {
      MenuData.length ? (

        <div className="w-full">
          <div className="w-[95%] xl:w-1/2 mx-auto pt-8">
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
            </div>
    
    
    
    
    
    
    
              <div className="w-full">
    
                <div className="flex justify-between mt-8">
                  <p className="font-bold text-xl">Deals For You</p>
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
                    discountData.map((data,i)=>(
                         <Discount key={i} data={data}/>
                    ))
                }
    
               </div>
    
    
                </div>
    
    
    
    
    
    
    
    
                <h2 className="text-center mt-10 font-bold">MENU</h2>
    
    
    
                <div className="w-full mt-6 relative cursor-pointer">
                  <Link to={"/search"}>
                  <div className="w-full p-3 rounded-xl font-semibold text-lg bg-slate-200 text-center">Search For Dishes ?</div>
                  <i className="fi fi-rr-search absolute top-3 right-4 text-xl"></i>
                  </Link>
                </div>
    
    
    
    
    
    
    
    
            <div>
             { 
             TopPicksData && 
              <div className="w-full">
    
                <div className="flex justify-between mt-8">
                  <p className="font-bold text-xl">{TopPicksData?.card?.card?.title}</p>
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
                  TopPicksData && 
                    TopPicksData.card?.card?.carousel.map(({creativeId , dish : { info : {defaultPrice , price}}},i) =>{ 
                      return(
                        <div key={i} className="min-w-[400px] h-[405px] relative">
                          <img className="w-full h-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" + creativeId} alt="" />
                          <div className="absolute bottom-4 text-white flex justify-between w-full px-5">
                            <p className="font-bold">₹ {defaultPrice /100 || price /100}</p>
                            <button className="px-10 py-2 font-bold text-green-700 bg-white rounded-xl"><AddToCartButton/></button>
                            
                          </div>
                        </div>
                    )})
                }
    
               </div>
    
    
                </div>
             }
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
                  MenuData && MenuData.map(({card : {card}},i)=>(
                    <MenuCard key={i} card={card} resInfo={resInfo}/>
                  ))
                }
                </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
              
            </div>
          </div>
      ) : <MenuShimmer/>
    }
    
  </>
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



function MenuCard ({card , resInfo}){

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
      {isOpen && <MenuDetails itemCards={itemCards} resInfo={resInfo}/>}
    </div>


    <hr className={"my-5  border-" + (card["@type"] ? "[30px]" : "[10px]")}/>

  </>

  )

} else{
  const {title,categories} = card;
  return(
    <div>
    <h1 className="font-bold text-xl">{card.title}</h1>
    {
      categories.map((data,i)=>(
        <MenuCard key={i} card={data} resInfo={resInfo}/>
      ))
    }
    </div>
  )
}


}

function MenuDetails ({itemCards , resInfo}){
  // console.log(itemCards)
  return(
    <div className="my-5">
    {
      itemCards.map(({card : {info}},i)=>(
        <MenuDetailsCard key={i} info={info} resInfo={resInfo}/>
      ))
    }
  </div>
)
}



function MenuDetailsCard({info , resInfo}) { 
        
  const {name ,defaultPrice, price ,finalPrice, itemAttribute , ratings :{aggregatedRating : {rating ,ratingCountV2}}, description , imageId , isVeg = 0} = info;




  const [isMore, setisMore] = useState(false)

  const [diffRes, setdiffRes] = useState(false)

  // const {cartData , setcartData} = useContext(CartContext);
  const cartData = useSelector((state)=> state.cartSlice.cartItems)
  const resInfoLocalStorage = useSelector((state)=> state.cartSlice.resInfo)
  const dispatch = useDispatch()
  
  


  // function HandleAddToCart(){
  //     const isAdded = cartData.find((data)=> data.id === info.id);
  //     // console.log(resInfo)
  //     // let resInfoLocalStorage = JSON.parse(localStorage.getItem("resInfo")) || []
  //     if(!isAdded){
  //       if (resInfoLocalStorage.name === resInfo.name || resInfoLocalStorage.length === 0) {
  //         // setcartData((prev)=>[...prev , info])
  //         // localStorage.setItem("cartData" , JSON.stringify([...cartData , info]))
  //         // localStorage.setItem("resInfo" , JSON.stringify(resInfo))
  //         dispatch(addToCart({info , resInfo}))
  //         toast.success("Food Added To Cart")
  //       } else {
  //         // alert("Selected item is from unother resturant please clear the cart or select items from this " + resInfoLocalStorage.name + " only")
  //         toast.error("Order Food From  " + resInfoLocalStorage.name + "  Only")
  //         setdiffRes((prev)=>!prev)
  //       }
  //     }else{
  //       // alert("Item Is Already Added In Your Cart")
  //       toast.error("Already In Your Cart")
  //     }
  // }



  // function handleDiffRes(){
  //   setdiffRes((prev)=>!prev)
  // }
  // function handleClearCart(){
  //   dispatch(clearCart())
  //   handleDiffRes()
  //   toast.success("Your Cart Is Cleared")
  // }
  
  
  
  return(
<div className="w-full">
 <div className="flex justify-between w-full min-h-[182px]">
  <div className="w-[50%] md:w-[70%]">
    {/* {
      vegClassifier === "VEG" ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh71sfIQVPk_TuhnuWB0Q1E6FlciHqRH-wRA&s" alt="" /> : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/768px-Non_veg_symbol.svg.png" alt="" />
    } */}
    <img className="w-4" src={isVeg === 1 ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh71sfIQVPk_TuhnuWB0Q1E6FlciHqRH-wRA&s" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/768px-Non_veg_symbol.svg.png"} alt="" />
    <h1 className="font-bold text-lg">{name}</h1>
    <p className="font-bold text-lg">₹{defaultPrice /100 || price /100 || finalPrice /100}</p>

     {

      rating && <div className="flex items-center gap-1"> <i className="fi mt-1 fi-ss-star text-green-700"></i> <span> {rating}({ratingCountV2}) </span> </div>

     }



    <div className="gap-2">
      <span className={isMore ? "" : "line-clamp-2"}>{description}</span> 
      {   description &&
         description.length > 145 && <button className="font-bold" onClick={()=>{setisMore(!isMore)}}>{isMore ? "less" : "more"}</button>
      }
      </div>
    

  </div>
  <div className="w-[35%] md:w-[20%] relative h-full">
    <img className="rounded-2xl w-full h-full aspect-square" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId} alt="" />
    <button className="bg-white absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-lg font-bold rounded-2xl border px-5 py-2 drop-shadow text-green-700"><AddToCartButton  info={info} resInfo={resInfo}/></button>
    {/* <AddToCartButton  info={info} resInfo={resInfo}/> */}
  </div>
 </div>  

 <hr className="my-5"/> 

 {/* {
  diffRes && 
  (
    <div className="fixed w-[520px] h-[210px] p-10 border shadow-2xl duration-500 border-black z-40 md:left-1/2 md:-translate-x-1/2  bottom-10 bg-white"> 
      <h1 className="font-bold text-xl">Items already in cart</h1>
      <p className="text-sm text-gray-500">Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?</p>
      <div className="flex gap-3 mt-4">
        <button onClick={handleDiffRes} className="border border-green-600 text-green-600 p-3 w-full">NO</button>
        <button onClick={handleClearCart} className="border border-white p-3 w-full bg-green-700 text-white">YES , START AFRESH</button>
      </div>
    </div>
  )
 } */}

 </div>   


)}





export default ResturantMenu;
