import React from "react";
import Language from "./Language";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="flex justify-around gap-0 md:gap-2 items-center w-full">
      <div className="md:block hidden">
        <h1 className="font-poppins font-semibold text-xl sm:text-2xl md:text-4xl leading-5 sm:leading-8 md:leading-12 text-blueDark">
          Dashboard
        </h1>
      </div>
      <div className="flex gap-2 items-center">
        <img
          src="/icons/search.svg"
          alt="search"
          className="size-4 sm:size-6 md:size-8"
        />
        <input
          type="text"
          placeholder="search..."
          className="focus:outline-none border border-slate-200 rounded-md px-2 md:px-4 py-1"
        />
      </div>
      <div className="md:block hidden">
        <Language />
      </div>
      <div className="flex gap-2">
        <img
          src="/icons/notifications.svg"
          alt="notifications"
          className="md:block hidden"
        />
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
