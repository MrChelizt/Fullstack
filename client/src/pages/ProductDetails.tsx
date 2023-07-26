import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import { fetchProductDetail } from "../redux/thunk/product";
import { Product } from "../types/types";
import { cartActions } from "../redux/slices/cart";
import { Box, Button } from "@mui/material";
import { toast } from "react-toastify";

export default function ProductDetail() {
  const productDetails = useSelector(
    (state: RootState) => state.productDetails.productDetail
  );

  const dispatch = useDispatch<AppDispatch>();

  const result = useParams();
  const productId = result.id;

  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));
    }
  }, [productId, dispatch]);

  function onClickHandler(item: Product) {
    dispatch(cartActions.addToCart(item));
  }

  const handleAddToCartToast = () => {
    toast.success(`${productDetails?.name} has been added to the cart`, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  if (!productDetails) {
    return <div> no data ...</div>;
  }
  return (
    <Box display="flex" m={2}>
      <img src={productDetails?.image} alt={productDetails?.name} />
      <div
        style={{
          margin: 20,
        }}
      >
        <p>{productDetails?.name}</p>
        <p>€ {productDetails?.price}</p>
        <p>{productDetails?.details}</p>
        <Box display="flex" justifyContent="center">
          <Button
            variant="text"
            onClick={() => {
              onClickHandler(productDetails);
              handleAddToCartToast();
            }}
          >
            Add To Cart
          </Button>
          <Button variant="text" onClick={navigateBack}>
            Back
          </Button>
        </Box>
        <p>
          Members receive free standard shipping and free returns on purchases
          of at least €25
        </p>
      </div>
    </Box>
  );
}
