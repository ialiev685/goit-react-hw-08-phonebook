import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios");

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
};

export const fetchRegisterUser = createAsyncThunk(
  "user/register",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", user);
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      console.log(rejectWithValue(error));
      return rejectWithValue(error.message);
    }
  }
);
