import React, { createContext, useContext, useState } from "react";
import { login as loginApi, getMe } from "../api/auth.api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);

    try {
      // 1. Login
      const data = await loginApi({ email, password });

      // 2. Save JWT tokens
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      // 3. Get logged-in user
      const userData = await getMe();

      setUser(userData);

      return {
        success: true,
        user: userData,
      };
    }  catch (error) {
            console.error("LOGIN ERROR:", error);
            console.error("STATUS:", error.response?.status);
            console.error("DATA:", error.response?.data);

            return {
                success: false,
                error: JSON.stringify(
                error.response?.data || "Request failed"
                ),
            };
            } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}