import React, { lazy } from "react";
import AppLayout from "./UI/AppLayout";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Errorr from "./components/Errorr";
import Body from "./components/Body";
import RestaMenu from "./components/RestaMenu";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

//All these are same term used for same purpose
//Chuncking
//Code Splitting
//Dynamic Bundling
//On Demand Loading
//Lazy loading

const Grocery=lazy(()=>import("./components/Grocery"));

const About=lazy(()=>import("./components/About"));
//the about component will be loaded only when it is required
//This will reduce the size of our main bundle.js file and improve the performance of our application
//When we have large application with many routes and components lazy loading is very useful

const App = () => {
  const [userName, setUserName] = React.useState("");
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restamenu/:id",
        element: <RestaMenu />,
      },
    ],
    errorElement: <Errorr />,
  },
]);

export default App;
