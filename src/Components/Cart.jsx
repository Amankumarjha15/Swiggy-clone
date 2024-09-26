import React, { useContext } from 'react'
import { CartContext } from '../context/contextApi'
import { Link } from 'react-router-dom';

function Cart() {

  const {cartData , setcartData} = useContext(CartContext);

  console.log(cartData);

  function handleRemove(i){
    let newArr=[...cartData]
    newArr.splice(i,1)
    setcartData(newArr)
    localStorage.setItem("cartData" , JSON.stringify(newArr))
  }


  if(cartData.length === 0){
    return (
        <div className="w-full">
            <div className="w-[70%] h-[50vh] mx-auto flex flex-col items-center justify-center">
                <h1>Order krle bhai bhukha marega kya....</h1>
                <Link to={"/"}>
                <button className='px-10 py-5 m-5 bg-green-700'>Yha se order krke bhai</button>
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
                    <h2 className='w-[70%] text-3xl relative'>{data.name}</h2>
                    <div className="w-[20%] relative h-full">
                        <img className="rounded-2xl w-[156px] h-[144px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + data.imageId} alt="" />
                        <button onClick={()=> handleRemove(i)} className="bg-red-600 absolute bottom-[-30px] left-1 text-lg font-bold rounded-2xl border px-10 py-2 drop-shadow text-white">Remove</button>
                    </div>
                </div>
            ))
           }
        </div>
    </div>
  )
}

export default Cart