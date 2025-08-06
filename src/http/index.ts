// Jaise agar file ka naam Api.ts hai
import { Api } from "./Api"; 


const http = new Api();

// http.instance.defaults.baseURL = "https://company-api.mpacoaching.com";
http.instance.defaults.baseURL = import.meta.env.VITE_API_URL;
// http.instance.defaults.baseURL = "https://tn-nest.onrender.com";
// http.instance.defaults.baseURL = "http://localhost:3000";

http.instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default http;
