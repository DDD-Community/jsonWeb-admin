import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://exitnow.link",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(`에러 ${error}, ${error.response.data.message}`);
  }
);

export default axiosInstance;
