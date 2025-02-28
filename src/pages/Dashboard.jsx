import React from "react";
import SideBar from "../components/sidebar/SideBar";

const Dashboard = () => {
  return (
    <div className="flex items-start gap-10 md:gap-3 max-w-[1920px] w-full">
      <SideBar />
      <div className="mt-4">
        <h1>Dashboard</h1>
        <p>Welcome to your sales dashboard!</p>
      </div>
    </div>
  );
};

export default Dashboard;
