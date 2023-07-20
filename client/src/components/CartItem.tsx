import { useDispatch } from "react-redux";

import { Box, Button } from "@mui/material";

import { cartActions } from "../redux/slices/cart";
import { CartRecord } from "../types/types";

type Prop = {
  index: number;
  item: CartRecord;
};

export default function CartItem({ index, item }: Prop) {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "40vw",
        m: 1,
      }}
    >
      <p>{item.product.name}</p>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "40%" }}
      >
        <p>€ {item.product.price}</p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => dispatch(cartActions.increment(index))}
          >
            +
          </Button>
          <p>{item.count}</p>
          <Button
            variant="outlined"
            onClick={() => dispatch(cartActions.decrement(index))}
          >
            -
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
