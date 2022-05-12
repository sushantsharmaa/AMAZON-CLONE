import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'http://localhost:5000/products';

const initialState = {
    products: [],
}

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    try {
        const res = await axios(url);
        return res.data;
    } catch (error) {
        return error
    }
});

const productSlice = createSlice({
    name: 'productsData',
    initialState,
    reducers: {},
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        },
        [getProducts.rejected]: (state) => {
            state.isLoading = false;
        },
    }
});


export default productSlice.reducer;
