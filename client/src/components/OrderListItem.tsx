import { Box } from "@mui/material";
import { ProductOrder } from "../types/types";

type Prop = {
  product: ProductOrder;
};

export default function ProductOrderList({ product }: Prop) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "40vw",
        m: 1,
      }}
    >
      <p>{product.name}</p>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "40%" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <p>{product.quantity}</p>
        </Box>
      </Box>
    </Box>
  );
}
