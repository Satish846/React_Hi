import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    // Add your slice reducers here
    cart: cartReducer,
  },
});

export default store;
