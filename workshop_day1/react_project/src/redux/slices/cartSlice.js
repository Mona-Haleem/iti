import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      let productIndex = state.products.findIndex(product => product.id === action.payload.id);
      if(productIndex == -1)
        state.products.push({...action.payload,quantity:1});
      else
        state.products =  state.products.map(product => product.id === action.payload.id ? {...product,quantity:++product.quantity }:product); 

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
      console.log(JSON.stringify(state.products))

    },
    removeFromCart: (state, action) => {
      let productIndex = state.products.findIndex(product => product.id === action.payload.id);
      if(state.products[productIndex].quantity == 1)
        state.products =  state.products.filter(product => product.id != action.payload.id); 
      else
        state.products =  state.products.map(product => product.id === action.payload.id ? {...product,quantity:--product.quantity }:product); 

      state.totalQuantity -= 1;
      state.totalPrice -= action.payload.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
