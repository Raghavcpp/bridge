// src/utils/API.js
import axios from "axios";

const API = axios.create({
  // CRA only inlines env vars prefixed with REACT_APP_ at build time.
  // Fallback keeps the deployed backend reachable even if the build-time var is missing.
  baseURL: process.env.REACT_APP_API_URL || "https://bridge-server-ayn6.onrender.com",
  withCredentials: true, // if using cookies
});

export default API;
