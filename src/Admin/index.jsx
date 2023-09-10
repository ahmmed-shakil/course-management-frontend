import React from "react";
import SidebarNav from "./components/SidebarNav/SidebarNav";

const Admin = () => {
  return (
    <div className=" min-h-screen">
      <div className=" flex justify-between">
        <div className=" w-1/4 h-full fixed bg-primary">
          <SidebarNav />
        </div>
        <div className=" w-3/4">ff</div>
      </div>
    </div>
  );
};

export default Admin;
