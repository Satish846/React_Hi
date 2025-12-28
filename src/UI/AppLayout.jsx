import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import store from "../utils/store";

const AppLayout = () => {
  const [name, setName] = useState();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Satish",
    };
    setName(data.name);
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ loggedInUser: name, setName }}>
        <div>
          <Header />
          <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <Outlet />
          </UserContext.Provider>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;
