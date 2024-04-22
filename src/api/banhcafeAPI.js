import axios from "axios";

// Obtiene la URL y clave de la API desde las variables de entorno de Vite
const API_URL = import.meta.env.VITE_BASE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// Crea una instancia de cliente Axios con la URL base de la API
//Creacion de la constante segundo commit
const banhcafeAPI = axios.create({
 baseURL: API_URL,
});

// configuración de headers para los http requests
banhcafeAPI.interceptors.request.use((config) => {
 config.headers = {
  ...config.headers,
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
  "X-Frame-Options": "SAMEORIGIN",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "origin-when-cross-origin",
  "Permissions-Policy":
   "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  "Content-Security-Policy": "default-src 'self' banhcafe.hn *.banhcafe.hn",
  Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("secotp"))}`,
  apikey: API_KEY,
 };
 return config;
});

export default banhcafeAPI;