// import { IMG_CDN_URL } from "../../../public/Common/constants";

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
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
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
      </span>
    </div>
  );
};

export default RestaurantCard;
