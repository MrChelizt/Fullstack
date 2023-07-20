import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/product";
import productDetailReducer from "./slices/productDetails";
import userReducer from "./slices/user";
import cartReducer from "./slices/cart";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetails: productDetailReducer,
    userInformation: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
