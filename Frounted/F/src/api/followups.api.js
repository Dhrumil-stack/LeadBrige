import api from "./axios";

export const getFollowUps = (params) => api.get("/D/FollowUp/", { params });
export const createFollowUp = (data) => api.post("/D/FollowUp/", data);
export const updateFollowUp = (id, data) => api.patch(`/D/FollowUp/${id}/`, data);
