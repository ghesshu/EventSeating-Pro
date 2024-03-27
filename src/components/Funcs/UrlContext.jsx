import React from "react";
import { createContext } from "react";

export const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  // const url = "https://opc-dashboard.stelgate.tech/api";
  // const url = "http://localhost:5000/api";
  const url = "https://eventseating-pro-api.onrender.com/api";

  return <UrlContext.Provider value={{ url }}>{children}</UrlContext.Provider>;
};
