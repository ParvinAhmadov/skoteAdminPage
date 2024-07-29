import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import axios from "axios";
import { IoEye } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { PiTrashSimpleLight } from "react-icons/pi";
import TableSpinner from "../Spinner/TableSpinner";
import ModalListt from "../../components/Modal/ModalList";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const JobTable = () => {
  const { data, error } = useSWR("http://localhost:3002/joblist", fetcher);
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const getJobTypeStyles = (jobType) => {
    switch (jobType) {
      case "Full Time":
        return { bgColor: "bg-green-100", textColor: "text-green-600" };
      case "Part Time":
        return { bgColor: "bg-red-100", textColor: "text-red-600" };
      case "Freelance":
        return { bgColor: "bg-blue-100", textColor: "text-blue-600" };
      case "Internship":
        return { bgColor: "bg-yellow-100", textColor: "text-yellow-600" };
      default:
        return { bgColor: "bg-gray-100", textColor: "text-gray-600" };
    }
  };

  const getJobStatusStyles = (jobStatus) => {
    switch (jobStatus) {
      case "New":
        return "bg-blue-500";
      case "Closed":
        return "bg-red-500";
      case "Active":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleRemoveJob = async (jobId) => {
    try {
      await axios.delete(`http://localhost:3002/joblist/${jobId}`);
      mutate("http://localhost:3002/joblist");
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const openModal = (job) => {
    setSelectedJob(job);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedJob(null);
  };

  if (error) return <div className="text-red-500">Error loading jobs</div>;
  if (!data) return <TableSpinner />;

  return (
    <div className="px-4 py-6">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left w-full text-Listtextcolor text-sm border-y-2 border-y-Listbordercolor">
            <th className="p-3">Job No</th>
            <th className="p-3">Image</th>
            <th className="p-3">Title</th>
            <th className="p-3">Company</th>
            <th className="p-3">Location</th>
            <th className="p-3">Experience</th>
            <th className="p-3">Role</th>
            <th className="p-3">Type</th>
            <th className="p-3">Posted Date</th>
            <th className="p-3">Last Date</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((job) => {
            const { bgColor, textColor } = getJobTypeStyles(job.type);
            const statusBgColor = getJobStatusStyles(job.status);
            return (
              <tr key={job.id} className="border-b text-sm">
                <td className="p-3">{job.jobId}</td>
                <td className="p-3">
                  <img
                    className="w-12 h-12 rounded"
                    src={job.jobImg}
                    alt="Job"
                  />
                </td>
                <td className="p-3">{job.jobTitle}</td>
                <td className="p-3">{job.companyName}</td>
                <td className="p-3">{job.location}</td>
                <td className="p-3">{job.experience} Years</td>
                <td className="p-3">{job.Role}</td>
                <td className="p-3">
                  <button
                    className={`w-fit px-2 py-1 rounded ${bgColor} ${textColor}`}
                  >
                    {job.type}
                  </button>
                </td>
                <td className="p-3">{job.postedDate}</td>
                <td className="p-3">{job.lastDate}</td>
                <td className="p-3">
                  <div
                    className={`text-white w-fit px-2 py-1 rounded ${statusBgColor}`}
                  >
                    {job.status}
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openModal(job)}
                      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                      <IoEye />
                    </button>
                    <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
                      <FaPen />
                    </button>
                    <button
                      onClick={() => handleRemoveJob(job.id)}
                      className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                    >
                      <PiTrashSimpleLight />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <ModalListt
        modalVisible={modalVisible}
        closeModal={closeModal}
        selectedItem={selectedJob}
      />
    </div>
  );
};

export default JobTable;
