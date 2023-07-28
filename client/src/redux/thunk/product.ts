import axios from "axios";

import { productActions } from "../slices/product";
import { AppDispatch } from "../store";
import { productDetailActions } from "../slices/productDetails";

export function fetchProductData() {
  const productUrl = "https://backend-toe5.onrender.com/products";
  return async (dispatch: AppDispatch) => {
    axios.get(productUrl).then(({ data }) => {
      dispatch(productActions.getProductData(data));
    });
  };
}

export function fetchProductDetail(productId: string) {
  const productDetailUrl = `https://backend-toe5.onrender.com/products/${productId}`;
  return async (dispatch: AppDispatch) => {
    axios.get(productDetailUrl).then(({ data }) => {
      dispatch(productDetailActions.getProductDetail(data));
    });
  };
}
