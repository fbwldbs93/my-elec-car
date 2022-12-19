import axios from "axios";

const backendPortNumber = "5000";
const BASE_URL =
  "http://" +
  window.location.hostname +
  ":" +
  process.env.REACT_APP_BACK_SERVER_PORT +
  "/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
  },
  timeout: 10000,
});

export const axiosLoginInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("user_id")}`,
  },
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  req => {
    return req;
  },
  error => {
    throw new Error(error);
  },
);

axiosInstance.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    throw new Error(error);
  },
);
