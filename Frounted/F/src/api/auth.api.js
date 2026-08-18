import api from "./axios";

export const login = (data) =>
  api.post("/A/login/", data);

export const refreshToken = (data) =>
  api.post("/A/refresh/", data);

export const getMe = () =>
  api.get("/A/me/");