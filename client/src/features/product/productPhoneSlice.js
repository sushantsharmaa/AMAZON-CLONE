import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://amazon-clone-by-sushant.herokuapp.com/phones";

const initialState = {
  phones: [],
  isLoading: true,
};

export const getPhoneProducts = createAsyncThunk(
  "productPhone/getPhoneProducts",
  async () => {
    try {
      const res = await axios(url);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const productPhoneSlice = createSlice({
  name: "productPhoneData",
  initialState,
  reducers: {},
  extraReducers: {
    [getPhoneProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPhoneProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.phones = action.payload;
    },
    [getPhoneProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default productPhoneSlice.reducer;
