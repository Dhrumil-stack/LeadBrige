import api from "./axios";

export const login = (data) =>
  api.post("/A/login/", data);

export const signup = (data) =>
  api.post("/A/user/", data);

export const refreshToken = (data) =>
  api.post("/A/refresh/", data);

export const getMe = () =>
  api.get("/A/me/");