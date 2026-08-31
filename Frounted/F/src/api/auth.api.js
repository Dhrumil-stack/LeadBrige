import api from "./axios";

export const login = async (data) => {
  const response = await api.post("/A/login/", data);
  return response.data;
};

export const signup = async (data) => {
  const response = await api.post("/A/user/", data);
  return response.data;
};

export const refreshToken = async (data) => {
  const response = await api.post("/A/refresh/", data);
  return response.data;
};

export const getMe = async () => {
  const response = await api.get("/A/me/");
  return response.data;
};