import React from "react";
import Logo from "./Logo";

const SideBar = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 ms-[46px] mt-[55px]">
      <div>
        <Logo />
      </div>
      <div className="row-span-3 row-start-2">4</div>
      <div className="row-start-5">6</div>
    </div>
  );
};

export default SideBar;
