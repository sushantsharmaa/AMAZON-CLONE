import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getProducts } from "./features/product/productSlice";
import Navbar from './components/Navbar/Navbar';
import Textbar from './components/Textbar/Textbar';
import Main from './components/Home/Main';
import Footer from './components/Footer/Footer';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, []);

  return (
    <>
      <Navbar />
      <Textbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
