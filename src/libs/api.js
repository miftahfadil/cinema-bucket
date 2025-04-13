import axios from "axios";

const httpClient = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});


export default httpClient;