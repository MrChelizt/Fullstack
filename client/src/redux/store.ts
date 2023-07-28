import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/product";
import productDetailReducer from "./slices/productDetails";
import userReducer from "./slices/user";
import cartReducer from "./slices/cart";
import searchReducer from "./slices/search";
import orderReducer from "./slices/order";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetails: productDetailReducer,
    users: userReducer,
    cart: cartReducer,
    order: orderReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
