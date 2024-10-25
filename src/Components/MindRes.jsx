import React, { useContext, useEffect, useState } from 'react'
import { Coordinates } from '../context/contextApi';
import ResturantCard from './ResturantCard';
import { Link, useParams } from 'react-router-dom';

function MindRes() {

    const { id } = useParams();
    let mainId = id.split("?").at(0);
    // console.log(mainId)


    const [Data, setData] = useState([])
    const [Title, setTitle] = useState([])


    const {Coord : {lat , lng}} = useContext(Coordinates);



    async function FetchMenu() {
        let data = await fetch(`${import.meta.env.VITE_BASE_URL}/restaurants/list/v5?lat=${lat}&lng=${lng}&collection=${mainId}&tags=layout_CCS_Pasta&sortBy=&filters=&type=rcv2&offset=0&page_type=null`);
        let res = await data.json();
        
        setTitle(res?.data?.cards[0]?.card?.card)
        
        
        let finalData =  (res?.data?.cards?.filter((data)=>data?.card?.card?.info))
        setData(finalData);
        // console.log(finalData)
        
    }
    // console.log(Title)



    useEffect(()=>{
        FetchMenu();
    },[])

  return (
    <div className='w-full'>
        <div className='w-[90%] xl:w-[80%]  mx-auto'>

            {
            Title&&
            <>

            <div className='mt-10'>
                <Link to={"/"}>
                <p>Home/{Title.title}</p>
                </Link>
            </div>
            
            <div className='my-10'>
                <h1 className='font-bold text-4xl'>{Title.title}</h1>
                <h1 className='font-semibold text-2xl'>{Title?.description}</h1>
            </div>
            </>
            }
    {
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
        {
        Data &&
        Data.map((restaurant,i) => (
          <div key={i} className="hover:scale-95 duration-200">
          <Link to={`/ResturantMenu/${restaurant?.card?.card?.info?.id}`}>
            <ResturantCard {...restaurant?.card?.card} link={restaurant?.card?.card?.cta?.link}/>
          </Link>
          </div>
        ))}
        </div>
      </div>



}
</div>
  </div>
  )
}

export default MindRes