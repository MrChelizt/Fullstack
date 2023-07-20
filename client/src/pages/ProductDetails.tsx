import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import { fetchProductDetail } from "../redux/thunk/product";

export default function ProductDetail() {
  const productDetail = useSelector(
    (state: RootState) => state.productDetail.productDetail
  );

  const dispatch = useDispatch<AppDispatch>();
  // result: object
  const result = useParams();
  const productId = result.id;

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));
    }
  }, [productId, dispatch]);
  if (!productDetail) {
    return <div> no data ...</div>;
  }
  return (
    <div>
      <h1>ProductDetail</h1>
      {productDetail.title}
    </div>
  );
}
