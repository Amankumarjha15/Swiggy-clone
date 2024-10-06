import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/contextApi'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, deleteItem} from '../utils/cartSlice';
import toast from 'react-hot-toast';
import { toggleLogin } from '../utils/toogleSlice';

function Cart() {



  // const {cartData , setcartData} = useContext(CartContext);

  const cartData = useSelector((state)=> state.cartSlice.cartItems)
  const resInfo = useSelector((state)=> state.cartSlice.resInfo)
  const userData = useSelector((state)=> state.authSlice.userData)
  // console.log(cartData)
  const dispatch = useDispatch()
  const navigate = useNavigate()



//   console.log(cartData);
//   let totalPrice = 0 ;

//   for(let i=0 ; i < cartData.length ; i++){
//       totalPrice = totalPrice + cartData[i].price / 100 || cartData[i].defaultPrice / 100 || cartData[i].finalPrice / 100
//   }




let totalPrice = cartData.reduce((acc , curVal)=> (acc + curVal.price /100 || curVal.defaultPrice /100), 0)



// if(cartData.length === 0){
//   localStorage.setItem("resInfo" , JSON.stringify([]));
// }

function handleRemove(i){
  if (cartData.length > 1) {
    let newArr=[...cartData]
    newArr.splice(i,1)
    // setcartData(newArr)
    dispatch(deleteItem(newArr));
    toast.error("Food Removed")
    // localStorage.setItem("cartData" , JSON.stringify(newArr))
  } else {
    handleClearCart()
  }
  }

  function handleClearCart(){
    dispatch(clearCart())
    toast.success("Your Cart Is Cleared")
    // setcartData([])
    // localStorage.setItem("cartData" , JSON.stringify([]));
    // localStorage.setItem("resInfo" , JSON.stringify([]));

  }


  function handlePlaceOrder (){
    if(userData){
      toast.success("Order Placed")
    }else{
      toast.error("Login Krle Bhai")
      dispatch(toggleLogin())
    }
  }


  if(cartData.length === 0){
    return (
        <div className="w-full">
            <div className="w-[70%] h-[50vh] mx-auto flex flex-col items-center justify-center">
                <h1>Order krle bhai bhukha marega kya....</h1>
                <Link to={"/"}>
                <button className='px-10 py-5 m-5 bg-green-700'>Yha se order krle bhai</button>
                </Link>
            </div>
        </div>
    )
  }


  return (
    <div className="w-full">
        <div className="w-[95%] xl:w-[70%] mx-auto">
          <Link to={`/ResturantMenu/`+resInfo.id}>
                    <div className=' md:m-3 flex gap-4 md:gap-16 border-4 border-black/50 p-2 md:p-10'>
                      <img className='rounded-xl aspect-square w-36' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + resInfo.cloudinaryImageId} alt="" />
                      <div className="flex flex-col justify-evenly">
                        <h1 className='font-bold text-xl md:text-4xl border-b-4 border-black pb-3'>{resInfo.name}</h1>
                        <h1 className='font-bold text-lg md:text-xl border-b-2 border-black pb-3'>{resInfo.areaName}</h1>
                      </div>
                    </div>
          </Link>
           {/* {
            cartData && 
            cartData.map((data,i)=> (
                <div className='w-full flex justify-between m-16'>
                    <div className="w-[70%]">
                    <h2 className='text-3xl relative'>{data.name}</h2>
                    <p>{data.price / 100 || data.defaultPrice / 100}</p>
                    </div>
                    <div className="w-[20%] relative h-full">
                        <img className="rounded-2xl w-[156px] h-[144px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + data.imageId} alt="" />
                        <button onClick={()=> handleRemove(i)} className="bg-red-600 absolute bottom-[-30px] left-1 text-lg font-bold rounded-2xl border px-10 py-2 drop-shadow text-white">Remove</button>
                    </div>
                </div>
            ))
           } */}

           { 
           cartData &&
            cartData.map(({name ,defaultPrice, price ,finalPrice, itemAttribute : {vegClassifier}, ratings :{aggregatedRating : {rating ,ratingCountV2}}, description , imageId , isVeg} , i)=>(
              <>
              <div className='flex p-2 md:p-5 gap-4'>
              <div className="w-[60%] md:w-[80%]">
                {/* {
                  vegClassifier === "VEG" ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh71sfIQVPk_TuhnuWB0Q1E6FlciHqRH-wRA&s" alt="" /> : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/768px-Non_veg_symbol.svg.png" alt="" />
                } */}
                <img className="w-4" src={isVeg || vegClassifier && isVeg == 1 || vegClassifier === "VEG" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh71sfIQVPk_TuhnuWB0Q1E6FlciHqRH-wRA&s" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/768px-Non_veg_symbol.svg.png"} alt="" />
                <h1 className="font-bold text-lg">{name}</h1>
                <p className="font-bold text-lg">₹{defaultPrice /100 || price /100 || finalPrice /100}</p>
            
                 {
            
                  rating && <div className="flex items-center gap-1"> <i className="fi mt-1 fi-ss-star text-green-700"></i> <span> {rating}({ratingCountV2}) </span> </div>
            
                 }
            
            
            
                <div className="gap-2">
                  <span className={"line-clamp-2"}>{description}</span> 
                  </div>
                
            
              </div>
              <div className="w-[40%] md:w-[20%] relative h-full">
                <img className="rounded-2xl w-[156px] h-[144px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId} alt="" />
                <button onClick={()=> handleRemove(i)} className="bg-white absolute bottom-[-20px] left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-0 text-lg font-bold rounded-2xl border p-4 lg:px-10 py-2 drop-shadow text-red-500">REMOVE</button>
              </div>
             </div>  
            
             <hr className="my-5"/> 
             </>
            ))
           }




           <h1 className='m-10 font-bold text-2xl'>Total - ₹{totalPrice}</h1>

           <div className="flex justify-evenly md:p-10">
           <button onClick={handleClearCart} className='px-10 py-5 rounded-2xl bg-green-700 text-white'>Clear Cart</button>
           <button onClick={handlePlaceOrder} className='px-10 py-5 rounded-2xl bg-green-700 text-white'>Place Order</button>
           </div>
        </div>
    </div>
  )
}

export default Cart