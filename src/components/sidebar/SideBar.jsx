import React from "react";
import SideBarCard from "./Card";
import SideBarItems from "./SideBarItems";
import Logo from "./Logo";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-16 ms-[26px] mt-[35px] max-w-[280px] pb-4">
      <div className="w-full">
        <Logo />
      </div>
      <div className="w-full">
        <SideBarItems />
      </div>
      <div className="hidden md:block w-full">
        <SideBarCard />
      </div>
    </div>
  );
};

export default SideBar;
