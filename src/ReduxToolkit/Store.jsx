import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";

const Store = configureStore({
  reducer: {
    users: userSlice,
    products: productSlice,
  },
});

export default Store;
