import api from "./axios";

export const getNotifications = (params) => api.get("/E/Noti/", { params });
export const getNotification = (id) => api.get(`/E/Noti/${id}/`);
export const markAsRead = (id) => api.patch(`/E/Noti/${id}/`, { is_read: true });
