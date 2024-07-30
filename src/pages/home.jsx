import React, { useEffect, useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ModalTablee from "../components/Modal/ModalTable";
import { UserService } from "../services/api";
import JobTable from '../components/Table/table.jsx';


const Home = () => {
  const handleReset = () => {
    setSearchTerm("");
    fetchData();
  };
  
  const [inputType, setInputType] = useState("text");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async (companyName = "") => {
    const userService = new UserService();
    try {
      const result = await userService.getUsers({ companyName });
      setData(result.data); 
    } catch (error) {
      setError("Error fetching users"); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    fetchData(value);
  };

  return (
    <>
      <div className="jobListhome">
        <div className="flex justify-between items-center">
          <h1 className="py-2 font-bold">JOBS LISTS</h1>
          <p className="text-sm">Jobs / Jobs Lists</p>
        </div>

        <div className="bg-backColor rounded">
          <div className="flex justify-between items-center p-6 border-b-1 border-b-Listbordercolor ">
            <div>
              <h2 className="font-bold"> Jobs Lists </h2>
            </div>
            <div className="flex items-center gap-1">
              <ModalTablee />
              <button onClick={handleReset} className="text-sm py-[11px] px-3 bg-[#424C68] rounded">
                <IoMdRefresh />
              </button>
              <button className="text-sm py-[11px] px-3 bg-[#34C38F] rounded">
                <HiOutlineDotsVertical />
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <select className="jobListselect font-semibold text-[13px] ml-[23px] focus:outline-none focus:ring-2 focus:ring-blue-200">
              <option className="font-semibold text-[13px]">Show 10</option>
              <option className="font-semibold text-[13px]">Show 20</option>
              <option className="font-semibold text-[13px]">Show 30</option>
              <option className="font-semibold text-[13px]">Show 40</option>
              <option className="font-semibold text-[13px]">Show 50</option>
            </select>
            <input
              type="text"
              placeholder="Search for ..."
              className="w-[30%] bg-backColor border rounded border-Listbordercolor text-xs p-2 focus:outline-none focus:ring-1 focus:ring-white"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <select className="w-[12%] bg-backColor border rounded border-Listbordercolor text-xs p-2 focus:outline-none focus:ring-1 focus:ring-white font-semibold">
              <option className="font-semibold" disabled defaultValue>
                Status
              </option>
              <option className="font-semibold">All</option>
              <option className="font-semibold">Active</option>
              <option className="font-semibold">New</option>
              <option className="font-semibold">Close</option>
            </select>
            <select className="w-[12%] bg-backColor border rounded border-Listbordercolor text-xs p-2 focus:outline-none focus:ring-1 focus:ring-white font-semibold">
              <option className="font-semibold">Select Type</option>
              <option className="font-semibold">Active</option>
              <option className="font-semibold">Full Time</option>
              <option className="font-semibold">Part Time</option>
            </select>
            <input
              placeholder="Select time"
              className="w-[15%] text-white bg-backColor border-Listbordercolor text-xs p-2 mr-[23px] focus:outline-none focus:ring-1 focus:ring-white font-semibold rounded"
              type={inputType}
              onFocus={() => setInputType("datetime-local")}
              onBlur={() => setInputType("text")}
            />
          </div>
          <JobTable searchTerm={searchTerm} /> 
          {error && <div>{error}</div>}
        </div>
      </div>
    </>
  );
};

export default Home;
