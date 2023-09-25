import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    sortByPrice: "lowToHigh", // Default sorting order
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
  
    deleteItem: (state) => {
      // Remove the product with the matching id
      state.items = state.items.filter(product => product.id !== action.payload);
    },
    sortItemsByPrice: (state, action) => {
        state.sortByPrice = action.payload;
      },
  },
});

export const { addProduct, deleteItem , sortItemsByPrice} = productSlice.actions;

export default productSlice.reducer;
