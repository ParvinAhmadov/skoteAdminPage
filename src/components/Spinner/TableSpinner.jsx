import React from "react";
import { GridLoader } from "react-spinners";

const TableSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <GridLoader color="#ffffffff" loading speedMultiplier={1} width={2} />
    </div>
  );
};

export default TableSpinner;
