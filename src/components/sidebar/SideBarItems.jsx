import React from "react";
import { sidebarItem } from "../../utils/db";

const SideBarItems = () => {
  return (
    <ul className="space-y-10">
      {sidebarItem.map((item, index) => (
        <li key={index}>
          <a href="#" className="flex items-center gap-6">
            <img src={item.icon} alt={item.label} />
            <span className="hidden md:block font-poppins text-[18px] leading-7 text-secondary">
              {item.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};


export default SideBarItems;
