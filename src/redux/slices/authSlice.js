import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userList: [
      { login: "Admin", password: 123 },
      { login: "Vladimir", password: 123 },
      { login: "Ervin", password: 123 },
    ],
    isAuth: false,
  },
  reducers: {
    setAuth: (state, { payload }) => {
      state.auth.isAuth = payload;
    },
  },
});

export default authSlice.reducer;
