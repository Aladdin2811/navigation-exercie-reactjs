import { configureStore } from '@reduxjs/toolkit'
import ProductsSlice from './ProductsSlice'
import counterSlice from './counterSlice'
import userSlice from './userSlice'
import thunkMiddleware from 'redux-thunk'

export const store = configureStore({
  reducer: {
    products: ProductsSlice,
    counter: counterSlice,
    users: userSlice
  },
  middleware: [thunkMiddleware]
})