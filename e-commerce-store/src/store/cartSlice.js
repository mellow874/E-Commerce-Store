// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { id, title, price, image, qty }
};

// helpers
const findIndex = (items, id) => items.findIndex((i) => i.id === id);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // payload: product { id, title, price, image }
      const prod = action.payload;
      const idx = findIndex(state.items, prod.id);
      if (idx >= 0) {
        state.items[idx].qty += 1;
      } else {
        state.items.push({ ...prod, qty: 1 });
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },
    increaseQty: (state, action) => {
      const id = action.payload;
      const idx = findIndex(state.items, id);
      if (idx >= 0) state.items[idx].qty += 1;
    },
    decreaseQty: (state, action) => {
      const id = action.payload;
      const idx = findIndex(state.items, id);
      if (idx >= 0) {
        state.items[idx].qty -= 1;
        if (state.items[idx].qty <= 0) {
          state.items.splice(idx, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    // hydrate from localStorage or server
    setCart: (state, action) => {
      state.items = action.payload || [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQty,
  decreaseQty,
  clearCart,
  setCart,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalQty = (state) =>
  state.cart.items.reduce((s, it) => s + (it.qty || 0), 0);
export const selectCartTotalPrice = (state) =>
  state.cart.items.reduce((s, it) => s + (it.qty || 0) * Number(it.price || 0), 0);

export default cartSlice.reducer;
