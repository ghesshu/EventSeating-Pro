import React from 'react'
"use client";
import React from "react";
import Image from "next/image";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import axios from "axios";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { FiUser } from "react-icons/fi";

const page = () => {
  const [logB, setLogB] = React.useState("block");
    const [loadB, setLoadB] = React.useState("hidden");
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [cPassword, setCPassword] = React.useState("");
    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePass = () => {
      setShowPassword(!showPassword);
    };

    const [showCPass, setCShowPass] = React.useState(false);

    const togglePassC = () => {
      setCShowPass(!showCPass);
    };

    const handleSub = async (e) => {
      e.preventDefault();
      setLoadB("flex");
      setLogB("hidden");
      if (
        username === "" ||
        email === "" ||
        password === "" ||
        cPassword === ""
      ) {
        setError("All fields are necessary");
        setLoadB("hidden");
        setLogB("block");
      } else if (password.length < 6) {
        setError("Password should not be less than 6 Characters");
        setLoadB("hidden");
        setLogB("block");
      } else if (password !== cPassword) {
        setError("Passwords do not Match");
        setLoadB("hidden");
        setLogB("block");
      } else {
        try {
          const reqBody = {
            username: username,
            email: email,
            password: password,
          };
          const res = await axios.post(
            "https://gray-exuberant-zebra.cyclic.app/api/sign-up",
            reqBody
          );
          console.log(res);
          setLoadB("hidden");
          setLogB("block");
          router.push("/");
        } catch (err) {
          setLoadB("hidden");
          setLogB("block");
          console.log(err);
          if (err.message === "Network Error") {
            setError(err.message);
          }
          setError("Email or Password Incorrect");
        }
      }
    };

    React.useEffect(() => {
      setTimeout(() => {
        setError("");
      }, 3000);
    }, [error]);

  return (
    <div className="w-[100svw] h-[100svh] relative ">
      <div className="w-full h-full">
        <Image
          src={"/bg.jpg"}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 bg-black/50 flex items-center justify-center w-full h-full">
        <div className="w-[90%] h-[90%]   max-w-6xl p-8 flex  items-center justify-between">
          <div className="bg-neutral-100 text-black  h-full w-full lg:w-1/2 p-8">
            <h1 className="text-2xl ">LOGO</h1>

            <div className="flex items-center  h-full w-full">
              <div className="flex flex-col w-full p-8 -mt-32">
                <h1 className="text-center my-9 text-3xl">Sign Up</h1>

                <div className="h-[3rem] text-sm text-red-600">
                  <h1 className="text-center ">{error}</h1>
                </div>

                <form action="">
                  <div className="flex flex-col gap-8">
                    <div className="flex w-full justify-center">
                      <div className="flex items-center border-b-gray-600 border-b-2  gap-2 py-">
                        <h1 className="text-2xl">
                          <FiUser />
                        </h1>
                        <input
                          type="text"
                          className=" bg-transparent focus:border-b-gray w-[17rem] outline-none focus:outline-none p-2"
                          placeholder="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex w-full justify-center">
                      <div className="flex items-center border-b-gray-600 border-b-2  gap-2 py-">
                        <h1 className="text-2xl">
                          <MdAlternateEmail />
                        </h1>
                        <input
                          type="email"
                          className=" bg-transparent focus:border-b-gray w-[17rem] outline-none focus:outline-none p-2"
                          placeholder="email"
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
                          onClick={togglePass}
                        >
                          {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
                        </h1>
                      </div>
                    </div>
                    <div className="flex w-full justify-center">
                      <div className="flex items-center border-b-gray-600 border-b-2  gap-2 py-">
                        <h1 className="text-2xl">
                          <RiLockPasswordLine />
                        </h1>
                        <input
                          type={showCPass ? "text" : "password"}
                          className=" bg-transparent focus:border-b-gray w-[14.5rem] outline-none focus:outline-none p-2 focus:bg-transparent"
                          placeholder="confirm password"
                          value={cPassword}
                          onChange={(e) => setCPassword(e.target.value)}
                        />
                        <h1
                          className="text-2xl cursor-pointer"
                          onClick={togglePassC}
                        >
                          {showCPass ? <IoEyeOutline /> : <FaRegEyeSlash />}
                        </h1>
                      </div>
                    </div>

                    <div className="w-full flex flex-col items-center gap-4 justify-center mt-4">
                      <button
                        onClick={handleSub}
                        className={`${logB} bg-black hover:bg-white hover:text-black hover:border-2 border-black w-[19.5rem] text-white h-[2.6rem] transition ease-in-out duration-500`}
                      >
                        Sign Up
                      </button>
                      <button
                        disabled
                        className={` ${loadB} bg-black w-[19.5rem] text-white h-[2.6rem] flex items-center justify-center `}
                      >
                        <h1 className="p-[0.25rem] border-2 border-white h-[1rem] w-[1rem] animate-spin"></h1>
                      </button>

                      <div className="flex">
                        <Link href="/">
                          <h1 className="hover:border-b-2 hover:border-black transition ease-in-out duration-500">
                            Already have an Account? Login
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

export default page


// "use client";
// import React from "react";
// import Image from "next/image";
// import { MdAlternateEmail } from "react-icons/md";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { IoEyeOutline } from "react-icons/io5";
// import { FaRegEyeSlash } from "react-icons/fa6";
// import Link from "next/link";
// import axios from "axios";
// import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { FiUser } from "react-icons/fi";

// export default function page() {
//   const [logB, setLogB] = React.useState("block");
//   const [loadB, setLoadB] = React.useState("hidden");
//   const [username, setUsername] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [error, setError] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [cPassword, setCPassword] = React.useState("");
//   const router = useRouter();
//   const [showPassword, setShowPassword] = React.useState(false);

//   const togglePass = () => {
//     setShowPassword(!showPassword);
//   };

//   const [showCPass, setCShowPass] = React.useState(false);

//   const togglePassC = () => {
//     setCShowPass(!showCPass);
//   };

//   const handleSub = async (e) => {
//     e.preventDefault();
//     setLoadB("flex");
//     setLogB("hidden");
//     if (
//       username === "" ||
//       email === "" ||
//       password === "" ||
//       cPassword === ""
//     ) {
//       setError("All fields are necessary");
//       setLoadB("hidden");
//       setLogB("block");
//     } else if (password.length < 6) {
//       setError("Password should not be less than 6 Characters");
//       setLoadB("hidden");
//       setLogB("block");
//     } else if (password !== cPassword) {
//       setError("Passwords do not Match");
//       setLoadB("hidden");
//       setLogB("block");
//     } else {
//       try {
//         const reqBody = {
//           username: username,
//           email: email,
//           password: password,
//         };
//         const res = await axios.post(
//           "https://gray-exuberant-zebra.cyclic.app/api/sign-up",
//           reqBody
//         );
//         console.log(res);
//         setLoadB("hidden");
//         setLogB("block");
//         router.push("/");
//       } catch (err) {
//         setLoadB("hidden");
//         setLogB("block");
//         console.log(err);
//         if (err.message === "Network Error") {
//           setError(err.message);
//         }
//         setError("Email or Password Incorrect");
//       }
//     }
//   };

//   React.useEffect(() => {
//     setTimeout(() => {
//       setError("");
//     }, 3000);
//   }, [error]);

//   return (
    // <div className="w-[100svw] h-[100svh] relative ">
    //   <div className="w-full h-full">
    //     <Image
    //       src={"/bg.jpg"}
    //       width={500}
    //       height={500}
    //       className="w-full h-full object-cover"
    //     />
    //   </div>
    //   <div className="absolute top-0 bg-black/50 flex items-center justify-center w-full h-full">
    //     <div className="w-[90%] h-[90%]   max-w-6xl p-8 flex  items-center justify-between">
    //       <div className="bg-neutral-100 text-black  h-full w-full lg:w-1/2 p-8">
    //         <h1 className="text-2xl ">LOGO</h1>

    //         <div className="flex items-center  h-full w-full">
    //           <div className="flex flex-col w-full p-8 -mt-32">
    //             <h1 className="text-center my-9 text-3xl">Sign Up</h1>

    //             <div className="h-[3rem] text-sm text-red-600">
    //               <h1 className="text-center ">{error}</h1>
    //             </div>

    //             <form action="">
    //               <div className="flex flex-col gap-8">
    //                 <div className="flex w-full justify-center">
    //                   <div className="flex items-center border-b-gray-600 border-b-2  gap-2 py-">
    //                     <h1 className="text-2xl">
    //                       <FiUser />
    //                     </h1>
    //                     <input
    //                       type="text"
    //                       className=" bg-transparent focus:border-b-gray w-[17rem] outline-none focus:outline-none p-2"
    //                       placeholder="username"
    //                       value={username}
    //                       onChange={(e) => setUsername(e.target.value)}
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="flex w-full justify-center">
    //                   <div className="flex items-center border-b-gray-600 border-b-2  gap-2 py-">
    //                     <h1 className="text-2xl">
    //                       <MdAlternateEmail />
    //                     </h1>
    //                     <input
    //                       type="email"
    //                       className=" bg-transparent focus:border-b-gray w-[17rem] outline-none focus:outline-none p-2"
    //                       placeholder="email"
    //                       value={email}
    //                       onChange={(e) => setEmail(e.target.value)}
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="flex w-full justify-center">
    //                   <div className="flex items-center border-b-gray-600 border-b-2  gap-2 py-">
    //                     <h1 className="text-2xl">
    //                       <RiLockPasswordLine />
    //                     </h1>
    //                     <input
    //                       type={showPassword ? "text" : "password"}
    //                       className=" bg-transparent focus:border-b-gray w-[14.5rem] outline-none focus:outline-none p-2 focus:bg-transparent"
    //                       placeholder="password"
    //                       value={password}
    //                       onChange={(e) => setPassword(e.target.value)}
    //                     />
    //                     <h1
    //                       className="text-2xl cursor-pointer"
    //                       onClick={togglePass}
    //                     >
    //                       {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
    //                     </h1>
    //                   </div>
    //                 </div>
    //                 <div className="flex w-full justify-center">
    //                   <div className="flex items-center border-b-gray-600 border-b-2  gap-2 py-">
    //                     <h1 className="text-2xl">
    //                       <RiLockPasswordLine />
    //                     </h1>
    //                     <input
    //                       type={showCPass ? "text" : "password"}
    //                       className=" bg-transparent focus:border-b-gray w-[14.5rem] outline-none focus:outline-none p-2 focus:bg-transparent"
    //                       placeholder="confirm password"
    //                       value={cPassword}
    //                       onChange={(e) => setCPassword(e.target.value)}
    //                     />
    //                     <h1
    //                       className="text-2xl cursor-pointer"
    //                       onClick={togglePassC}
    //                     >
    //                       {showCPass ? <IoEyeOutline /> : <FaRegEyeSlash />}
    //                     </h1>
    //                   </div>
    //                 </div>

    //                 <div className="w-full flex flex-col items-center gap-4 justify-center mt-4">
    //                   <button
    //                     onClick={handleSub}
    //                     className={`${logB} bg-black hover:bg-white hover:text-black hover:border-2 border-black w-[19.5rem] text-white h-[2.6rem] transition ease-in-out duration-500`}
    //                   >
    //                     Sign Up
    //                   </button>
    //                   <button
    //                     disabled
    //                     className={` ${loadB} bg-black w-[19.5rem] text-white h-[2.6rem] flex items-center justify-center `}
    //                   >
    //                     <h1 className="p-[0.25rem] border-2 border-white h-[1rem] w-[1rem] animate-spin"></h1>
    //                   </button>

    //                   <div className="flex">
    //                     <Link href="/">
    //                       <h1 className="hover:border-b-2 hover:border-black transition ease-in-out duration-500">
    //                         Already have an Account? Login
    //                       </h1>
    //                     </Link>
    //                   </div>
    //                 </div>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="hidden w-1/2 h-full p-8 lg:flex justify-center items-center text-4xl border-4">
    //         <h1>LOGO</h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// }
