import React from "react";

import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import Link from "next/link";

const Login = () => {
  const [logB, setLogB] = React.useState("block");
  const [loadB, setLoadB] = React.useState("hidden");

  const handleSub = async (e) => {
    e.preventDefault();
    setLoadB("flex");
    setLogB("hidden");
    try {
      setLoadB("hidden");
      setLogB("block");
    } catch (err) {
      setLoadB("hidden");
      setLogB("block");
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col w-full p-8 -mb-32">
      <h1 className="text-center my-14 text-3xl">Login</h1>

      <form action="">
        <div className="flex flex-col gap-8">
          <div className="flex w-full justify-center">
            <div className="flex items-center border-b-gray-600 border-b-2  gap-2 py-">
              <h1 className="text-2xl">
                <MdAlternateEmail />
              </h1>
              <input
                type="email"
                className=" bg-transparent focus:border-b-gray w-[17rem] outline-none focus:outline-none p-2"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex items-center border-b-gray-600 border-b-2  gap-2 py-">
              <h1 className="text-2xl">
                <RiLockPasswordLine />
              </h1>
              <input
                type="password"
                className=" bg-transparent focus:border-b-gray w-[14.5rem] outline-none focus:outline-none p-2 focus:bg-transparent"
                placeholder="password"
              />
              <h1 className="text-2xl">
                {true === true ? <IoEyeOutline /> : <FaRegEyeSlash />}
              </h1>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-4 justify-center mt-4">
            <button
              onClick={handleSub}
              className="bg-black hover:bg-white hover:text-black hover:border-2 border-black w-[19.5rem] text-white h-[2.6rem] transition ease-in-out duration-500"
            >
              Login
            </button>
            <button
              disabled
              className=" bg-black w-[19.5rem] text-white h-[2.6rem] flex items-center justify-center "
            >
              <h1 className="p-[0.25rem] border-2 border-white h-[1rem] w-[1rem] animate-spin"></h1>
            </button>

            <div className="flex">
              <Link href="/sign-up">
                <h1 className="hover:border-b-2 hover:border-black transition ease-in-out duration-500">
                  Don't have an Account? sign Up
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
