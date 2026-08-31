import api from "./axios";

export const getActivityLogs = async (params) => {
  const response = await api.get("/F/ActivityLogs/", { params });
  return response.data;
};
export const getActivityLog = async (id) => {
  const response = await api.get(`/F/ActivityLogs/${id}/`);
  return response.data;
};
