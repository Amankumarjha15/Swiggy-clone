import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

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
          } else {
            toast.error("Order Food From  " + resInfoLocalStorage.name + "  Only")
            setdiffRes((prev)=>!prev)
          }
        }else{
          toast.error("Already In Your Cart")
        }
    }


















  return (
    <button onClick={HandleAddToCart} className="bg-white absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-lg font-bold rounded-2xl border px-5 py-2 drop-shadow text-green-700">ADD</button>
    // <button onClick={HandleAddToCart}  className="bg-white absolute bottom-[20px] left-1/2 -translate-x-1/2 text-lg font-bold rounded-2xl border px-5 py-1 drop-shadow text-green-700">ADD</button>
  )
}

export default AddToCartButton