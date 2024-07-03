import axios from "axios";

export const authInstance = axios.create({
  baseURL: "http://185.8.174.74:8000",
});

const accessToken = localStorage.getItem("accessToken");
export const axiosInsance = axios.create({
  baseURL: "http://185.8.174.74:8000",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
