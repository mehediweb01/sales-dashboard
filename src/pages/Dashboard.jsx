import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Navbar from "../components/navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="flex items-start gap-5 md:gap-0 max-w-[1920px] w-full bg-[#FAFBFC]">
      <SideBar />
      <div className="w-full mt-[35px]">
        <Navbar />
      </div>
    </div>
  );
};

export default Dashboard;
