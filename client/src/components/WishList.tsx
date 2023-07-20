import { useDispatch, useSelector } from "react-redux";

import { Drawer, ListItem, ListItemText } from "@mui/material";

import { productActions } from "../redux/slices/product";
import { RootState } from "../redux/store";

import "./Component.css";

export default function WishList() {
  const wishList = useSelector(
    (state: RootState) => state.products.wishProducts
  );

  const openDrawer = useSelector((state: RootState) => state.products.setOpen);

  const dispatch = useDispatch();

  const getList = () => (
    <div
      style={{ width: 250 }}
      onClick={() => dispatch(productActions.toggleWishList())}
    >
      <h3>Wish List</h3>
      {wishList?.map((item) => (
        <ListItem key={item.id}>
          <img className="wishListImg" src={item.images[0]} alt={item.name} />
          <ListItemText>{item.name}</ListItemText>
        </ListItem>
      ))}
    </div>
  );

  return (
    <div>
      <Drawer
        open={openDrawer}
        anchor={"right"}
        onClick={() => dispatch(productActions.toggleWishList())}
        onClose={() => dispatch(productActions.toggleWishList())}
      >
        {getList()}
      </Drawer>
    </div>
  );
}
