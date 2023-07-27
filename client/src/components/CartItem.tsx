import { useDispatch } from "react-redux";

import { Box, Button } from "@mui/material";

import { cartActions } from "../redux/slices/cart";
import { ProductOrder } from "../types/types";

type Prop = {
  item: ProductOrder;
};

export default function CartItem({ item }: Prop) {
  const dispatch = useDispatch();

  const increaseQuantityHandler = () => {
    dispatch(cartActions.increaseQuantity(item));
  };

  const decreaseQuantityHandler = () => {
    dispatch(cartActions.decreaseQuantity(item));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "40vw",
        m: 1,
      }}
    >
      <p>{item.name}</p>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "40%" }}
      >
        <p>€ {item.price * item.quantity}</p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <Button variant="outlined" onClick={() => increaseQuantityHandler()}>
            +
          </Button>
          <p>{item.quantity}</p>
          <Button variant="outlined" onClick={() => decreaseQuantityHandler()}>
            -
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
