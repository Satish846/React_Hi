import React, { useEffect, useState } from "react";

const useRestaurantData = () => {
  const [restaurants, setRestaurants] = useState([]);
   const [loading, setLoading] = useState(true);
  //fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards
        ?.map((c) => c.card?.card)
        ?.find((c) => c?.gridElements?.infoWithStyle?.restaurants)?.gridElements
        ?.infoWithStyle?.restaurants || [];
      

    console.log(json);
    console.log("Restaurants:", restaurants);
    setRestaurants(restaurants);
    setLoading(false);
  };
  return { restaurants: restaurants || [], loading };
};

export default useRestaurantData;
