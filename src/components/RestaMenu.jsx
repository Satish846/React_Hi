import { useEffect, useState } from "react";
// import "./Menu.css"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestCategory from "./RestCategory";
const RestaMenu = () => {
  const [menu, setMenu] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);
  //lift state up
  //below state in accordion state
  const [showIndex, setShowIndex] = useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (id) fetchMenu();
  }, [id]);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://corsproxy.io/https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=${id}`
    );
    const json = await data.json();
    // console.log(json);
    setMenu(json?.data);
  };
  if (menu === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    menu?.cards?.map((c) => c.card?.card)?.find((c) => c?.info)?.info || {};

  const regularCards = menu?.cards?.find((c) => c.groupedCard)?.groupedCard
    ?.cardGroupMap?.REGULAR?.cards;

  // console.log("cards",regularCards);

  const itemCards =
    regularCards?.map((c) => c.card?.card)?.find((c) => c?.itemCards)
      ?.itemCards || [];

  // console.log(itemCards);

  const categoeries =
    menu?.cards
      ?.find((c) => c.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) || [];

  console.log("categories", categoeries);
  return (
    <div className="text-center ">
      <h1 className="font-bold my-5 font-bold text-2xl">{name}</h1>
      <p className=" text-lg">
        {cuisines?.join(", ")}-{costForTwoMessage}
      </p>

      {/* <h1 className="font-bold m-2">Menu</h1> */}
      {/* <ul>
        {itemCards.map((item) => (
          <li className="m-2" key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul> */}
      {categoeries.map((cate,index) => {
        return (
          //controlled component
          <RestCategory
            key={cate.card?.card?.title}
            title={cate.card?.card?.title}
            items={cate.card?.card?.itemCards}
            isOpen={index === showIndex ?true:false}
            // setIsOpen={setIsOpen}
            setShowIndex={() => setShowIndex((prev)=>prev===index?null:index)}
            showIndex={showIndex}
          />
        );
      })}
    </div>
  );
};

export default RestaMenu;
