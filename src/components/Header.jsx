import React, { Suspense, useContext, useState } from "react";
// import "./Header.css";
import { LOGO_URL } from "../utils/constant";
import { NavLink } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Header = () => {
  const [login, setLogin] = useState(false);

  const {loggedInUse} = useContext(UserContext);
  console.log(loggedInUse);

  const onlineStatus = useOnline();

  //selector
  const cartItems =useSelector((store)=> store.cart.items)

  return (
    <div className="flex justify-between align-center bg-yellow-100 shadow-lg mb-4 px-2 sm:bg-green-500 lg:bg-red-500">
      <div className="logo">
        <img src={LOGO_URL} className="w-35" />
      </div>
      <div className="nav-items">
        <ul className="flex gap-10 p-4 m-4">
          <li className="text-white font-bold text-xl">Online Status : {onlineStatus ? "✅" : "❌"}</li>
          <li className="text-white font-bold text-xl">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-white font-bold text-xl">
            <NavLink to="/about">About us</NavLink>
          </li>
          <li className="text-white font-bold text-xl">
            <NavLink to="/contact">Contact us</NavLink>
          </li>
          <li className="text-white font-bold text-xl">
            <Suspense fallback={<h1>Loading...</h1>}>
            <NavLink to="/grocery">Grocery</NavLink>
          </Suspense>
          </li>
          <li className="text-black font-bold text-xl">
            <NavLink to="/cart">Cart - {cartItems.length} Items</NavLink>
          </li>
          <li className="text-black font-bold text-xl">
            <NavLink>{loggedInUse}</NavLink>
          </li>
          
          <button className="text-yellow-400 font-bold text-xl" onClick={() => setLogin(!login)}>
            {login === true ? "Logout" : "Login"}
          </button>
         
        </ul>
      </div>
    </div>
  );
};

export default Header;
