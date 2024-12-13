import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://1hebxmo6bj.execute-api.eu-central-1.amazonaws.com'
}); 

export default apiClient; 