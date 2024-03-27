import React, { useEffect, useState, useContext } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Content from "./Content";
import { TokenContext } from "../Funcs/TokenContext";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  // State for controlling the sidebar menu
  const navigate = useNavigate();
  const { clearToken, token } = useContext(TokenContext);
  const [menu, setMenu] = useState(false);
  const [menuCL, setMenuCL] = useState("w-[20rem] -translate-x-0 ");
  const [tll, setTll] = useState("");

  // Function to handle menu click
  const menuClick = (e) => {
    e.preventDefault();
    if (menu === false) {
      // Show menu
      setMenu(true);
      setMenuCL("w-[0rem] -translate-x-60");
    } else {
      // Hide menu
      setMenu(false);
      setMenuCL("w-[20rem] -translate-x-0");
    }
  };

  const clickB = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1024) {
      setMenu(true);
      setMenuCL("w-[0rem] -translate-x-60");
    }
  };

  // function to check for inactivity
  const checkForInactivity = async () => {
    if (window.location.protocol !== "/") {
      const expireTime = localStorage.getItem("expireTimeA");
      if (expireTime < Date.now()) {
        console.log("jhgfds ");
        await clearToken();
        navigate("/login");
      }
    }
  };

  // function to update expire time
  const UpdateExpireTime = () => {
    const expireTime = Date.now() + 3600000;

    localStorage.setItem("expireTimeA", expireTime);
  };

  //UseeEffect to set interval to check for activity
  useEffect(() => {
    const interval = setInterval(() => {
      checkForInactivity();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (token === "") {
      navigate("/login");
    }
  }, [token]);

  //Update expireTime
  useEffect(() => {
    UpdateExpireTime();

    window.addEventListener("click", UpdateExpireTime);
    window.addEventListener("keypress", UpdateExpireTime);
    window.addEventListener("scroll", UpdateExpireTime);
    window.addEventListener("mousemove", UpdateExpireTime);

    return () => {
      window.removeEventListener("click", UpdateExpireTime);
      window.removeEventListener("keypress", UpdateExpireTime);
      window.removeEventListener("scroll", UpdateExpireTime);
      window.removeEventListener("mousemove", UpdateExpireTime);
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* Navbar code */}
      <div className="h-14 fixed z-40 bg-white/0  w-screen">
        <Header menuClick={menuClick} />
      </div>

      {/* Sidebar and Page Content Code */}
      <div className="flex bg-gray-100">
        {/* Sidebar code */}
        <div
          className={` ${menuCL} transition-all duration-700 ease-out bg-white h-screen fixed z-50 lg:static shadow-lg`}
        >
          <SideBar clickB={clickB} menuClick={menuClick} />
        </div>

        {/* Page Content Code */}
        <div
          className={`z-20 w-full transition duration-500 ease-out h-[100vh] mt-14 bg-gray-100 md:bg-whit overflow-y-hidden scroll-smooth flex items-center justify-center`}
        >
          <Content content={<Outlet />} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
