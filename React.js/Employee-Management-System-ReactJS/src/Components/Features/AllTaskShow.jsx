import React from "react";

const AllTaskShow = () => {
  return (
    <div className="bg-[#1C1C1C] p-5 rounded mt-5 h-64 overflow-auto hide-scrollbar">
      <div className="bg-red-800 mb-2 py-2 px-4 flex justify-between rounded-lg shadow-md">
        <h2 className="text-white">Abdul</h2>
        <h3 className="text-white">Make a UI Design</h3>
        <h4 className="text-white">Status</h4>
      </div>
    </div>
  );
};

export default AllTaskShow;
