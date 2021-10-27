import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "server",
  initialState: {
    value: 'https://mision2022-crackcoders.herokuapp.com',//"http://localhost:3030",
    sales: false,
  },
  reducers: {
    login: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
    },
  },
});

// Action creators are generated for each case reducer function
//export const { login, logout } = counterSlice.actions

export default counterSlice.reducer;
