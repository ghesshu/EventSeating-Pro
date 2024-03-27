import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { TokenContext } from "../Funcs/TokenContext";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

const Header = (props) => {
  // Destructuring props
  const { menuClick } = props;
  const { clearToken } = useContext(TokenContext);

  // State for controlling the profile menu visibility and position
  const [profList, setProfList] = useState("translate-x-44");
  const [profClick, setProfClick] = useState(false);

  // Ref for the profile menu
  const proRef = useRef(null);

  const Logout = async (e) => {
    try {
      await clearToken();
      toast("Logged Out ", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      redirect(`/login`, { replace: true });
    } catch (err) {
      toast.error("Log Out Error", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(err);
    }
  };

  // Function to handle profile button click
  function handleProfileClick(e) {
    e.preventDefault();

    if (profClick === false) {
      // Show profile menu
      setProfClick(true);
      setProfList("translate-x-0");
      console.log(true);
    } else {
      // Hide profile menu
      setProfClick(false);
      setProfList("translate-x-44");
      console.log(false);
    }
  }

  return (
    <div className="h-full w-screen bg-gray-100 text-white">
      <div className="w-screen h-full flex justify-between items-center px-">
        {/* Logo and Menu Button */}
        <div className="flex items-center justify-center space-x-6 w-[20rem] lg:w-[25rem]">
          <h1 className="w-[10rem] md:w-[18rem] slg:w-[14rem] xl:w-[15.4rem] text-center font-extrabold text-2xl border-r text-purple-950">
            EventSeating
          </h1>

          <button
            onClick={menuClick}
            className="bg-purple-600 p-2 text-white rounded-md hover:bg-white hover:text-purple-500 transition duration-500 ease-in-out"
          >
            <MenuIcon />
          </button>
        </div>

        {/* Profile Button and Menu */}
        <div className="px-4">
          <button
            onClick={handleProfileClick}
            className="bg-purple-100 p-2 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition duration-500 ease-in-out"
          >
            <AccountCircleOutlinedIcon />
          </button>

          <div
            ref={proRef}
            className={`${profList} transition-all duration-300 ease-linear flex flex-col absolute mt-6 bg-white w-32 -ml-[6.0rem] shadow-lg rounded`}
          >
            {/* Profile Link */}
            {/* <div className='text-center text-purple-600 font-bold hover:border-b-purple-800 border-b transition duration-500 ease-in-out rounded-t'>
              <Link to={`/profile`}>
                <h1 className='py-4'>Profile</h1>
              </Link>
            </div> */}
            {/* Logout Button */}
            <button
              onClick={Logout}
              className="text-center text-red-600 font-bold hover:border-red-600 border-b border-red-400 transition duration-500 ease-in-out rounded-"
            >
              <h1 className="py-4">Logout</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
