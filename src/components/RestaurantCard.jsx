// import { IMG_CDN_URL } from "../../../public/Common/constants";

import { useContext } from "react";
import UserContext from "../utils/UserContext";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  const {loggedInUser} = useContext(UserContext)
  return (
    <div className="m-4 p-4 w-72 bg-gray-100 rounded-lg hover:shadow-lg hover:bg-gray-200">
      <img
        className="rounded-lg "
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold py-2 text-xl">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <span>
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "green" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>

        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>

        <h4 className="offer">{costForTwo ?? "₹200 for two"}</h4>
        <h4>User : {loggedInUser}</h4>
      </span>
    </div>
  );
};

//Higher order component - RestaurantCard
export const withOpenTag = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-1 rounded-lg m-4">
          OPEN
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
