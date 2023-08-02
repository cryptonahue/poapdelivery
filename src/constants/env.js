const isDev = process.env.NODE_ENV === "development";
const API_URL = isDev

  ? "https://backend-defilatam-production.up.railway.app"
  : "https://backend-defilatam-production.up.railway.app";


const APP_URL = isDev ? "http://localhost:3000" : "https://defilatam.com";

export { API_URL, APP_URL };
