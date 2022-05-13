import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getProducts } from "./features/product/productSlice";
import Cart from './components/Cart/Cart';
import Main from './components/Home/Main';
import Navbar from './components/Navbar/Navbar';
import Textbar from './components/Textbar/Textbar';
import Footer from './components/Footer/Footer';
import Login from "./components/Authentication/Login"
import Signin from "./components/Authentication/Signin"
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Textbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/register' element={<Signin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
