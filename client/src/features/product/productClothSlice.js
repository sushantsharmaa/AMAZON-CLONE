import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/clothes";

const initialState = {
  clothes: [],
  isLoading: true,
};

export const getClothProducts = createAsyncThunk(
  "productCloth/getClothProducts",
  async () => {
    try {
      const res = await axios(url);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const productClothSlice = createSlice({
  name: "productClothData",
  initialState,
  reducers: {},
  extraReducers: {
    [getClothProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getClothProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.clothes = action.payload;
    },
    [getClothProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default productClothSlice.reducer;
