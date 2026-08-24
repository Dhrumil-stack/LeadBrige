import api from "./axios";

export const getActivityLogs = (params) => api.get("/F/ActivityLogs/", { params });
export const getActivityLog = (id) => api.get(`/F/ActivityLogs/${id}/`);
