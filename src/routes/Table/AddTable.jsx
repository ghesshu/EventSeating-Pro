import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ApiCall } from "../../components/Funcs/ApiCalls";

const AddTable = () => {
  const navigate = useNavigate();
  const { createTable, getTable } = useContext(ApiCall);

  // Separate state variables
  const [table_name, setTable_name] = useState("");
  const [seats, setSeats] = useState(0);

  const [loadBtn, setLoadBtn] = useState("hidden");
  const [logBtn, setLogBtn] = useState("block");

  const handleSub = async (e) => {
    e.preventDefault();
    setLoadBtn("block");
    setLogBtn("hidden");

    const reqBody = {
      table_name: table_name,
      seats: seats,
    };

    if (!reqBody.table_name || !reqBody.seats) {
      toast.warn(`All Fields are required`, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoadBtn("hidden");
      setLogBtn("block");
    } else {
      try {
        await createTable(reqBody);
        await getTable();
        navigate(-1);
      } catch (err) {
        console.log(err);
        setLoadBtn("hidden");
        setLogBtn("block");
      }
    }
  };

  return (
    <div>
      <div className="rounded-lg p-4 h-14 w-full bg-white flex justify-between items-center">
        <h1 className="font-semibold">ADD Table</h1>
      </div>

      <div className="bg-white my-8 p-8 rounded-lg">
        <h1 className="text-xl font-bold">Table DETAILS</h1>
        <div className="my-7 grid grid-cols-1 md:grid-cols-2 slg:grid-cols-3 gap-8 lg:gap-14">
          {/* Table Name */}
          <div className="w-full relative">
            <label
              htmlFor="tableName"
              className="absolute ml-3 -mt-[0.6rem] font-light bg-white px-2 text-xs"
            >
              Table NAME <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="rounded-lg w-full border p-3 border-black"
              value={table_name}
              onChange={(e) => setTable_name(e.target.value)}
              name="tableName"
            />
          </div>

          {/* Seats */}
          <div className="w-full relative">
            <label
              htmlFor="tableSeats"
              className="absolute ml-3 -mt-[0.6rem] font-light bg-white px-2 text-xs"
            >
              Seats <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              className="rounded-lg w-full border p-3  border-black"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              name="tableSeats"
            />
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={handleSub}
            className={` ${logBtn}  rounded-lg mt- text-white bg-purple-400 px-8 py-3 -lg hover:bg-purple-600 duration-300 ease-in-out transition w-[8rem] `}
          >
            Submit
          </button>

          <button
            disabled
            type="button"
            className={`${loadBtn} rounded-lg  text-white bg-purple-400 -lg hover:bg-purple-600   px-5 py-3 text-center mr-2  items-center w-[8rem] justify-center`}
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTable;
