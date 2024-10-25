import React from 'react'
import AddToCartButton from './AddToCartButton'
import { Link } from 'react-router-dom';

function SearchCard({data :{card : {card : {info , restaurant : {info:resInfo}}}}}) {


   let {imageId = "" ,name:dish, price , isVeg = 0 } =info;

   let {name:resname , id , avgRating , sla : {slaString}} =resInfo;





  return (
    
   <>
   
   



   
   <div className='w-[90%] h-[250px] m-5 bg-white text-black rounded-3xl'>
         <Link to={`/ResturantMenu/`+id}>
           <div className="h-[30%] border-b-4 flex justify-between mx-5 items-center gap-3">
            <div>
            <h1 className='font-bold line-clamp-1'>{resname}</h1>
            {
              avgRating && <div className="flex items-center gap-3"> <i className="fi mt-1 fi-ss-star text-green-700"></i> <span className='text-slate-700'> ({avgRating})</span> <span className='text-slate-700'>{slaString}</span> </div>
            }
            </div>

            <div>
            <i className="fi fi-br-angle-right"></i>
            </div>

           </div>

           </Link>


          
          <div className="h-[70%] m-5 flex justify-between">
            <div className="w-[60%] flex flex-col gap-3 p-3">
            <img className="w-4" src={isVeg === 1 ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh71sfIQVPk_TuhnuWB0Q1E6FlciHqRH-wRA&s" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/768px-Non_veg_symbol.svg.png"} alt="" />
            <h1 className='font-bold text-xl line-clamp-2'>{dish}</h1>
            <h1 className='font-bold text-lg text-slate-500'>₹{price/100}</h1>
            </div>


            <div className="w-[35%] h-[75%] relative">
            <img className="rounded-2xl w-full h-[130px] aspect-square" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId} alt="" />
            {/* <AddToCartButton  info={info} resInfo={resInfo} /> */}
            <button className="bg-white absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-lg font-bold rounded-2xl border px-5 py-2 drop-shadow text-green-700"> <AddToCartButton  info={info} resInfo={resInfo}/></button>
           
            </div>
          </div>



      </div>
    
   
   
   
   
   
   
   </>
  )
}

export default SearchCard