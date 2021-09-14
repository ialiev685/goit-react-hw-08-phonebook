import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-action";
import {
  fetchContacts,
  fetchCreateContact,
  fetchDeleteContact,
} from "./contacts-operations";

// const items = createReducer([], {
//   [actions.fetchSuccess]: (state, action) => [...action.payload, ...state],
//   [actions.deleteItem]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
// });

const items = createReducer([], {
  [fetchContacts.fulfilled]: (state, action) => [...action.payload, ...state],
  [fetchCreateContact.fulfilled]: (state, action) => [action.payload, ...state],
  [fetchDeleteContact.fulfilled]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const isLoader = createReducer(false, {
  [fetchDeleteContact.pending]: () => true,
  [fetchContacts.pending]: () => true,
  [fetchCreateContact.pending]: () => true,
  [fetchDeleteContact.fulfilled]: () => false,
  [fetchContacts.fulfilled]: () => false,
  [fetchCreateContact.fulfilled]: () => false,
  [fetchDeleteContact.rejected]: () => false,
  [fetchContacts.rejected]: () => false,
  [fetchCreateContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchDeleteContact.rejected]: (_, action) => action.payload,
  [fetchDeleteContact.pending]: () => null,
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [fetchCreateContact.rejected]: (_, action) => action.payload,
  [fetchCreateContact.pending]: () => null,
});

const filter = createReducer("", {
  [actions.getFilterItems]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
  isLoader,
  error,
});
