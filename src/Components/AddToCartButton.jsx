import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart } from '../utils/cartSlice';

function AddToCartButton({info , resInfo}) {



    const cartData = useSelector((state)=> state.cartSlice.cartItems)
    const resInfoLocalStorage = useSelector((state)=> state.cartSlice.resInfo)
    const dispatch = useDispatch()



    const [diffRes, setdiffRes] = useState(false)


 






    function HandleAddToCart(){
        const isAdded = cartData.find((data)=> data.id === info.id);
    
        if(!isAdded){
          if (resInfoLocalStorage.name === resInfo.name || resInfoLocalStorage.length === 0) {
          
            dispatch(addToCart({info , resInfo}))
            toast.success("Food Added To Cart")
            setAdded(info)
          } else {
            toast.error("Order Food From  " + resInfoLocalStorage.name + "  Only")
            setdiffRes((prev)=>!prev)
          }
        }else{
          toast.error("Already In Your Cart")
        }
    }





    function handleDiffRes(){
        setdiffRes((prev)=>!prev)
      }


    function handleClearCart(){
        dispatch(clearCart())
        handleDiffRes()
        toast.success("Your Cart Is Cleared")
      }

















  return (
    <>
    <button onClick={HandleAddToCart} >ADD</button>
    {/* className="bg-white absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-lg font-bold rounded-2xl border px-5 py-2 drop-shadow text-green-700" */}
    {/* <button onClick={HandleAddToCart}  className="bg-white absolute bottom-[20px] left-1/2 -translate-x-1/2 text-lg font-bold rounded-2xl border px-5 py-1 drop-shadow text-green-700">ADD</button> */}


{
  diffRes && 
  (
    <div className="fixed w-[520px] h-[210px] p-10 border shadow-2xl duration-500 border-black z-50 md:left-1/2 md:-translate-x-1/2  bottom-10 bg-white"> 
      <h1 className="font-bold text-xl">Items already in cart</h1>
      <p className="text-sm text-gray-500">Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?</p>
      <div className="flex gap-3 mt-4">
        <button onClick={handleDiffRes} className="border border-green-600 text-green-600 p-3 w-full">NO</button>
        <button onClick={handleClearCart} className="border border-white p-3 w-full bg-green-700 text-white">YES , START AFRESH</button>
      </div>
    </div>
  )
 }



    </>
  )
}

export default AddToCartButton