import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartRecord, Product } from "../../types/types";

type InitialState = {
  cartItems: CartRecord[];
  totalCount: number;
  totalAmount: number;
};

const initialState: InitialState = {
  cartItems: [],
  totalCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product | undefined>) {
      if (action.payload) {
        const index = state.cartItems.findIndex(
          (cartItem) => cartItem.product._id === action.payload!._id
        );
        if (index !== -1) {
          state.cartItems[index].count += 1;
        } else {
          state.cartItems.push({ product: action.payload, count: 1 });
        }

        state.totalCount += 1;
        state.totalAmount += action.payload.price;
      }
    },
    increment(state, action: PayloadAction<number>) {
      state.cartItems[action.payload].count += 1;
      state.totalCount += 1;
      state.totalAmount += state.cartItems[action.payload].product.price;
    },
    decrement(state, action: PayloadAction<number>) {
      state.cartItems[action.payload].count -= 1;
      state.totalCount -= 1;
      state.totalAmount -= state.cartItems[action.payload].product.price;
      if (state.cartItems[action.payload].count === 0) {
        state.cartItems.splice(action.payload, 1);
      }
    },
    clear(state) {
      state.cartItems = [];
      state.totalCount = 0;
      state.totalAmount = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
