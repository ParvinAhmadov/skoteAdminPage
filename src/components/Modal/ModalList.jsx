import React from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

const ModalListt = ({ modalVisible, closeModal, selectedItem }) => {
  return (
    <Modal
      isOpen={modalVisible}
      toggle={closeModal}
      className="fixed inset-0 z-100  flex items-center justify-center bg-black bg-opacity-50"
      style={{ overflow: 'auto' }}
    >
      <ModalHeader toggle={closeModal} className= " bg-gray-800 hover:bg-gray-700 btn btn-secondary w-full flex mb-2 font-bold justify-center text-white rounded p-2">
        Job Details
      </ModalHeader>
      <ModalBody className="max-h-[550px] max-w-[450px] bg-Textcolor rounded-lg flex flex-col p-6 justify-center shadow-lg overflow-auto modal-body">
        {selectedItem && (
          <>
            <div className="py-2 flex flex-col gap-2">
              <label htmlFor="jobId" className="text-sm font-bold">Job No</label>
              <Input
                type="text"
                id="jobId"
                value={selectedItem.jobId || ""}
                name="jobId"
                readOnly
                placeholder="Job No"
                className="bg-gray-800 border border-gray-600 text-white text-sm rounded p-2"
              />
            </div>

            <div className="py-2 flex flex-col gap-2">
              <label htmlFor="jobTitle" className="text-sm font-bold">Job Title</label>
              <Input
                type="text"
                id="jobTitle"
                value={selectedItem.jobTitle || ""}
                name="jobTitle"
                readOnly
                placeholder="Job Title"
                className="bg-gray-800 border border-gray-600 text-white text-sm rounded p-2"
              />
            </div>

            <div className="py-2 flex flex-col gap-2">
              <label htmlFor="companyName" className="text-sm font-bold">Company Name</label>
              <Input
                type="text"
                id="companyName"
                value={selectedItem.companyName || ""}
                name="companyName"
                readOnly
                placeholder="Company Name"
                className="bg-gray-800 border border-gray-600 text-white text-sm rounded p-2"
              />
            </div>

            <div className="py-2 flex flex-col gap-2">
              <label htmlFor="location" className="text-sm font-bold">Location</label>
              <Input
                type="text"
                id="location"
                value={selectedItem.location || ""}
                name="location"
                readOnly
                placeholder="Location"
                className="bg-gray-800 border border-gray-600 text-white text-sm rounded p-2"
              />
            </div>

            <div className="py-2 flex flex-col gap-2">
              <label htmlFor="experience" className="text-sm font-bold">Experience</label>
              <Input
                type="text"
                id="experience"
                value={selectedItem.experience || ""}
                name="experience"
                readOnly
                placeholder="Experience"
                className="bg-gray-800 border border-gray-600 text-white text-sm rounded p-2"
              />
            </div>

            <div className="py-2 flex flex-col gap-2">
              <label htmlFor="Role" className="text-sm font-bold">Role</label>
              <Input
                type="text"
                id="Role"
                value={selectedItem.Role || ""}
                name="Role"
                readOnly
                placeholder="Role"
                className="bg-gray-800 border border-gray-600 text-white text-sm rounded p-2"
              />
            </div>

            <div className="py-2 flex flex-col gap-2">
              <label htmlFor="type" className="text-sm font-bold">Type</label>
              <Input
                type="text"
                id="type"
                value={selectedItem.type || ""}
                name="type"
                readOnly
                placeholder="Type"
                className="bg-gray-800 border border-gray-600 text-white text-sm rounded p-2"
              />
            </div>

            <div className="py-2 flex flex-col gap-2">
              <label htmlFor="postedDate" className="text-sm font-bold">Posted On</label>
              <Input
                type="text"
                id="postedDate"
                value={selectedItem.postedDate || ""}
                name="postedDate"
                readOnly
                placeholder="Posted On"
                className="bg-gray-800 border border-gray-600 text-white text-sm rounded p-2"
              />
            </div>

            <div className="py-2 flex flex-col gap-2">
              <label htmlFor="lastDate" className="text-sm font-bold">Deadline</label>
              <Input
                type="text"
                id="lastDate"
                value={selectedItem.lastDate || ""}
                name="lastDate"
                readOnly
                placeholder="Deadline"
                className="bg-gray-800 border border-gray-600 text-white text-sm rounded p-2"
              />
            </div>

            <div className="py-2 flex flex-col gap-2">
              <label htmlFor="status" className="text-sm font-bold">Status</label>
              <Input
                type="text"
                id="status"
                value={selectedItem.status || ""}
                name="status"
                readOnly
                placeholder="Status"
                className="bg-gray-800 border border-gray-600 text-white text-sm rounded p-2"
                          />
                                        <label htmlFor="lastDate" className="text-sm font-bold">Image</label>

                                 <Input
                type="image"
                id="jobImg"
                value={selectedItem.jobImg || ""}
                name="jobImg"
                readOnly
                placeholder="Status"
                className="max-h-[250px] object-contain"
              />
            </div>
          </>
        )}
      </ModalBody>
      <ModalFooter className="bg-textColor text-white mt-2 p-[8px]">
        <Button color="secondary" onClick={closeModal} className="bg-gray-800 hover:bg-gray-700 btn btn-secondary w-full mt-1 rounded font-bold">
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalListt;
