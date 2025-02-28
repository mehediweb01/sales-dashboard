import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Navbar from "../components/navbar/Navbar";
import Sales from "../components/todaySales/Sales";
import Visitor from "../components/visitors/Visitor";
import Revenue from "../components/Revenue/Revenue";
import CustomerSatisfaction from "../components/satisfaction/CusSatisfaction";
import Target from "../components/target-reality/Target";

const Dashboard = () => {
  return (
    <main className="flex items-start gap-5 md:gap-0 max-w-[1920px] w-full bg-[#FAFBFC]">
      <SideBar />
      <section className="w-full mt-[35px]">
        <Navbar />
        <section className="w-full flex flex-col gap-3 justify-around items-start mt-8">
          <section className="w-full flex md:flex-row flex-col justify-between items-start md:items-center gap-4">
            <div className="shadow-box">
              <Sales />
            </div>
            <div className="shadow-box">
              <Visitor />
            </div>
          </section>

          <section className="w-full flex md:flex-row flex-col justify-between items-start gap-2">
            <div className="flex-1/3">
              <Revenue />
            </div>
            <div className="flex-1/3">
              <CustomerSatisfaction />
            </div>
            <div className="flex-1/3">
              <Target />
            </div>
          </section>

          <section className="w-full flex md:flex-row flex-col justify-between items-start md:items-center gap-2">
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
