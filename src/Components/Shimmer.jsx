import React from 'react'

function Shimmer() {
  return (
    <div className='w-full'>
        <div className="h-[350px] bg-slate-900 text-white flex justify-center items-center flex-col gap-5">
          <div className="relative">
            <img  className="w-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa" alt=""/>
            <span className="loader "></span>
        </div>
            <h1 className='text-2xl'>Looking For Great Foods Near You .... </h1>
        </div>

        <div className="w-[80%] mx-auto py-6 flex flex-wrap gap-10 items-center justify-center">
                {
                Array(12).fill("").map((data ,i)=>(<div key={i} className="w-[295px] animate h-[182px]  rounded-md"></div>))
                }
        </div>


    </div>
  )
}

export default Shimmer



export function MenuShimmer() {
    return (
        <div className="w-full lg:w-[50%] mx-auto mt-10">
            <div className="w-full h-40 sm:h-80 rounded-xl animate"></div>
            <div className="w-full flex mt-10 justify-between">
                <div className="w-[45%] h-10 rounded-xl animate"></div>
                <div className="w-[45%] h-10 rounded-xl animate"></div>
            </div>

            <div className="w-full mt-20 flex flex-col gap-9">
                {Array(5)
                    .fill("")
                    .map((data , i) => (
                        <div key={i} className="w-full h-40 flex justify-between">
                            <div className="w-[60%] flex flex-col gap-5 h-full">
                                <div className="w-[100%] h-5 animate"></div>
                                <div className="w-[50%] h-5 animate"></div>
                                <div className="w-[30%] h-5 animate"></div>
                            </div>
                            <div className="w-[30%] rounded-xl h-full animate"></div>
                        </div>
                    ))}
            </div>
        </div>
    );
}





export function SearchShimmer() {

return(

    <div className='grid  grid-cols-1 md:grid-cols-2 bg-[#f4f5f7]'>
         {
                Array(8).fill("").map((data , i)=>(<div key={i}  className='w-[90%] h-[250px] m-5 animate bg-white text-black rounded-3xl'></div>))
         }
    </div>
   
)

}