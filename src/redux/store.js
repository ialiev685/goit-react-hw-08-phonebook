// import { createStore, combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import contacts from "./phonebook/contacts-reducer";

export const store = configureStore({
  reducer: {
    contacts: contacts,
  },

  devTools: process.env.NODE_ENV === "development",
});
