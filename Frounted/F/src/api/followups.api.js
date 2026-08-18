import api from "./axios";

export const getFollowUps = (params) => api.get("/followups/", { params });
export const createFollowUp = (data) => api.post("/followups/", data);
export const updateFollowUp = (id, data) => api.patch(`/followups/${id}/`, data);
