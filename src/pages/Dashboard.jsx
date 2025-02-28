import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Navbar from "../components/navbar/Navbar";

const Dashboard = () => {
  return (
    <main className="flex items-start gap-5 md:gap-0 max-w-[1920px] w-full bg-[#FAFBFC]">
      <SideBar />
      <section className="w-full mt-[35px]">
        <Navbar />
        <section className="w-full flex flex-col gap-3 justify-around items-start">
          <section className="w-full flex justify-between items-center">
            <div className="flex-3/4 bg-red-400">1</div>
            <div className="flex-1/2 bg-green-400">2</div>
          </section>
          <section className="w-full flex justify-around items-center gap-2">
            <div className="bg-red-500 border-r-amber-300 flex-1/3">1</div>
            <div className="bg-red-500 border-r-amber-300 flex-1/3">2</div>
            <div className="bg-red-500 border-r-amber-300 flex-1/3">3</div>
          </section>
          <section className="w-full flex justify-around items-center gap-2">
            <div className="bg-red-500 border-r-amber-300 flex-1/3">1</div>
            <div className="bg-red-500 border-r-amber-300 flex-1/3">2</div>
            <div className="bg-red-500 border-r-amber-300 flex-1/3">3</div>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
