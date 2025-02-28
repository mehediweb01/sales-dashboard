import React from "react";
import RevenueCharts from "../../charts/RevenueCharts";

const Revenue = () => {
  return (
    <div className="mt-8">
      <h1 className="text-blueDark text-xl font-poppins font-semibold leading-8 mb-6">
        Total Revenue
      </h1>
      <RevenueCharts />
      <div className="flex gap-1 justify-start items-center ms-4 ">
        <div className="flex gap-2 items-center">
          <div className="size-2 rounded-full bg-[#0095FF]" />
          <h1 className="font-medium text-xs leading-[12.3px] text-[#464E5F]">
            Online Status
          </h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="size-2 rounded-full bg-[#00E096]" />
          <h1 className="font-medium text-xs leading-[12.3px] text-[#464E5F]">
            offline Status
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
