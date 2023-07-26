import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/product";
import productDetailReducer from "./slices/productDetails";
import userReducer from "./slices/user";
import cartReducer from "./slices/cart";
import searchReducer from "./slices/search";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetails: productDetailReducer,
    userInformation: userReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
