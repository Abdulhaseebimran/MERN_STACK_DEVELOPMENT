import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTaskShow = () => {
  
  const authData = useContext(AuthContext);
  console.log(authData.employeesData);
  return (
    <div className="bg-[#1C1C1C] p-5 rounded mt-5 h-80 mb-5">
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 mb-2 py-3 px-6 flex justify-between items-center rounded-lg shadow-lg">
      <h2 className="text-white font-bold w-1/5 tracking-wider">Employee Name</h2>
      <h3 className="text-white font-bold w-1/5 text-center tracking-wider">New Task</h3>
      <h3 className="text-white font-bold w-1/5 text-center tracking-wider">Active Task</h3>
      <h3 className="text-white font-bold w-1/5 text-center tracking-wider">Completed Task</h3>
      <h3 className="text-white font-bold w-1/5 text-center tracking-wider">Failed Task</h3>
    </div>

    <div className="h-64 overflow-y-auto pb-4 hide-scrollbar">
        {authData.employeesData.map((elem, index) => (
          <div 
            key={index} 
            className="bg-gray-800 mb-2 py-3 px-6 flex justify-between items-center rounded-lg shadow-md transform transition duration-300 hover:bg-gray-700 hover:shadow-lg"
          >
            <h2 className="text-white font-medium w-1/5">{elem.firstName}</h2>
            <h3 className="w-1/5 text-center font-semibold text-blue-400 text-lg">{elem.taskNumber.newTask}</h3>
            <h3 className="w-1/5 text-center font-semibold text-yellow-400 text-lg">{elem.taskNumber.active}</h3>
            <h3 className="w-1/5 text-center font-semibold text-green-400 text-lg">{elem.taskNumber.completed}</h3>
            <h3 className="w-1/5 text-center font-semibold text-red-400 text-lg">{elem.taskNumber.failed}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTaskShow;
