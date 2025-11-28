// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  searchText: ''
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setSearchText(state, action) {
      state.searchText = action.payload;
    },

    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((i) => i.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      if (quantity < 1) return;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },

    clearCart(state) {
      state.items = [];
    }
  }
});

export const {
  setSearchText,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart
} = cartSlice.actions;

// selectors – single source of truth
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export default cartSlice.reducer;
