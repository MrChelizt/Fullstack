import axios from "axios";

import { productActions } from "../slices/product";
import { AppDispatch } from "../store";

export function fetchProductData() {
  const productUrl = "http://localhost:8000/products";
  return async (dispatch: AppDispatch) => {
    axios.get(productUrl).then(({ data }) => {
      dispatch(productActions.getProductData(data));
    });
  };
}

export function fetchProductDetail(productId: string) {
  const productDetailUrl = `http://localhost:8000/products/${productId}`;
  return async (dispatch: AppDispatch) => {
    axios.get(productDetailUrl).then(({ data }) => {
      dispatch(productActions.getProductData(data));
    });
  };
}
