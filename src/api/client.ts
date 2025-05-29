import axios from "axios";

console.log("--- CLIENT-SIDE ENV DEBUG START ---");

console.log("typeof import.meta.env:", typeof import.meta.env);

console.log("import.meta.env (entire object):", import.meta.env);

console.log(
  "import.meta.env.VITE_API_BASE_URL (direct access):",

  import.meta.env.VITE_API_BASE_URL
);

console.log("--- CLIENT-SIDE ENV DEBUG END ---");

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const northwindClient = axios.create({
  baseURL: `${API_BASE_URL}/api/`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default northwindClient;
