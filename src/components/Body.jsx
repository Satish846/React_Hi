import React from 'react'
import RestaurantCard from './RestaurantCard'
import "./Rest.css"

const Body = () => {
  return (
    <div className='body'>
        <div className="search">Search</div>
        <div className="res-conatiner">
            <RestaurantCard/>
        </div>
      
    </div>
  )
}

export default Body
