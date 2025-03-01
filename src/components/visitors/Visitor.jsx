import React from "react";
import VisitorsCharts from "../../charts/VisitorsCharts";

const Visitor = () => {
  return (
    <div className="mt-8">
      <h1 className="text-blueDark text-xl font-poppins font-semibold leading-8  md:-mt-14">
        Visitor Insights
      </h1>
      <VisitorsCharts />
      <div className="flex md:flex-row flex-col gap-1">
        <div className="flex gap-2 items-center">
          <div className="size-5 rounded-md bg-purple-500" />
          <h1 className="font-medium text-xs leading-[12.3px] text-[#464E5F]">
            Loyal Customers
          </h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="size-5 rounded-md bg-red-500" />
          <h1 className="font-medium text-xs leading-[12.3px] text-[#464E5F]">
            New Customers
          </h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="size-5 rounded-md bg-green-500" />
          <h1 className="font-medium text-xs leading-[12.3px] text-[#464E5F]">
            Unique Customers
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Visitor;
