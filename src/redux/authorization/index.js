export {
  fetchRegisterUser,
  fetchLogInUser,
  fetchLogOut,
  fetchCurrentUser,
} from "./auth-operations";
export { default as authReducer } from "./auth-slice";
export { getIsLogged, getUserName } from "./auth-selector";
