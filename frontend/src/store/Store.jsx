import {configureStore} from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice';
import productSlice from './reducers/productSlice';
import cartSlice from './reducers/cartSlice';

export const Store = configureStore({
    reducer: {
        userReducer : userSlice,
        productReducer: productSlice,
        cartReducer: cartSlice,
    }
})


