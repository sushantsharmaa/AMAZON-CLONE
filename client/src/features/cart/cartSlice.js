import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const url = 'https://amazon-clone-fake-api.herokuapp.com/cart';

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
    try {
        const res = await axios(url);
        return res.data;
    } catch (error) {
        return error
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false;
        },
    }
});

export const { increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;