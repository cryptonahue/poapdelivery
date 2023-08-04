const isDev = process.env.NODE_ENV === "development";
const API_URL = isDev

  ? "http://localhost:1337"
  : "https://links-backend-production.up.railway.app/";


const APP_URL = isDev ? "http://localhost:3000" : "https://poapdelivery.xyz";

export { API_URL, APP_URL };
