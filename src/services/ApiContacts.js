const axios = require("axios");

const API = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

//axios.defaults.baseURL

export const fetchRegisterUser = async (user) => {
  console.log(user);
  return API.post("/users/signup", user);
};

export const fetchContacts = async () => {
  return await API.get("/contacts");
};

export const fetchCreateContact = async (item) => {
  return await API.post("/contacts", item);
};

export const fetchDeleteContact = async (id) => {
  return await API.delete(`/contacts/${id}`);
};
