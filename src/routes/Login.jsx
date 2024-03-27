import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useColorScheme } from "@mui/material";
import { TokenContext } from "../components/Funcs/TokenContext";
import logo from "../Assets/logo.png";
import { UrlContext } from "../components/Funcs/UrlContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Tok

const Login = () => {
  const navigate = useNavigate();
  const { updateToken } = useContext(TokenContext);
  const { url } = useContext(UrlContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadBtn, setLooadBtn] = useState("hidden");
  const [logBtn, setLogBtn] = useState("block");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLogBtn("hidden");
    setLooadBtn("block");

    if (email === "" || password === "") {
      setLogBtn("block");
      setLooadBtn("hidden");
      return toast.warn("Please fill in the spaces.", { autoClose: 1500 });
    }
    try {
      const reqBody = {
        email: email,
        password: password,
      };
      const response = await axios.post(`${url}/login`, reqBody);
      const newToken = response.data.token;
      const newID = response.data._id;
      updateToken(newToken, newID);
      navigate("/dashboard");

      console.log(response.data._id);
      setLogBtn("block");
      setLooadBtn("hidden");
    } catch (err) {
      console.log(err);
      setLogBtn("block");
      setLooadBtn("hidden");
      return toast.error("Wrong Details", { autoClose: 1500 });
    }
  };
  return (
    <div className=" w-screen h-screen relative">
      <div className=" h-screen w-screen p-4 ">
        <div className="">
          <h1 className="  font-extrabold text-2xl md:text-3xl  text-purple-950">
            EventSeating
          </h1>
        </div>
      </div>

      <div className="h-screen w-screen top-0 absolute flex items-center justify-center">
        <div className="">
          <form className="space-y-6  px-4  w-[25rem]">
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-purple-900"
              >
                EMAIL
              </label>
              <div className="mt-">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  // required
                  className=" bg-purple-100 p-4 rounded-lg focus:bg-purple-100 w-full  "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-purple-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  // required
                  className="bg-purple-100 p-4 rounded-lg focus:bg-purple-100 w-full "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                // type='submit'
                onClick={handleLogin}
                className={`${logBtn} bg-purple-400 text-white py-4 mt-8 w-full hover:bg-purple-600  transition ease-in-out duration-500 rounded-lg`}
              >
                Sign in
              </button>
              <button
                type="submit"
                disabled
                className={`${loadBtn} bg-purple-600 text-white flex justify-center py-4 mt-8 w-full hover:bg-purple-600  transition ease-in-out duration-500`}
              >
                <h1 className="h-[1.4rem] w-[1.4rem] border-b-white border-r-white border-purple-400 border-2 rounded-full animate-spin "></h1>
              </button>

              <div className="text-sm text-center py-4">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password? Contact Admin
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
