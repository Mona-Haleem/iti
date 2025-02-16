import { createSlice } from "@reduxjs/toolkit";

const favProductSlice = createSlice({
  name: "favProduct",
  initialState: {
    products: []
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.products.push({...action.payload,quantity:1});
      console.log('added');
    },
    removeFromFavorite: (state, action) => {
      state.products =  state.products.filter(product => product.id != action.payload.id); 
        console.log('removed')
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favProductSlice.actions;
export default favProductSlice.reducer;
