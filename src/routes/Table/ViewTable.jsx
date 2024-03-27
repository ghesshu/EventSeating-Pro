import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { ApiCall } from "../../components/Funcs/ApiCalls";

const ViewEvents = () => {
  const { id } = useParams();
  const { readTable, getTable, updateTable, deleteTable } = useContext(ApiCall);
  const navigate = useNavigate();

  // Separate state variables
  const [table_name, setTable_name] = useState("");
  const [seats, setSeats] = useState(0);
  const [loadBtn, setLoadBtn] = useState("hidden");
  const [logBtn, setLogBtn] = useState("block");
  const [loadDBtn, setLoadDBtn] = useState("hidden");
  const [logDBtn, setLogDBtn] = useState("block");
  const [TableData, setTableData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const load = async () => {
      const response = await readTable(id);

      console.log(response);
      setTableData(response);
    };
    load();
  }, [id]);

  const filteredGuests = TableData?.guests?.filter((data) =>
    `${data?.first_name?.toUpperCase()} ${data?.middle_name?.toUpperCase()} ${data?.last_name?.toUpperCase()}`.includes(
      searchQuery.toUpperCase()
    )
  );

  return (
    <div>
      <div className=" rounded-lg p-4 h-14 w-full bg-white flex justify-between items-center">
        <h1 className="font-semibold">TABLE GUESTS</h1>
        <div className="flex  items-center">
          <h1 className="font-semibold border-r px-2">
            GUESTS {TableData?.seats}
          </h1>

          <h1 className="font-semibold border-r px-2">
            SEATS {TableData?.guests?.length}
          </h1>
        </div>
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
          className="rounded-lg cursor-pointer duration-500 transition ease-in-out bg-white mb-4 px-4 py-4 flex justify-between items-center"
        >
          <h1 className=" text-left">
            {`${data?.first_name?.toUpperCase()} ${data?.middle_name?.toUpperCase()} ${data?.last_name?.toUpperCase()}`}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ViewEvents;
