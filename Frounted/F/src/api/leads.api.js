import api from "./axios";

export const getLeads = async (params = {}) => {
  const response = await api.get("/B/leads/", {
    params,
  });

  return response.data;
};

export const getLead = async (id) => {
  const response = await api.get(`/B/leads/${id}/`);
  return response.data;
};

export const createLead = async (data) => {
  const response = await api.post("/B/leads/", data);
  return response.data;
};

export const assignLead = async (leadId, agentId) => {
  const response = await api.post(`/B/leads/${leadId}/assign/`, {
    agent_id: agentId,
  });
  return response.data;
};

export const getAgents = async () => {
  const response = await api.get("/A/agents/");
  return response.data;
};