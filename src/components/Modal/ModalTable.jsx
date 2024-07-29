import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { FaUpload } from "react-icons/fa";
import { mutate } from "swr";

const BASE_URL = "http://localhost:3002/joblist";

const ModalTablee = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    jobId: "",
    jobTitle: "",
    jobImg: "",
    companyName: "",
    location: "",
    experience: "",
    Role: "",
    type: "Full Time",
    postedDate: "25 June 2021",
    lastDate: "28 June 2021",
    status: "Active",
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({
          ...prevData,
          jobImg: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    },
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(BASE_URL, formData);
      mutate(BASE_URL);
      setIsOpen(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="p-2 text-white bg-[#556EE6] hover:bg-[#475ec5] transition font-medium rounded text-sm text-center"
        type="button"
      >
        Add New Job
      </button>

      {isOpen && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-1000 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="  max-h-[550px] p-6  max-w-[450px] bg-Textcolor rounded-lg shadow-lg overflow-auto">
            <div className="flex items-center justify-between  border-b rounded-t border-backColor">
              <h2 className="font-bold text-backColor text-xl">Add New Job.</h2>
              <button
                onClick={toggleModal}
                className="text-backColor bg-white hover:bg-gray-400 hover:text-white rounded p-2 mb-[6px]"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div>
                {[
                  {
                    id: "jobId",
                    label: "Job No",
                    type: "number",
                    placeholder: "Add Job ID",
                  },
                  {
                    id: "jobTitle",
                    label: "Job Title",
                    type: "text",
                    placeholder: "Add Job Title",
                  },
                  {
                    id: "companyName",
                    label: "Company Name",
                    type: "text",
                    placeholder: "Add Company Name",
                  },
                  {
                    id: "location",
                    label: "Location",
                    type: "text",
                    placeholder: "Add Location",
                  },
                  {
                    id: "experience",
                    label: "Experience",
                    type: "text",
                    placeholder: "Add Experience",
                  },
                  {
                    id: "Role",
                    label: "Role",
                    type: "text",
                    placeholder: "Add Role",
                  },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} className="py-[4px] flex flex-col gap-2">
                    <label
                      htmlFor={id}
                      className="text-[14px] font-bold text-backColor"
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      className="bg-backColor border outline-none text-white text-sm rounded p-[10px]"
                      placeholder={placeholder}
                      value={formData[id]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                ))}

                <div className="py-1 flex flex-col gap-3  font-bold">
                  <label
                    htmlFor="type"
                    className="  text-[14px] font-bold text-backColor "
                  >
                    Type
                  </label>
                  <select
                    id="type"
                    className="bg-backColor border outline-none font-bold  text-[12px] rounded p-[10px]"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                </div>

                <div className="py-1 flex flex-col gap-3">
                  <label
                    htmlFor="status"
                    className="text-[14px] font-bold  text-backColor"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    className="bg-backColor border border-none text-[14px] rounded p-[10px]"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="Active">Active</option>
                    <option value="New">New</option>
                    <option value="Close">Close</option>
                  </select>
                </div>

                <div className="py-1 flex flex-col gap-3">
                  <label
                    htmlFor="jobImg"
                    className=" text-[14px] font-bold text-backColor flex items-center gap-2"
                  >
                    Job Image <FaUpload />
                  </label>
                  <div
                    {...getRootProps()}
                    className={`bg-backColor border border-gray-600 text-white text-xs rounded block w-full p-2.5 cursor-pointer ${
                      isDragActive ? "bg-gray-700" : ""
                    }`}
                  >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Insert files here </p>
                    ) : (
                      <p>files Click to select files</p>
                    )}
                  </div>
                  {formData.jobImg && (
                    <img
                      src={formData.jobImg}
                      alt="Job"
                      className=" max-h-[250px] object-contain"
                    />
                  )}
                </div>

                <div className="flex justify-end gap-4 mt-4">
                  <button
                    type="submit"
                    className="text-white bg-backColor font-bold rounded text-[14px] px-3 py-2"
                  >
                    Create Job
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalTablee;
