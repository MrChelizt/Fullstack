import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import { fetchOrderData } from "../redux/thunk/order";
import ProductOrderList from "../components/OrderListItem";

export default function OrderList() {
  const orderList = useSelector((state: RootState) => state.order.orderList);

  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userDetail) {
      dispatch(fetchOrderData(userDetail._id));
    }
  }, [dispatch, userDetail]);

  const mappedOrders = orderList.map((item) => (
    <div>
      <div> {new Date(item.createdAt).toLocaleDateString()}</div>
      <div>
        {item.productList.map((product) => (
          <ProductOrderList product={product} />
        ))}
      </div>
    </div>
  ));

  return (
    <div>
      <h1>OrderList</h1>
      {mappedOrders}
    </div>
  );
}
