import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from './Reducers/ProductsSlice';

export default configureStore({
    reducer:{
        productsData: ProductsReducer,
    },
});