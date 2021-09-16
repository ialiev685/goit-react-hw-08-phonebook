import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios");

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common["Authorization"] = "";
  },
};

export const fetchRegisterUser = createAsyncThunk(
  "user/register",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", user);
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchLogInUser = createAsyncThunk(
  "user/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", user);
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
