import api from "./axios";

export const getLeads = async (params = {}) => {
  const response = await api.get("/B/leads/", {
    params,
  });

  return response.data;
};

export const createLead = async (data) => {
  const response = await api.post("/B/leads/", data);
  return response.data;
};