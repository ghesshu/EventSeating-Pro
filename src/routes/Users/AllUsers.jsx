import React, { useContext, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { ClassNames } from "@emotion/react";
import { ApiCall } from "../../components/Funcs/ApiCalls";

const AllUsers = () => {
  const navigate = useNavigate();
  const { userData } = useContext(ApiCall);

  // useEffect(() => {
  //   console.log(userData);
  // }, []);

  // Function to format a date string
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <div className="p-4 h-14 w-full bg-white flex justify-between items-center">
        <h1 className="font-semibold">ALL POSTS</h1>

        <Link
          to={`/add-user`}
          className="px-6 py-2 hover:bg-purple-500 bg-purple-400 text-white duration-500 transition ease-in-out"
        >
          ADD USER
        </Link>
      </div>

      <div className="w-full my-8 ">
        <div className="text-xs md:text-md font-bold bg-purple-300 px-4 py-4 my-2 flex justify-between items-center ">
          <h1 className="w-1/6">NO</h1>
          <h1 className="w-4/6 r">NAME</h1>
          <h1 className="w-1/6 px-2">ROLE</h1>
        </div>

        {userData?.map((data, index) => (
          <div
            key={index}
            onClick={() => navigate(`/edit-user/${data._id}`)}
            className="cursor-pointer hover:bg-purple-400 hover:text-white duration-500 transition ease-in-out bg-white my-4 px-4 py-4 flex justify-between items-center "
          >
            <h1 className="border-r w-1/6">{index + 1}</h1>
            <h1 className="w-4/6 border-r px-2 border-l">{`${data?.first_name?.toUpperCase()} ${data?.last_name?.toUpperCase()}`}</h1>
            <h1 className="w-1/6 px-2 ">{data.role.toUpperCase()}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
