import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/contextApi'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, deleteItem} from '../utils/cartSlice';
import toast from 'react-hot-toast';

function Cart() {

  // const {cartData , setcartData} = useContext(CartContext);

  const cartData = useSelector((state)=> state.cartSlice.cartItems)
  // console.log(cartData)
  const dispatch = useDispatch()



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
        <div className="w-[70%] mx-auto">
           {
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
           }
           <h1>Total - ₹{totalPrice}</h1>
           <button onClick={handleClearCart} className='p-6 m-5 bg-green-700 text-white'>Clear Cart</button>
        </div>
    </div>
  )
}

export default Cart