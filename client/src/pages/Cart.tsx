import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Box, Button } from "@mui/material";

import CartItem from "../components/CartItem";
import { cartActions } from "../redux/slices/cart";
import { RootState } from "../redux/store";
import axios from "axios";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const userDetail = useSelector(
    (state: RootState) => state.userInformation.userInformation
  );

  const total = cartItems.reduce<number>((add, current) => {
    const productTotal = current.price * current.quantity;
    return add + productTotal;
  }, 0);

  const onClickHandler = () => {
    const token = localStorage.getItem("userToken");
    const url = `http://localhost:8000/orders/${userDetail?._id}`;
    axios
      .post(
        url,
        { productList: cartItems },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("thanks");
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("log in");
          return;
        }
      });
  };

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

  const mappedCartItems = cartItems.map((item) => <CartItem item={item} />);

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
