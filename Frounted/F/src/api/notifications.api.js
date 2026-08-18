import api from "./axios";

export const getNotifications = (params) => api.get("/notifications/", { params });
export const getNotification = (id) => api.get(`/notifications/${id}/`);
export const updateNotification = (id, data) => api.patch(`/notifications/${id}/`, data);
