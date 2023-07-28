import axios from "axios";

import { orderActions } from "../slices/order";
import { AppDispatch } from "../store";
import { ProductOrder } from "../../types/types";

export function fetchOrderData(userId: string) {
  const orderUrl = `http://localhost:8000/orders/${userId}`;
  const token = localStorage.getItem("userToken");

  return async (dispatch: AppDispatch) => {
    axios
      .get(orderUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        dispatch(orderActions.setOrderList(data));
      });
  };
}

export function createOrder(
  userId: string | undefined,
  productList: ProductOrder[]
) {
  const token = localStorage.getItem("userToken");
  const url = `http://localhost:8000/orders/${userId}`;

  axios
    .post(
      url,
      { productList: productList },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(res, "new data");
      if (res.status === 200) {
        alert("Thanks for shopping with us");
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        alert("pls log in to make order");
        return;
      }
    });
}
