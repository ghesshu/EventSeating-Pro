import React, { useState, useContext, useEffect } from "react";
import block from "../Assets/block.svg";
import AllGuest from "./Guest/AllGuest";
import { ApiCall } from "../components/Funcs/ApiCalls";

const Dashboard = () => {
  const { tableData, userData, guestData } = useContext(ApiCall);
  useEffect(() => {
    console.log(tableData);
    console.log(guestData);
    console.log(userData);
  }, []);

  return (
    <div>
      <div className="p-4 h-14 w-full rounded-lg bg-white flex justify-between items-center">
        <h1 className="font-semibold ">DASHBOARD</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-6  ">
        {/* One  */}
        <div className="border rounded-lg relative border-black bg-purple-800 h-[10rem] ">
          <div className="absolute w-full h-full">
            <img
              src={block}
              alt=""
              className="h-full w-full object-fill opacity-10"
            />
          </div>
          <div className="absolute p-4 flex gap-4  justify-between w-full h-full">
            <h1 className=" text-xl w-1/2 text-center font-bold text-white  self-center">
              TOTAL TABLES
            </h1>
            <h1 className="text-7xl w-1/2 text-center font-bold text-white self-end ">
              {tableData?.length ? tableData?.length : 0}
            </h1>
          </div>
        </div>
        {/* TWO  */}
        <div className="border rounded-lg relative border-black bg-purple-800 h-[10rem] ">
          <div className="absolute w-full h-full">
            <img
              src={block}
              alt=""
              className="h-full w-full object-fill opacity-10"
            />
          </div>
          <div className="absolute p-4 flex gap-4  justify-between w-full h-full">
            <h1 className="  text-xl w-1/2 text-center font-bold text-white  self-center">
              TOTAL GUESTS
            </h1>
            <h1 className="text-7xl w-1/2 text-center font-bold text-white self-end ">
              {guestData?.length ? guestData.length : 0}
            </h1>
          </div>
        </div>
        {/* One  */}
        <div className="border rounded-lg relative  bg-purple-800 h-[10rem] ">
          <div className="absolute w-full h-full">
            <img
              src={block}
              alt=""
              className="h-full w-full object-fill opacity-10"
            />
          </div>
          <div className="absolute p-4 flex gap-4  justify-between w-full h-full">
            <h1 className=" text-xl w-1/2 text-center font-bold text-white  self-center">
              TOTAL USERS
            </h1>
            <h1 className="text-7xl w-1/2 text-center font-bold text-white self-end ">
              {userData?.length ? userData.length : 0}
            </h1>
          </div>
        </div>
      </div>

      <div className="my-14">
        <AllGuest />
      </div>
    </div>
  );
};

export default Dashboard;
