// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array of { id, title, price, quantity, totalPrice, image, realPrice }
    totalQuantity: 0, // Total number of items
    totalAmount: 0, // Total price of all items
  },
  reducers: {
    increment: (state, action) => {
      const { id, title, price, image, realPrice } = action.payload;

      // Validate payload
      if (!id || !title || price == null) return;

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          id,
          title,
          price, // Discounted price from Shop
          quantity: 1,
          totalPrice: price,
          image,
          realPrice,
        });
      }

      state.totalQuantity += 1;
      state.totalAmount += price;
    },
    decrement: (state, action) => {
      const id = action.payload;

      // Validate payload
      if (!id) return;

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Remove the item entirely
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;

      // Validate payload
      if (!id) return;

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        state.totalQuantity += 1;
        state.totalAmount += existingItem.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;

      // Validate payload
      if (!id) return;

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        state.totalQuantity -= 1;
        state.totalAmount -= existingItem.price;

        if (existingItem.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
  },
});

export const { increment, decrement, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
