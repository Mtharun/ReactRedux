import { createSlice } from "@reduxjs/toolkit";

export const ProductsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        cartProducts: [],
    },
    reducers: {
        saveProducts: (state, action) => {
            console.log("STATE-ACTION", state, action);
            if (action.payload) {
                state.products = [...action.payload];
                // state.products.push(...action.payload);
            }
        },
        saveCartProducts: (state, action) => {
            if (action.payload) {
                state.cartProducts = [...action.payload];
                // state.cartProducts.push(...action.payload);
            }
        },
        deleteProduct: (state, action) => { },
    },
});

export const { saveProducts, saveCartProducts, deleteProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;