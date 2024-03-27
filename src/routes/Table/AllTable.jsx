import React, { useContext, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { ApiCall } from "../../components/Funcs/ApiCalls";
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const AllTable = () => {
  const navigate = useNavigate();
  const { tableData } = useContext(ApiCall);

  useEffect(() => {
    console.log(tableData);
  }, []);

  // Function to format a date string
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <div className=" rounded-lg p-4 h-14 w-full bg-white flex justify-between items-center">
        <h1 className="font-semibold">ALL TABLES</h1>

        <Link
          to={`/add-Table`}
          className=" rounded-lg px-6 py-2 hover:bg-purple-500 bg-purple-400 text-white duration-500 transition ease-in-out"
        >
          ADD TABLE
        </Link>
      </div>

      <div className="overflow-x-scroll scroll-hide">
        <div className="w-full my-8  min-w-[50rem] ">
          <div className="  rounded-lg text-xs md:text-md font-bold bg-purple-300 px-4 py-4 my-2 flex justify-between items-center ">
            <h1 className="w-1/4 text-center">NAME</h1>
            <h1 className="w-1/4 text-center">SEATS</h1>
            <h1 className="w-1/4 text-center">GUESTS</h1>
            <h1 className="w-1/4 text-center">Action</h1>
          </div>

          {tableData?.map((data, index) => (
            <div className=" rounded-lg cursor-pointer duration-500 transition ease-in-out bg-white my-4 px-4 py-4 flex justify-between items-center ">
              <h1 className="w-1/4 text-center border-r">
                {data?.table_name?.toUpperCase()}
              </h1>
              <h1 className="w-1/4 text-center border-r">{data?.seats}</h1>
              <h1 className="w-1/4 text-center border-r">
                {data?.total_guests}
              </h1>
              <div className=" w-1/4 flex gap-2 justify-center">
                <button
                  onClick={() => navigate(`/edit-Table/${data?._id}`)}
                  className="bg-blue-400 hover:bg-blue-500 px-8 py-2 rounded-lg text-white  duration-500 transition ease-in-out"
                >
                  <MdEdit />
                </button>
                <button
                  onClick={() => navigate(`/view-table/${data?._id}`)}
                  className="hover:bg-purple-500 bg-gray-300 px-8 py-2 rounded-lg text-white duration-500 transition ease-in-out"
                >
                  <FaEye />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTable;
