import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getProducts } from "./features/product/productSlice";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { auth } from './firebase-config'
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CartContainer from './components/Cart/CartContainer';
import Main from './components/Home/Main';
import Navbar from './components/Navbar/Navbar';
import Textbar from './components/Textbar/Textbar';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';


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
    dispatch(getProducts());
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Navbar user={user} />
        <Textbar />
        <Routes>
          <Route path="/" element={<Main />} />
          {user ? <Route path='/login' element={<Navigate replace to="/" />}></Route>
            : <Route path="/login" element={<SignIn />} />}
          {user ? <Route path='/register' element={<Navigate replace to="/" />}></Route>
            : <Route path="/register" element={<SignUp />} />}
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
