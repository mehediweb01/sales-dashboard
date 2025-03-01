import React from "react";
import VolumeCharts from "../../charts/VolumeCharts";

const Volume = () => {
  return (
    <div className="shadow-box shadow-black/10 p-2 rounded-md">
      <h2 className="text-blueDark text-xl font-poppins font-semibold leading-8">
        Volume vs Service Level
      </h2>
      <VolumeCharts />
      <div className="flex justify-start items-center gap-8 mt-4 border-t border-slate-200">
        <div className="flex flex-col items-center gap-1 ">
          <div className="flex gap-2 items-center">
            <div className="size-2 rounded-full bg-blue-500" />
            <p className="font-poppins text-base text-secondary leading-6">
              Volume
            </p>
          </div>
          <div>
            <p className="font-poppins font-medium text-sm leading-5 text-[#222B45]">
              1135
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 ">
          <div className="flex gap-2 items-center">
            <div className="size-2 rounded-full bg-green-500" />
            <p className="font-poppins text-base text-secondary leading-6">
              Services
            </p>
          </div>
          <div>
            <p className="font-poppins font-medium text-sm leading-5 text-[#222B45]">
              635
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volume;
