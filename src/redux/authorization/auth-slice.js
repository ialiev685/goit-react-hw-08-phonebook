import { createSlice } from "@reduxjs/toolkit";
import { fetchRegisterUser, fetchLogInUser } from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  islogged: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [fetchRegisterUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [fetchRegisterUser.rejected](state, action) {
      state.error = action.payload;
    },

    [fetchLogInUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.islogged = true;
    },
  },
});

export default authSlice.reducer;
