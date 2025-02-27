
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (category) => {
  const path = (category) ? `/products/category/${encodeURIComponent(category)}`:'/products';
  const response = await axiosInstance.get(path);
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
    category: ''
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload; 
    },
  },
    extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCategory } = productsSlice.actions;

export default productsSlice.reducer;
