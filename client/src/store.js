import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import productPhoneReducer from "./features/product/productPhoneSlice";
import productClothReducer from "./features/product/productClothSlice";

export const store = configureStore({
  reducer: {
    productPhoneData: productPhoneReducer,
    productClothData: productClothReducer,
    cartData: cartReducer,
  },
});
