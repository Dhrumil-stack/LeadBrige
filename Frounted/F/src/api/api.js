import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

api.interceptors.request.use(
  (config) => {
    const access = localStorage.getItem("access");

    console.log("TOKEN EXISTS:", !!access);
    console.log("TOKEN START:", access?.slice(0, 20));

    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }

    console.log("URL:", config.baseURL + config.url);
    console.log("AUTH:", config.headers.Authorization);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;