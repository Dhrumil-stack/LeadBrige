import api from "./axios";


// ================= DASHBOARD STATS =================

export const getDashboardStats = async () => {
  const response = await api.get("/G/stats/");
  return response.data;
};


// ================= DASHBOARD FUNNEL =================

export const getDashboardFunnel = async () => {
  const response = await api.get("/G/funnel/");
  return response.data;
};


// ================= DASHBOARD SOURCES =================

export const getDashboardSources = async () => {
  const response = await api.get("/G/sources/");
  return response.data;
};


// ================= RECENT LEADS =================

export const getRecentLeads = async () => {

  try {

    const response = await api.get("/B/leads/");

    console.log("LEADS STATUS:", response.status);
    console.log("LEADS DATA:", response.data);

    return response.data.results || [];

  } catch (error) {

    console.log("========== LEADS ERROR ==========");

    console.log(
      "STATUS:",
      error.response?.status
    );

    console.log(
      "DATA:",
      JSON.stringify(
        error.response?.data,
        null,
        2
      )
    );

    console.log(
      "REQUEST AUTH:",
      error.config?.headers?.Authorization
    );

    console.log("=================================");

    throw error;
  }
};


// ================= UPCOMING FOLLOW UPS =================

export const getUpcomingFollowUps = async () => {

  try {

    const response = await api.get(
      "/D/FollowUp/"
    );

    console.log(
      "FOLLOWUPS STATUS:",
      response.status
    );

    console.log(
      "FOLLOWUPS DATA:",
      response.data
    );

    return response.data.results || [];

  } catch (error) {

    console.log(
      "========== FOLLOWUPS ERROR =========="
    );

    console.log(
      "STATUS:",
      error.response?.status
    );

    console.log(
      "DATA:",
      JSON.stringify(
        error.response?.data,
        null,
        2
      )
    );

    console.log(
      "===================================="
    );

    throw error;
  }
};