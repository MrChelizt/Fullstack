import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import { productActions } from "../redux/slices/product";
import { RootState } from "../redux/store";
import { Product } from "../types/types";

import "react-toastify/dist/ReactToastify.css";

type Prop = {
  item: Product;
};

export default function ProductItem({ item }: Prop) {
  const wishListProducts = useSelector(
    (state: RootState) => state.products.wishProducts
  );

  const dispatch = useDispatch();

  const handleAddToWishListToast = (item: Product) => {
    toast.success(`${item.name} has been added to wish list.`, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const handleRemoveFromWishListToast = (item: Product) => {
    toast.error(`${item.name} has been removed from wish list.`, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const addToWishList = (item: Product) => {
    const wishedItem = wishListProducts.some(
      (wishItem) => wishItem.name === item.name
    );

    const removeWishedProduct = wishListProducts.filter(
      (removeWishItem) => removeWishItem.name !== item.name
    );

    if (!wishedItem) {
      dispatch(productActions.addToWishList(item));
      handleAddToWishListToast(item);
    } else {
      dispatch(productActions.removeFromWishList(removeWishedProduct));
      handleRemoveFromWishListToast(item);
    }
  };

  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <Link to={`/products/${item.id}`}>
          <CardMedia
            component="img"
            height="250"
            image={item.images[0]}
            alt={item.description}
          />
        </Link>
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
          >
            {item.name}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Typography>€ {item.price}</Typography>
          <IconButton
            aria-label="add to wish list"
            onClick={() => {
              addToWishList(item);
            }}
          >
            <FavoriteIcon
              sx={{
                color: wishListProducts.some(
                  (value) => value.name === item.name
                )
                  ? "red"
                  : "aquamarine",
              }}
            />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
