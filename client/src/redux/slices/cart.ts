import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductOrder, Product } from "../../types/types";

type InitialState = {
  cartItems: ProductOrder[];
};

const initialState: InitialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      if (action.payload) {
        const index = state.cartItems.findIndex(
          (cartItem) => cartItem._id === action.payload!._id
        );
        if (index !== -1) {
          state.cartItems[index].quantity += 1;
        } else {
          state.cartItems.push({ ...action.payload, quantity: 1 });
        }
      }
    },
    increaseQuantity(state, action: PayloadAction<Product>) {
      const foundProduct = state.cartItems.find(
        (item) => item.name === action.payload.name
      );
      if (foundProduct) {
        foundProduct.quantity += 1;
      }
    },
    decreaseQuantity(state, action: PayloadAction<Product>) {
      const foundProduct = state.cartItems.find(
        (item) => item.name === action.payload.name
      );
      if (foundProduct) {
        foundProduct.quantity -= 1;
        if (foundProduct.quantity === 0) {
          const index = state.cartItems.findIndex(
            (item) => item.name === action.payload.name
          );
          state.cartItems.splice(index, 1);
        }
      }
    },
    clear(state) {
      state.cartItems = [];
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
