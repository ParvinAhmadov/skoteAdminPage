import React from "react";
import { GridLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <GridLoader color="#2A3042" loading speedMultiplier={1} width={2} />
    </div>
  );
};

export default LoadingSpinner;
