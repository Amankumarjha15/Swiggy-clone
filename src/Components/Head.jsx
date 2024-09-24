import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Visibility } from '../context/contextApi'

function Head() {
  const {Visible , setVisible} = useContext(Visibility);
  const [searchResult, setsearchResult] = useState([]);

const navItems = [
  {
    name: "Swiggy Corporate",
    image :"fi-rr-shopping-bag"
  },
  {
    name: "Search",
    image :"fi-br-search"
  },
  {
    name: "Offers",
    image : "fi-rr-badge-percent"
  },
  {
    name: "Help",
    image :"fi-rs-interrogation"
  },
  {
    name: "Log In",
    image :"fi-rr-user"
  },
  {
    name: "Cart",
    image :"fi-tr-cart-minus"
  },
]



async function searchResultFun(value){
  const res = await fetch(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${value}`)
  const data = await res.json();
  console.log(data)
  setsearchResult(data?.data)
}


  
  function handleVisibility (){
    setVisible(prev => !prev)
}


  return (
    <div className='relative w-full'>

    <div className='w-full'>
    <div onClick={handleVisibility} className={'absolute w-full z-30 h-full bg-black/50 ' + (Visible ? " visible" : " invisible")}></div>
    <div className={'bg-white z-40 p-5 absolute w-[40%] h-full duration-500 ' + (Visible ? "left-0" : "-left-[100%]")}>
        <input type="text" className='border border-gray-700 p-5 focus:outline-none focus:shadow-lg' onChange={(e)=>searchResultFun(e.target.value)} />
        <div>
          <ul>
            {
              searchResult &&
              searchResult.map((data)=>(
                <li>{data?.structured_formatting?.main_text} <p className='text-gray-500'>{data?.structured_formatting?.secondary_text}</p></li>
              ))
            }
          </ul>
        </div>
    </div>
    </div>




    <div className='w-full shadow-md h-24 flex justify-center items-center z-10 top-0 bg-white sticky'>
        

  <div className='w-[70%] flex justify-between'>
    <div className='flex items-center'>
           <Link to={"/"}>
              <img className='w-24 hover:scale-105 duration-300' src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="" />
           </Link>
       <div className='flex items-center gap-1' onClick={handleVisibility}>

            <p className='font-bold border-b-2 border-black'>others</p>
            <i class="fi text-orange-500 text-2xl mt-2 fi-rs-angle-small-down"></i>

       </div>
    </div>
           <div className='flex items-center gap-10'>
           
           {
            navItems.map((data,i)=>(
              <div className='flex items-center gap-3' key={i}>
              <i className={"mt-1 text-xl fi text-gray-500 " + data.image}></i>
              <p className='text-lg text-gray-500 font-medium'>{data.name}</p>
            </div>
            ))
           }
            
           
           </div>
         


   </div>




    </div>
    <Outlet/>
    </div>
  )
}

export default Head
