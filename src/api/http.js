import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://exitnow.link",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
});

export default axiosInstance;
