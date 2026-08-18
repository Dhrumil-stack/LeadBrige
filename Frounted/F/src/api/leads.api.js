import api from "./api";

export const getLeads = async (params = {}) => {
  const response = await api.get("/B/leads/", {
    params,
  });

  return response.data;
};