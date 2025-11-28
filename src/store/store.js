import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// single store for the whole app
const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default store;
