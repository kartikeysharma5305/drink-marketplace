// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productsSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    filter: filterReducer,
  },
});

export default store;
