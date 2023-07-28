import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Box, Button } from "@mui/material";

import CartItem from "../components/CartItem";
import { cartActions } from "../redux/slices/cart";
import { RootState } from "../redux/store";
import { createOrder } from "../redux/thunk/order";

export default function Cart() {
  const cartList = useSelector((state: RootState) => state.cart.cartItems);
  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );

  const total = cartList.reduce<number>((accumulator, current) => {
    const productTotal = current.price * current.quantity;
    return accumulator + productTotal;
  }, 0);

  function onClickHandler() {
    createOrder(userDetail?._id, cartList);
  }

  const dispatch = useDispatch();

  const handleCheckOutToast = () => {
    toast.success(`Check out successful with the amount: € ${total}`, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const handleCancelToast = () => {
    toast.error(`Your order has been cancelled.`, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const mappedCartItems = cartList.map((item) => (
    <CartItem key={item._id} item={item} />
  ));

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <h1>Your Cart List</h1>
      {mappedCartItems}
      <h3>Total: € {total}</h3>
      <Box display="flex">
        <Button
          variant="text"
          onClick={() => {
            onClickHandler();
            handleCheckOutToast();
            dispatch(cartActions.clear());
          }}
        >
          Check Out
        </Button>
        <Button
          variant="text"
          onClick={() => {
            handleCancelToast();
            dispatch(cartActions.clear());
          }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
