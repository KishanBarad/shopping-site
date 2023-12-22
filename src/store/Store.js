import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../feature/Productslice'
import cartsReducer from '../feature/cartSlice'

export const store = configureStore({
  reducer: {
    product:productReducer,
    cart:cartsReducer
  },
})