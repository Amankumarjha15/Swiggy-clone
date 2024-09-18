import React from 'react';
import OnYourMind from './onYourMind';
import TopResturant from './TopResturant';


function Body() {


  return (
    <div className='w-full mt-3'>
        <div className='w-[80%] mt-3 mx-auto overflow-hidden'>
        <OnYourMind/>
        <TopResturant/>
        </div>
    </div>
  )
}

export default Body