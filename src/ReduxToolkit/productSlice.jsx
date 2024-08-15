import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  product: [],
  status: "idle",
  filter: "",
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    deleteProduct: (state, action) => {
      const index = state.data.findIndex(
        (product) => product.id === action.payload,
      );
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },
    updateProduct: (state, action) => {
      const index = state.data.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index!== -1) {
        state.data[index] = action.payload;
      }
    },
    addProduct: (state, action) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { setFilter, deleteProduct, updateProduct, addProduct } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});
