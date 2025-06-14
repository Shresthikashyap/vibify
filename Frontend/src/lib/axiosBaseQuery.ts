import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const axiosBaseQuery = async ({
  url,
  method,
  data,
  params,
  headers,
}) => {
  try {
    const response = await axiosInstance({
      url,
      method,
      data,
      params,
      headers,
    });
    return response.data;
  } catch (error) {
    const err = error.response?.data || { message: "Something went wrong" };
    throw err;
  }
};
