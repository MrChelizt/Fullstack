import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Badge } from "@mui/material";

import { productActions } from "../../redux/slices/product";
import { RootState } from "../../redux/store";
import WishList from "../WishList";

import "../Component.css";

export default function NavBar() {
  const wishList = useSelector(
    (state: RootState) => state.products.wishProducts
  );

  const cartCount = useSelector(
    (state: RootState) => state.cart.cartItems.length
  );

  const dispatch = useDispatch();

  return (
    <div className="navbar_container">
      <ul className="nav_list">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="link" to="/sign_up">
            SignUp
          </Link>
        </li>
        <li
          className="link"
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(productActions.toggleWishList())}
        >
          <Badge badgeContent={wishList.length} showZero color="primary">
            Wish List
          </Badge>
          <WishList />
        </li>
        <li>
          <Link className="link" to="/cart">
            <Badge badgeContent={cartCount} showZero color="primary">
              Cart
            </Badge>
          </Link>
        </li>
      </ul>
    </div>
  );
}
