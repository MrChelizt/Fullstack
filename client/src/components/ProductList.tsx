import { useEffect } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import fetchProductData from "../redux/thunk/products";
import ProductItem from "./ProductItem";
import Loading from "./Loading";

export default function ProductList() {
  const productList = useSelector(
    (state: RootState) => state.products.products
  );
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const userInput = useSelector((state: RootState) => state.search.search);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const filteredProductList = productList.filter((item) =>
    item.title.toLowerCase().includes(userInput.toLowerCase())
  );

  const mappedProductList = filteredProductList.map((item) => (
    <ProductItem key={item.id} item={item} />
  ));

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Grid container spacing={1} sx={{ maxWidth: "80vw", m: "2vw" }}>
      {mappedProductList}
    </Grid>
  );
}
