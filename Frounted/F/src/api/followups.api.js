import api from "./axios";

export const getFollowUps = async (params) => {
  const response = await api.get("/D/FollowUp/", { params });
  return response.data;
};
export const getFollowUpDetail = async (id) => {
  const response = await api.get(`/D/FollowUp/${id}/`);
  return response.data;
};
export const createFollowUp = async (data) => {
  const response = await api.post("/D/FollowUp/", data);
  return response.data;
};
export const updateFollowUp = async (id, data) => {
  const response = await api.patch(`/D/FollowUp/${id}/`, data);
  return response.data;
};
export const completeFollowUp = async (id) => {
  const response = await api.post(`/D/FollowUp/${id}/complete/`);
  return response.data;
};
export const getFollowUpStats = async () => {
  const response = await api.get("/D/FollowUp/stats/");
  return response.data;
};
