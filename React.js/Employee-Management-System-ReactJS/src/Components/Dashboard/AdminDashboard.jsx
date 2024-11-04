import React from "react";
import Header from "../Features/Header";
import CreateTask from "../Features/CreateTask";
import AllTaskShow from "../Features/AllTaskShow";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser}/>
      <CreateTask />
      <AllTaskShow />
    </div>
  );
};

export default AdminDashboard;
