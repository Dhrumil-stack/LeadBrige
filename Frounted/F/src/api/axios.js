import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://leadbrige-production-36b2.up.railway.app",
});

api.interceptors.request.use(
    (config) => {
        const access = localStorage.getItem("access");

        if (access) {
            config.headers.Authorization = `Bearer ${access}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;