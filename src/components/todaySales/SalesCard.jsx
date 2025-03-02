import React from "react";

const SalesCard = ({ icon, list, name, description, color, divColor }) => {
  return (
    <div
      className={`${color} px-4 py-6 rounded-2xl flex flex-col justify-stretch items-start gap-3 max-w-[180px]`}
    >
      <div className={`p-2 rounded-full ${divColor}`}>
        <img src={icon} alt="" />
      </div>
      <h1 className="font-semibold font-poppins text-2xl leading-8 text-blueDark">
        {list}
      </h1>
      <h4 className="text-base leading-6 font-poppins font-medium text-[#425166]">
        {name}
      </h4>
      <p className="font-poppins font-medium text-[#4079ED] text-xs leading-4">
        {description}
      </p>
    </div>
  );
};

export default SalesCard;
