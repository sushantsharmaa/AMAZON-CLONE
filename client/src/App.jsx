import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getProducts } from "./features/product/productSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, []);

  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
