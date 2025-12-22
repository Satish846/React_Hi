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
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.52843&lng=78.262702&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
