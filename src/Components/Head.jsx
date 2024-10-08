import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { CartContext, Coordinates, Visibility } from '../context/contextApi'
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin, toogleSearchBar} from '../utils/toogleSlice';
import LoginBtn from './LoginBtn';
import Footer from './Footer';



function Head() {
  // const {Visible , setVisible} = useContext(Visibility);

 const Visible = useSelector((state)=> state.toogleSlice.searchBarToogle)
 const loginVisible = useSelector((state)=> state.toogleSlice.loginToggle)
//  console.log(data)
 const dispatch = useDispatch()


  // const {cartData , setcartData} = useContext(CartContext);

  const cartData = useSelector((state)=> state.cartSlice.cartItems)
  const userData = useSelector((state)=> state.authSlice.userData)
  
  const {setCoord} = useContext(Coordinates);

  const [searchResult, setsearchResult] = useState([]);
  const [Address, setAddress] = useState("");

const navItems = [
  {
    name: "Search",
    image :"fi-br-search",
    path : "/search"
  },
  {
    name: "Log In",
    image :"fi-rr-user",
    path : "/signin"
  },
  {
    name: "Cart",
    image :"fi-tr-cart-minus",
    path : "/cart"
  },
]



async function searchResultFun(value){
  const res = await fetch(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${value}`)
  const data = await res.json();
  // console.log(data)
  setsearchResult(data?.data)
}

async function fetchLatAndLng(id){
  handleVisibility();
  // console.log(id)
  const res = await fetch(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${id}`)
  const data = await res.json();
  setCoord({
    lat : data?.data[0]?.geometry?.location.lat ,
    lng : data?.data[0]?.geometry?.location.lng
  })
  setAddress(data?.data[0].formatted_address)
  // console.log(data?.data[0]?.geometry?.location.lat)
  // console.log(data?.data[0]?.geometry?.location.lng)
  // console.log(data?.data[0])
}


  
  function handleVisibility (){
    // setVisible(prev => !prev)
    dispatch(toogleSearchBar())

}



  function handleLogin (){
    // setVisible(prev => !prev)
    dispatch(toggleLogin())

}


  return (
     <>

    <div className='w-full'>
    <div onClick={handleVisibility} className={'absolute duration-0 w-full z-30 h-full bg-black/50 ' + (Visible ? " visible" : " invisible")}></div>
    <div className={'bg-white z-40 p-5 absolute w-full lg:w-[60%] xl:w-[40%] h-full duration-500 ' + (Visible ? "left-0" : "-left-[100%]")}>
        <div className='mx-10 flex flex-col gap-8'>
          <i onClick={handleVisibility} className="fi font-bold text-2xl fi-br-cross"></i>
        <input type="text" className='border border-gray-700 p-5 focus:outline-none focus:shadow-lg hover:shadow-lg' onChange={(e)=>searchResultFun(e.target.value)} />
        <div>
          <ul className='border border-gray-600 p-7 shadow-2xl'>
            {
              searchResult &&
              searchResult.map((data)=>(
                <div className='cursor-pointer ' onClick={()=>fetchLatAndLng(data.place_id)}>
                  <div className='flex gap-5 border-b m-5 border-gray-300'>
                      <i className="fi mt-1 fi-sr-location-arrow"></i>
                      <li className='mb-3'>
                      {data?.structured_formatting?.main_text}
                      <p className='text-gray-500'>{data?.structured_formatting?.secondary_text}
                      </p>
                      </li>
                  </div>
                </div>
              ))
            }
          </ul>
        </div>
        </div>
    </div>
    </div>











    <div className='w-full'>
    <div onClick={handleLogin} className={'absolute duration-0 w-full z-30 h-full bg-black/50 ' + (loginVisible ? " visible" : " invisible")}></div>
    <div className={'bg-white z-40 p-10 md:p-20 fixed w-full lg:w-[60%] xl:w-[40%] h-full duration-500 ' + (loginVisible ? "right-0" : "-right-[100%]")}>
        <div className='my-10'>
          <i onClick={handleLogin} className="fi font-bold text-2xl fi-br-cross"></i>
        </div>
        <div className="flex justify-between items-center">
          <h1 className='font-bold text-4xl border-b-4 border-black pb-2'>Login</h1>
          <img className='w-32' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
        </div>
        <LoginBtn/>
        <p className='opacity-70'>By clicking On Login , I accept the term and conditions & Privacy and policy</p>

    </div>
    </div>














  <div className='relative w-screen'>


      <div className='w-full shadow-md h-24 flex justify-center items-center z-10 top-0 bg-white sticky'>
        

           <div className='w-full lg:w-[85%] flex justify-between'>
    <div className='flex items-center mr-2 md:m-0'>
           <Link to={"/"}>
           <div className='w-14 sm:w-24 hover:scale-105 duration-300'>
              <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="" />
           </div>
           </Link>
       <div className='flex items-center' onClick={handleVisibility}>

            <p className=""> <span className='font-bold border-b-2 border-black'>others</span></p>
            <p className='text-xs opacity-75 line-clamp-1 mt-1 ml-2 max-w-[300px]'>{Address}</p>
            <i className="fi text-orange-500 text-2xl mt-2 fi-rs-angle-small-down"></i>

       </div>
    </div>
           <div className='flex items-center gap-4 md:gap-10 mr-4'>
           
           {
             navItems.map((data,i)=>(
              data.name == "Log In" ? 
              <>
              <div className='hidden lg:flex' onClick={handleLogin}>
              <div className='flex items-center gap-3 cursor-pointer' key={i}>
                { userData ? <img className='w-10 rounded-full' src={userData.photo} alt="" /> :
              <i className={"mt-1 text-xl fi text-gray-500 " + data.image}></i>}
              <p className='text-lg text-gray-500 font-medium'>{userData ? userData.name : data.name}</p>
            </div>
            </div> 

            <div className='lg:hidden' onClick={handleLogin}>
              <div className='flex items-center gap-3 cursor-pointer ' key={i}>
                { userData ? <img className='w-10 rounded-full' src={userData.photo} alt="" /> :
              <i className={"mt-1 text-xl fi text-gray-500 " + data.image}></i>}
            </div>
            </div> 
            </>
            : 
            <>
            <div className="hidden lg:flex">
             <Link to={data.path}>
              <div className='flex items-center gap-3' key={i}>
              <i className={"mt-1 text-xl fi text-gray-500 " + data.image}></i>
              <p className='text-lg text-gray-500 font-medium'>{data.name}</p>
              {
               cartData == 0 ? "" :
               data.name === "Cart" && <p>{cartData.length}</p> 
              }
            </div>
            </Link> 
            </div>

            <div className="lg:hidden">
             <Link to={data.path}>
              <div className='flex items-center gap-3' key={i}>
              <i className={"mt-1 text-xl fi text-gray-500 " + data.image}></i>
              {
               cartData == 0 ? "" :
               data.name === "Cart" && <p>{cartData.length}</p> 
              }
            </div>
            </Link> 
            </div>

            </>
            ))
            
           }
            
           
           </div>
         


           </div>




      </div>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Head
