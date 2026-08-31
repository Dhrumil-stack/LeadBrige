import api from "./axios";

export const getNotifications = async (params) => {
  const response = await api.get("/E/Noti/", { params });
  return response.data;
};
export const getNotification = async (id) => {
  const response = await api.get(`/E/Noti/${id}/`);
  return response.data;
};
export const markAsRead = async (id) => {
  const response = await api.patch(`/E/Noti/${id}/`, { is_read: true });
  return response.data;
};
