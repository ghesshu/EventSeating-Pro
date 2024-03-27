import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiCall } from "../../components/Funcs/ApiCalls";
import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaCircleNotch } from "react-icons/fa";

const AllGuests = () => {
  const navigate = useNavigate();

  const { guestData, updateGuestStatus, getGuest } = useContext(ApiCall);
  const [buttonStates, setButtonStates] = useState(guestData.map(() => false));
  const [statusStates, setStatusStates] = useState(guestData.map(() => true));
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = async (id, index) => {
    try {
      const reqBody = {
        status: true,
      };
      await updateGuestStatus(id, reqBody);
      await getGuest();
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleUpdate = async (id, index) => {
    try {
      const reqBody = {
        status: false,
      };

      // Perform the database update
      await updateGuestStatus(id, reqBody);

      // Update the local state to reflect the change
      await getGuest();
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    console.log(guestData);
  }, [guestData]);

  const filteredGuests = guestData.filter((data) =>
    `${data?.first_name?.toUpperCase()} ${data?.middle_name?.toUpperCase()} ${data?.last_name?.toUpperCase()}`.includes(
      searchQuery.toUpperCase()
    )
  );

  return (
    <div>
      <div className="rounded-lg p-4 h-14 w-full bg-white flex justify-between items-center">
        <h1 className="font-semibold">ALL GUESTS</h1>

        <Link
          to={`/add-Guest`}
          className="rounded-lg px-6 py-2 hover:bg-purple-500 bg-purple-400 text-white duration-500 transition ease-in-out"
        >
          ADD GUEST
        </Link>
      </div>

      <div className="w-full my-8">
        <div className="rounded-lg text-xs md:text-md font-bold bg-purple-300 px-4 py-4 my-2 flex justify-between items-center">
          <h1 className="w-1/2 text-center">NAME</h1>
          <h1 className="w-1/2 text-center">TABLE</h1>
          <h1 className="w-1/2 text-center">STATUS</h1>
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-lg p-2 w-full bg-white my-2 px-4 py-4 "
          />
        </div>

        {filteredGuests?.map((data, index) => (
          <div
            key={index}
            className="rounded-lg cursor-pointer duration-500 transition ease-in-out bg-white my-4 px-4 py-4 flex justify-between items-center"
          >
            <h1 className="w-1/2 text-left border-r">
              {`${data?.first_name?.toUpperCase()} ${data?.middle_name?.toUpperCase()} ${data?.last_name?.toUpperCase()}`}
            </h1>
            <h1 className="w-1/2 text-center">
              {data?.table?.table_name?.toUpperCase()}
            </h1>
            <div className="border-l w-1/2 text-center flex gap-2 justify-center">
              <button
                onClick={() => navigate(`/edit-Guest/${data._id}`)}
                className="bg-blue-400 hover:bg-blue-500 px-8 py-2 rounded-lg text-white  duration-500 transition ease-in-out"
              >
                <MdEdit />
              </button>

              <div className="flex gap-2">
                {data?.status === false ? (
                  <button
                    onClick={() => handleClick(data._id, index)}
                    disabled={buttonStates[index]}
                    className="hover:bg-purple-500 bg-gray-300 px-8 py-2 rounded-lg text-white duration-500 transition ease-in-out"
                  >
                    <FaCheck />
                  </button>
                ) : (
                  <button
                    onClick={() => handleUpdate(data._id, index)}
                    className="bg-purple-500  px-8 py-2 rounded-lg text-white duration-500 transition ease-in-out"
                  >
                    <FaCheck />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGuests;
