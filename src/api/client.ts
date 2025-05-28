import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log("API_BASE_URL at runtime:", API_BASE_URL);
const northwindClient = axios.create({
  baseURL: `https://northwind-django-mp-eeded6bzb6a6agen.uksouth-01.azurewebsites.net/api/`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default northwindClient;
