import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import type { IGenericApiResponse } from "../interface/api/genericApi.interface";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // Replace with your API base URL
  timeout: 5000, // Optional timeout
  withCredentials: true, // Include cookies in requests if needed,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    // Log response (optional)
    console.log("Response:", response.status, response.config.url);
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      // Server responded with error status
      switch (error.response.status) {
        case 401:
          // Unauthorized - redirect to login

          // window.location.href = "/login";
          break;
        case 403:
          console.error("Forbidden! You don't have permission.");
          break;
        case 404:
          console.error("Resource not found!");
          break;
        case 500:
          console.error("Server error!");
          break;
        default:
          console.error("Error:", error.response.data);
      }
    } else if (error.request) {
      // Request made but no response
      console.error("No response from server");
    } else {
      // Error in request setup
      console.error("Error:", error.message);
    }

    return Promise.reject(error);
  }
);

// HTTP Methods wrapper
export class HTTPMethods {
  static get<T>(url: string, params?: AxiosRequestConfig) {
    return axiosInstance.get<IGenericApiResponse<T>>(url, { params });
  }

  static post<Req, Res>(url: string, data?: Req, config?: AxiosRequestConfig) {
    return axiosInstance.post<AxiosResponse<IGenericApiResponse<Res>>>(
      url,
      data,
      config
    );
  }
}
