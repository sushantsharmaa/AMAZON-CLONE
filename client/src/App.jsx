import { auth } from "./firebase-config";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { getPhoneProducts } from "./features/product/productPhoneSlice";
import { getClothProducts } from "./features/product/productClothSlice";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Textbar from "./components/Textbar/Textbar";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/Authentication/Signin";
import SignUp from "./components/Authentication/SignUp";
import CartContainer from "./components/Cart/CartContainer";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Home from "./pages/Home/Home";

function App() {
  const [user, setUser] = useState({});
  const { cartItems } = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getPhoneProducts());
    dispatch(getClothProducts());
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Navbar user={user} />
        <Textbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {user ? (
            <Route path="/login" element={<Navigate replace to="/" />}></Route>
          ) : (
            <Route path="/login" element={<SignIn />} />
          )}
          {user ? (
            <Route
              path="/register"
              element={<Navigate replace to="/" />}
            ></Route>
          ) : (
            <Route path="/register" element={<SignUp />} />
          )}
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
