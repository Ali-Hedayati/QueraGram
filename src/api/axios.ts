import axios from "axios";

export const authInstance = axios.create({
  baseURL: "http://185.8.174.74:8000", 
});
