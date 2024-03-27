import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { UrlContext } from "./UrlContext";
import { TokenContext } from "./TokenContext";
import axios from "axios";
import { toast } from "react-toastify";

export const ApiCall = createContext();

export const ApiCallProvider = ({ children }) => {
  const { url } = useContext(UrlContext);
  const { token, userID } = useContext(TokenContext);

  const [userData, setUserData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [guestData, setGuestData] = useState([]);

  const config = {
    "Content-Type": "application/json",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // Users
  /////////////////////////////////////////////////////////////////

  const getUser = async () => {
    try {
      const response = await axios.get(`${url}/users`, config);
      setUserData(response?.data);
      return response?.data?.data?.Users;
    } catch (err) {
      if (err.message === "Network Error") {
        toast.error(`Poor network❕`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      console.error("Error fetching User:", err);
      throw err;
    }
  };

  const createUser = async (reqBody) => {
    try {
      await axios.post(`${url}/users`, reqBody, config);
      toast("User Created Successfully 👍", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      toast.error("Error creating User", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("Error creating User:", err);
      throw err;
    }
  };

  const readUser = async (id) => {
    try {
      const response = await axios.get(`${url}/users/${id}`, config);
      return response.data;
    } catch (err) {
      if (err.message === "Network Error") {
        toast.error(`Poor network❕`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      console.error("Error fetching User:", err);
      throw err;
    }
  };

  const updateUser = async (id, reqBody) => {
    try {
      const response = await axios.put(`${url}/users/${id}`, reqBody, config);
      toast("User Updated Successfully 👍", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("User Updated:", response.data);
    } catch (err) {
      const errorType =
        err.message === "Network Error" ? "Poor network" : "Permission denied";
      toast.error(`${errorType} ❕`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("Error updating User:", err);
      throw err;
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${url}/users/${id}`, config);
      toast("User Deleted Successfully ❗️", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("User Deleted:", response.data);
    } catch (err) {
      const errorType =
        err.message === "Network Error" ? "Poor network" : "Permission denied";
      toast.error(`${errorType} ❕`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("Error deleting User:", err);
      throw err;
    }
  };

  /////////////////////////////////////////////////////////////////

  // Tables
  /////////////////////////////////////////////////////////////////

  const getTable = async () => {
    try {
      const response = await axios.get(`${url}/table`, config);
      setTableData(response?.data);
      return response?.data;
    } catch (err) {
      if (err.message === "Network Error") {
        toast.error(`Poor network❕`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      console.error("Error fetching User:", err);
      throw err;
    }
  };

  const createTable = async (reqBody) => {
    try {
      await axios.post(`${url}/table`, reqBody, config);
      toast("User Created Successfully 👍", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      toast.error("Error creating Table", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("Error creating Table:", err);
      throw err;
    }
  };

  const readTable = async (id) => {
    try {
      const response = await axios.get(`${url}/table/${id}`, config);
      return response.data;
    } catch (err) {
      if (err.message === "Network Error") {
        toast.error(`Poor network❕`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      console.error("Error fetching Table:", err);
      throw err;
    }
  };

  const updateTable = async (id, reqBody) => {
    try {
      await axios.put(`${url}/table/${id}`, reqBody, config);
      // console.log(reqBody);
      toast("Table Updated Successfully 👍", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // console.log("User Updated:", response.data);
    } catch (err) {
      const errorType =
        err.message === "Network Error"
          ? "Poor network"
          : "Error Updating Table";
      toast.error(`${errorType} ❕`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("Error updating Table:", err);
      throw err;
    }
  };

  const deleteTable = async (id, img) => {
    try {
      await axios.delete(`${url}/table/${id}`, config);
      toast("Table Deleted Successfully ❗️", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // console.log(" Deleted:", response.data);
    } catch (err) {
      const errorType =
        err.message === "Network Error"
          ? "Poor network"
          : "Error deleting Table";
      toast.error(`${errorType} ❕`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("Error deleting Table:", err);
      throw err;
    }
  };

  /////////////////////////////////////////////////////////////////

  // Guests
  /////////////////////////////////////////////////////////////////

  const getGuest = async () => {
    try {
      const response = await axios.get(`${url}/guest`, config);
      setGuestData(response?.data);
      // console.log(response);
      return response?.data;
    } catch (err) {
      if (err.message === "Network Error") {
        toast.error(`Poor network❕`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      console.error("Error fetching User:", err);
      throw err;
    }
  };

  const createGuest = async (reqBody) => {
    try {
      await axios.post(`${url}/guest`, reqBody, config);
      toast("Guest Created Successfully 👍", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      toast.error("Error creating Guest", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("Error creating Guest:", err);
      throw err;
    }
  };

  const readGuest = async (id) => {
    try {
      const response = await axios.get(`${url}/guest/${id}`, config);
      return response.data;
    } catch (err) {
      if (err.message === "Network Error") {
        toast.error(`Poor network❕`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      console.error("Error fetching Guest:", err);
      throw err;
    }
  };

  const updateGuest = async (id, reqBody) => {
    try {
      await axios.put(`${url}/guest/${id}`, reqBody, config);
      toast("Guest Updated Successfully 👍", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // console.log("User Updated:", response.data);
    } catch (err) {
      const errorType =
        err.message === "Network Error"
          ? "Poor network"
          : "Error Updating Guest";
      toast.error(`${errorType} ❕`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("Error updating Guest:", err);
      throw err;
    }
  };
  const updateGuestStatus = async (id, reqBody) => {
    try {
      await axios.patch(`${url}/guest/${id}`, reqBody, config);
      toast.success("Status Updated Successfully 👍", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // console.log("User Updated:", response.data);
    } catch (err) {
      const errorType =
        err.message === "Network Error"
          ? "Poor network"
          : "Error Updating Guest";
      toast.error(`${errorType} ❕`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("Error updating Guest:", err);
      throw err;
    }
  };

  const deleteGuest = async (id) => {
    try {
      await axios.delete(`${url}/guest/${id}`, config);
      toast("Guest Deleted Successfully ❗️", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // console.log(" Deleted:", response.data);
    } catch (err) {
      const errorType =
        err.message === "Network Error"
          ? "Poor network"
          : "Error deleting Guest";
      toast.error(`${errorType} ❕`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("Error deleting Guest:", err);
      throw err;
    }
  };

  useEffect(() => {
    const load = async () => {
      if (window.location !== "/login" && token !== "") {
        await getTable();
        await getUser();
        await getGuest();
      }
    };

    load();
  }, [window.location, token]);

  /////////////////////////////////////////////////////////////////

  const contextValue = {
    getUser,
    createUser,
    readUser,
    updateUser,
    deleteUser,
    //
    getTable,
    createTable,
    readTable,
    updateTable,
    deleteTable,
    //
    updateGuestStatus,
    getGuest,
    createGuest,
    readGuest,
    updateGuest,
    deleteGuest,

    //
    userData,
    tableData,
    guestData,
  };

  return <ApiCall.Provider value={contextValue}>{children}</ApiCall.Provider>;
};
