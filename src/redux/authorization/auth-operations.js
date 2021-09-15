import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../../services/ApiContacts";

export const fetchRegisterUser = createAsyncThunk(
  "user/register",
  async (user) => {
    try {
      const data = await API.fetchRegisterUser(user);
      console.log(data);
    } catch (error) {}
  }
);
