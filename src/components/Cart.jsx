import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="text-center m-6 p-5 ">
      <h1 className="font-bold text-3xl">This is Cart Page</h1>
      {/* <h2 className='font-semibold text-2xl mt-4'>Items in Cart - {cartItems.length} </h2> */}
      <div>
        <button className="p-2 m-2 bg-black text-2xl text-white shadow-lg rounded-lg" 
        onClick={()=>dispatch(clearCart())}
        >Clear Cart</button>
      </div>
      {cartItems.length === 0 && (
        <h2 className="font-semibold text-2xl mt-4">Cart is Empty ! Please add items to the cart.</h2>
      )}
      <div className="list-decimal text-lg mt-4 flex flex-wrap justify-center gap-6">
        {cartItems.map((item, index) => (
          <div key={index} className="m-2 border-2 border-gray-300 shadow-lg p-4 rounded-lg">
            <div >
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item.imageId
                }
                alt={item.name} 
                className="w-35 m-auto h-40 rounded-lg"
              />
            </div>
            <div>
              <h1>
                {item.name} - ₹ {item.defaultPrice / 100 || item.price / 100}
              </h1>
              <h2> {item.locality}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
