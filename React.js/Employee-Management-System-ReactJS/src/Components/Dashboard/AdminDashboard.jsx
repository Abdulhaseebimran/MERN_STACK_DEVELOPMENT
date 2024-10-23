import React from "react";
import Header from "../Features/Header";
import CreateTask from "../Features/CreateTask";
import AllTaskShow from "../Features/AllTaskShow";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <CreateTask />
      <AllTaskShow />
    </div>
  );
};

export default AdminDashboard;
