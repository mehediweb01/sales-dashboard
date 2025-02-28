import React from "react";

const Logo = () => {
  return (
    <div className="flex items-start sm:items-center sm:flex-row flex-col gap-3">
      <img
        src="/images/logo.png"
        alt="Logo"
        className="w-[36px] h-[36px] md:w-[56px] md:h-[56px]"
      />
      <p className="font-poppins font-semibold text-base sm:text-2xl md:text-3xl leading-4 sm:leading-7 md:leading-11">
        DealFlow
      </p>
    </div>
  );
};

export default Logo;
