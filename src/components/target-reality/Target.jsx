import React from "react";
import TargetCharts from "../../charts/TargetCharts";

const Target = () => {
  return (
    <div className="mt-8">
      <h1 className="text-blueDark text-xl font-poppins font-semibold leading-8 mb-6">
        Target vs Reality
      </h1>
      <TargetCharts />
      <div className="flex flex-col gap-1 justify-center items-start mt-4">
        <div className="flex gap-2 items-center justify-around">
          <div className="flex gap-1 items-center">
            <div className="bg-[#4AB58E]/25 p-2 rounded-md">
              <img src="/icons/bag.svg" alt="bag" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-xs font-semibold font-poppins leading-4 text-blueDark">
                Reality Sales
              </h1>
              <p className="font-poppins text-[10px] leading-4 text-secondary">
                Global
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium font-poppins leading-5 text-[#27AE60]">
              8.823
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-around mt-2">
          <div className="flex gap-1 items-center">
            <div className="bg-[#FFF4DE] p-2 rounded-md">
              <img src="/icons/ticket.svg" alt="ticket" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-xs font-semibold font-poppins leading-4 text-blueDark">
                Target Sales
              </h1>
              <p className="font-poppins text-[10px] leading-4 text-secondary">
                Commercial
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium font-poppins leading-5 text-[#FFA412]">
              12.122
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Target;
