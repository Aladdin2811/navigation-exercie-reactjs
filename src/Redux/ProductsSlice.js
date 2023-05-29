import { createSlice } from '@reduxjs/toolkit'

export const ProductsSlice = createSlice({
  name: 'products',
  initialState:[],
  reducers: {
    fetchProducts: (state, action) => {
        return action.payload
    }
    
  },
})

// Action creators are generated for each case reducer function
export const {fetchProducts} = ProductsSlice.actions

export default ProductsSlice.reducer