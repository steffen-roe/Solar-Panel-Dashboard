import axios from "axios";

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API}`,
});

export default apiClient;
