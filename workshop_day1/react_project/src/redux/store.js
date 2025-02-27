import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import favProductReducer from "./slices/favProductSlice";
import productsReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favProduct:favProductReducer,
    products: productsReducer
  },
});
