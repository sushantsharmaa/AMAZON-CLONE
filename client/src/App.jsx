import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getProducts } from "./features/product/productSlice";
import Navbar from './components/Navbar/Navbar';
import Textbar from './components/Textbar/Textbar';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, []);

  return (
    <>
      <Navbar />
      <Textbar />
    </>
  );
}

export default App;
