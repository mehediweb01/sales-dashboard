import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Navbar from "../components/navbar/Navbar";
import Sales from "../components/todaySales/Sales";
import Visitor from "../components/visitors/Visitor";
import Revenue from "../components/Revenue/Revenue";
import CustomerSatisfaction from "../components/satisfaction/CusSatisfaction";
import Target from "../components/target-reality/Target";
import Map from "../components/map/Map";
import Volume from "../components/volume/Volume";
import TopProducts from "../components/topProducts/TopProducts";

const Dashboard = () => {
  return (
    <main className="flex items-start gap-5 md:gap-0 max-w-[1920px] w-full bg-[#FAFBFC]">
      <SideBar />
      <section className="w-full mt-[35px]">
        <Navbar />
        <section className="w-full flex flex-col gap-3 justify-around items-start mt-8">
          <section className="w-full grid grid-cols-1 md:grid-cols-2 justify-between items-start md:items-center gap-8">
            <div className="shadow-box">
              <Sales />
            </div>
            <div className="shadow-box w-fit">
              <Visitor />
            </div>
          </section>

          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-start gap-2">
            <div>
              <Revenue />
            </div>
            <div>
              <CustomerSatisfaction />
            </div>
            <div>
              <Target />
            </div>
          </section>

          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-start gap-2 ps-2 mt-8">
            <div className="w-full">
              <TopProducts />
            </div>
            <div>
              <Map />
            </div>
            <div>
              <Volume />
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
