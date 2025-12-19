import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import "./Rest.css";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestuarants, setListOfRestuarants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.52843&lng=78.262702&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards
        ?.map((c) => c.card?.card)
        ?.find((c) => c?.gridElements?.infoWithStyle?.restaurants)?.gridElements
        ?.infoWithStyle?.restaurants || [];

        console.log(json)
    console.log("Restaurants:", restaurants);
    setListOfRestuarants(restaurants);
    setAllRestaurants(restaurants)
  };

  if(listOfRestuarants.length===0){
    return <Shimmer/>
  }

  

  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn"
          onClick={() => {
            console.log("Before filter:", listOfRestuarants.length);

            const updatedList = allRestaurants.filter((res) => {
              const rating = parseFloat(res.info.avgRatingString);
              return !isNaN(rating) && rating > 4.2;
            });

            console.log("After filter:", updatedList.length);
            setListOfRestuarants(updatedList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-conatiner">
        {listOfRestuarants.map((resta) => {
          return <RestaurantCard key={resta?.info?.id} {...resta?.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
