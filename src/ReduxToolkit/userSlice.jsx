import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  user: [],
  status: "ideal",
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, actions) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, actions) => {
        state.data = actions.payload;
        state.status = "ideal";
      })
      .addCase(getUser.rejected, (state, actions) => {
        state.status = "error";
      });
  },
});

export default userSlice.reducer;
export const getUser = createAsyncThunk("users/get", async () => {
  const data = await fetch("https://fakestoreapi.com/users");
  const result = await data.json();
  return result;
});
