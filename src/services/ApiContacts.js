const axios = require("axios");

const API = axios.create({
  baseURL: "http://localhost:3001",
});

export const fetchContacts = async () => {
  return await API.get("/contacts");
};

export const fetchCreateContact = async (item) => {
  return await API.post("/contacts", item);
};

export const fetchDeleteContact = async (id) => {
  return await API.delete(`/contacts/${id}`);
};
