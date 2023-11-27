"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import axios from "axios";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Login() {
  const [logB, setLogB] = useState("block");
  const [loadB, setLoadB] = useState("hidden");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSub = async (e) => {
    e.preventDefault();
    setLoadB("flex");
    setLogB("hidden");
    try {
      const reqBody = {
        email: email,
        password: password,
      };
      const res = await axios.post(
        "https://gray-exuberant-zebra.cyclic.app/api/login",
        reqBody
      );
      console.log(res);
      setLoadB("hidden");
      setLogB("block");
      router.push("/dashboard");
    } catch (err) {
      setLoadB("hidden");
      setLogB("block");
      console.log(err);
      setError("Email or Password Incorrect");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);

  return (
    <div className="w-screen h-screen relative  overflow-hidden ">
      <div className="w-full h-full">
        <Image
          src={"/bg.jpg"}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 bg-black/50 flex items-center justify-center w-full h-full">
        <div className="md:w-[90%] md:h-[90%] w-full h-full   max-w-6xl md:p-8  flex  items-center justify-between">
          <div className="bg-neutral-100 text-black  h-full w-full lg:w-1/2 p-8">
            <h1 className="text-2xl font-extrabold">LOGO</h1>

            <div className="flex items-center  h-full w-full">
              <div className="flex flex-col w-full p-8 -mt-24">
                <h1 className="text-center mt-14 my- text-2xl font-bold">
                  Login
                </h1>

                <div className="h-[3rem] text-sm text-red-600 flex items-center justify-center  ">
                  <h1 className="text-center font-bold animate-bounce italic ">
                    {error}
                  </h1>
                </div>

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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex w-full justify-center">
                      <div className="flex items-center border-b-gray-600 border-b-2  gap-2 py-">
                        <h1 className="text-2xl">
                          <RiLockPasswordLine />
                        </h1>
                        <input
                          type={showPassword ? "text" : "password"}
                          className=" bg-transparent focus:border-b-gray w-[14.5rem] outline-none focus:outline-none p-2 focus:bg-transparent"
                          placeholder="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <h1
                          className="text-2xl cursor-pointer"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
                        </h1>
                      </div>
                    </div>

                    <div className="w-full flex flex-col items-center gap-4 justify-center mt-4">
                      <button
                        onClick={handleSub}
                        className={`${logB} bg-black hover:bg-white hover:text-black hover:border-2 border-black w-[19.5rem] text-white h-[2.6rem] transition ease-in-out duration-500`}
                      >
                        Login
                      </button>
                      <button
                        disabled
                        className={` ${loadB} bg-black w-[19.5rem] text-white h-[2.6rem] flex items-center justify-center `}
                      >
                        <h1 className="p-[0.25rem] border-2 border-white h-[1rem] w-[1rem] animate-spin"></h1>
                      </button>

                      <div className="flex mt-4">
                        <Link href="/sign-up">
                          <h1 className="border-gray-100 border-b-2 smd:hover:border-blue-600 transition ease-in-out duration-500 text-sm text-blue-600">
                            Dont have an Account? sign Up
                          </h1>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden w-1/2 h-full p-8 lg:flex justify-center items-center text-4xl border-4">
            <h1>LOGO</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
