import "./navbar.css";
import { signOut } from "firebase/auth";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../../firebase-config";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const Navbar = ({ user }) => {
  const { amount } = useSelector((state) => state.cartData);
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <Link to="/">
              <img src="./amazon_PNG25.png" alt="logo" />
            </Link>
            .in
          </div>
          <div className="location">
            <FmdGoodOutlinedIcon />
            <span>Hello</span>
            <h6>Select your address</h6>
          </div>
          <div className="nav_searchbaar">
            <input type="text" name="" id="" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <Link to="/login">
              {user ? (
                <span
                  onClick={async () => {
                    await signOut(auth);
                  }}
                  style={{ color: "white" }}
                >
                  Hello Guest
                  <p style={{ margin: 0, marginLeft: "10px" }}>(Signout)</p>
                </span>
              ) : (
                <div className="sign-in-btn">
                  <span>Hello, Sign In</span>
                  <h6>Account & List</h6>
                </div>
              )}
            </Link>
          </div>
          <div className="r-and-o">
            <span>Returns</span>
            <h6>& Orders</h6>
          </div>
          <Link to="/cart">
            <div className="cart_btn">
              <Badge badgeContent={amount} color="primary">
                <ShoppingCartIcon id="icon" />
              </Badge>
              <p>Cart</p>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
