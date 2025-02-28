import React from "react";
import CustomerSatisfactionCharts from "../../charts/CustomerSatisfactionCharts";

const CustomerSatisfaction = () => {
  return (
    <div className="mt-8">
      <h1 className="text-blueDark text-xl font-poppins font-semibold leading-8 mb-6">
        Customer Satisfaction
      </h1>
      <CustomerSatisfactionCharts />
      <div className="flex gap-4 justify-center ">
        <div className="flex gap-2 items-center">
          <div className="w-6 h-1 bg-[#0095FF] flex justify-center items-center rounded-3xl">
            <div className="size-2 rounded-full bg-[#0095FF]" />
          </div>
          <h1 className="font-medium text-xs leading-[12.3px] text-[#464E5F]">
            Last Month <br />
            <span>$3004</span>
          </h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-6 h-1 rounded-3xl flex items-center justify-center bg-[#00E096]">
            <div className="size-2 rounded-full bg-[#00E096]" />
          </div>
          <h1 className="font-medium text-xs leading-[12.3px] text-[#464E5F]">
            This Month <br />
            <span>$4504</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
