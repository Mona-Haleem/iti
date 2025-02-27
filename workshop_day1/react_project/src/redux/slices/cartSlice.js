import { createSlice } from "@reduxjs/toolkit";

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
      console.log('one')
      let productIndex = state.products.findIndex(product => product.id === action.payload.id);
      if(state.products[productIndex].quantity == 1)
        state.products =  state.products.filter(product => product.id != action.payload.id); 
      else
        state.products =  state.products.map(product => product.id === action.payload.id ? {...product,quantity:--product.quantity }:product); 

      state.totalQuantity -= 1;
      state.totalPrice -= action.payload.price;
    },
    removeAllFromCart:(state, action) =>{
      let productCounts = state.products.find((product) => product.id === action.payload.id);

      state.products =  state.products.filter(product => product.id != action.payload.id); 
      state.totalQuantity -= productCounts.quantity;
      state.totalPrice -=  action.payload.price * productCounts.quantity;
    }
  },
});

export const { addToCart, removeFromCart, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;
