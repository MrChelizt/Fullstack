import axios from "axios";

import { orderActions } from "../slices/order";
import { AppDispatch } from "../store";

export function fetchOrderData(userId: string) {
  const orderUrl = `http://localhost:8000/orders/${userId}`;
  return async (dispatch: AppDispatch) => {
    axios.get(orderUrl).then(({ data }) => {
      dispatch(orderActions.setOrderList(data));
    });
  };
}
