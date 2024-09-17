import React from 'react'

function Head() {

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



  return (
    <div className='w-full shadow-md h-24 flex justify-center items-center'>
        

  <div className='w-[70%] flex justify-between'>
    <div className='flex items-center'>

              <img className='w-24' src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="" />

       <div className='flex items-center gap-1'>

            <p className='font-bold border-b-2 border-black'>others</p>
            <i class="fi text-orange-500 text-2xl mt-2 fi-rs-angle-small-down"></i>

       </div>
    </div>
           <div className='flex items-center gap-10'>
           
           {
            navItems.map((data)=>(
              <div className='flex items-center gap-3'>
              <i className={"mt-1 text-xl fi text-gray-500 " + data.image}></i>
              <p className='text-lg text-gray-500 font-medium'>{data.name}</p>
            </div>
            ))
           }
            
           
           </div>
         


   </div>




    </div>
  )
}

export default Head
