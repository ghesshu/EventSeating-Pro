import React, { createContext, useState } from "react";

// Create the token context
export const TokenContext = createContext();

// Create the token provider component
export const TokenProvider = ({ children }) => {
  const storedToken = localStorage.getItem("OPCadminToken");
  const storedID = localStorage.getItem("OPCUserID");
  const [token, setToken] = useState(storedToken || "");
  const [userID, setUserID] = useState(storedID || "");

  // Helper function to update the token
  const updateToken = (newToken, newID) => {
    localStorage.setItem("OPCadminToken", newToken);
    // setToken(newToken);
    setToken(localStorage.getItem("OPCadminToken"));
    setUserID(newID);
    localStorage.setItem("OPCadminToken", newToken); // Store the token in localStorage
    localStorage.setItem("OPCUserID", newID); // Store the token in localStorage
  };

  // Clear the token from localStorage when logging out
  const clearToken = () => {
    setToken("");
    setUserID("");
    localStorage.removeItem("OPCadminToken");
    localStorage.removeItem("OPCUserID");
    localStorage.clear();
  };

  // Provide the token, update function, and clear function to child components
  return (
    <TokenContext.Provider value={{ token, updateToken, clearToken, userID }}>
      {children}
    </TokenContext.Provider>
  );
};
