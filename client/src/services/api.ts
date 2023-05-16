import axios, { AxiosInstance } from "axios";
import { LOGIN } from "../constants/routes";

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = LOGIN;
    }
    return Promise.reject(error);
  }
);
