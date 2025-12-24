import React, { useState } from "react";
import { set } from "react-hook-form";

const RestCategory = ({ title, items,isOpen, setShowIndex }) => {
  
  //lift state up
  const handleClick=()=>{
    setShowIndex();
  }

  return ( 
    <div className="w-6/12 max-h-9/12  p-3 mx-auto my-4 bg-gray-50 rounded-md shadow-lg ">
      <div onClick={handleClick} className="flex justify-between cursor-pointer">
        <span className="font-bold text-left ">
          {title} ({items?.length})
        </span>
        <span>🔽</span>
      </div>
      <div>
        { isOpen && items.map((item) => (
          <div
            key={item.card.info.id}
            className="m-2 py-2  border-b-2 border-gray-300 text-left "
          >
            <div className="absolute">
              {/* <button className=" bg-white text-black px-2 py-1 rounded-md hover:bg-green-700 ">
                Add +
              </button> */}
            </div>
            <img
   f           className="w-2/12 h-12 rounded-lg float-left mr-4 flex"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
              alt={item.card.info.name}
            />
            <h3>
              <span>{item.card.info.name} - </span>
              <span>
                ₹ {(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
            </h3>

            <p className=" text-xs">{item.card.info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestCategory;
