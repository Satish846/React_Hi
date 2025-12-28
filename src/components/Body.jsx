import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { withOpenTag } from "./RestaurantCard";
// import "./Rest.css";
import Shimmer from "./Shimmer";
import useRestaurantData from "../utils/useRestaurantData";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const { restaurants, loading } = useRestaurantData();

  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantCardWithOpenTag = withOpenTag(RestaurantCard);

  // when data comes from hook, set local states
  useEffect(() => {
    setListOfRestuarants(restaurants);
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  // online check - custom Hook
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 You are offline! Please check your internet connection.</h1>;
  }

  if (loading) return <Shimmer />;

  return (
    <div className="body">
      <div className="flex items-center justify-between">
        <div className="search m-2 p-3 ">
          <input
            type="text"
            className="border border-solid border-2 border-black p-2 rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="px-4 py-2 m-4 bg-green-300 rounded-md hover:bg-green-500"
            onClick={() => {
              const filteredData = listOfRestuarants.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilteredRestaurants(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-2">
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-500"
            onClick={() => {
              const updatedList = listOfRestuarants.filter((res) => {
                const rating = parseFloat(res.info.avgRatingString);
                return !isNaN(rating) && rating > 4.2;
              });
              setFilteredRestaurants(updatedList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4">
          <label>UserName</label>
          <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>

        </div>
      </div>

      <div className="restaurant-list flex flex-wrap justify-center">
        {filteredRestaurants.map((resta) =>
          resta?.info?.isOpen ? (
            <Link key={resta?.info?.id} to={`/restamenu/${resta?.info?.id}`}><RestaurantCardWithOpenTag key={resta?.info?.id} {...resta?.info} /></Link>
          ) : (
          <Link key={resta?.info?.id} to={`/restamenu/${resta?.info?.id}`}><RestaurantCard key={resta?.info?.id} {...resta?.info} /></Link>
          )
        )}
      </div>
    </div>
  );
};

export default Body;
