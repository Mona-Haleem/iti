import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import favProductReducer from "./slices/favProductSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favProduct:favProductReducer
  },
});
