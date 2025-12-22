import React, { Suspense, useState } from "react";
// import "./Header.css";
import { LOGO_URL } from "../utils/constant";
import { NavLink } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [login, setLogin] = useState(false);

  const onlineStatus = useOnline();

  return (
    <div className="flex justify-between align-center bg-red-500 shadow-lg mb-4 px-2">
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
          <li className="text-white font-bold text-xl">
            <NavLink>Cart</NavLink>
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
