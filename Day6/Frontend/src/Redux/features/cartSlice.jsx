import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: JSON.parse(sessionStorage.getItem('carts')) || []
}

// cart slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {

        // add to cart
        addToCart: (state, action) => {
            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1;
            } else {
                const temp = { ...action.payload, qnty: 1 };
                state.carts = [...state.carts, temp];
            }

            // Update sessionStorage with the updated cart data
            sessionStorage.setItem('carts', JSON.stringify(state.carts));
        },

        // remove particular items
        removeToCart: (state, action) => {
            const data = state.carts.filter((ele) => ele.id !== action.payload);
            state.carts = data;

            // Update sessionStorage with the updated cart data
            sessionStorage.setItem('carts', JSON.stringify(data));
        },

        // remove single items
        removeSingleIteams: (state, action) => {
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (state.carts[IteamIndex_dec].qnty >= 1) {
                state.carts[IteamIndex_dec].qnty -= 1;
            }

            // Update sessionStorage with the updated cart data
            sessionStorage.setItem('carts', JSON.stringify(state.carts));
        },

        // clear cart
        emptycartIteam: (state, action) => {
            state.carts = [];

            // Clear sessionStorage
            sessionStorage.removeItem('carts');
        }
    }
});

export const { addToCart, removeToCart, removeSingleIteams, emptycartIteam } = cartSlice.actions;

export default cartSlice.reducer;
