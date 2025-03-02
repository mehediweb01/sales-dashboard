import React from "react";
import { salesCardData } from "../../utils/db";
import SalesCard from "./SalesCard";
import { Button } from "@mui/material";

const Sales = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center px-2">
        <div className="space-y-2">
          <h2 className="text-blueDark text-xl font-poppins font-semibold leading-8">
            Today&apos;s Sales
          </h2>
          <p className="font-poppins text-base leading-6 text-secondary">
            Sales Summery
          </p>
        </div>
        <div>
          <Button
            variant="outlined"
            className="shadow-md hover:!shadow-box !border-[#C3D3E2] !text-blueDark !text-sm !font-medium !font-poppins !leading-5 !py-2 flex gap-1"
          >
            <img src="/icons/export.svg" alt="export" /> <span>Export</span>
          </Button>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {salesCardData.map((item, i) => (
          <SalesCard key={i} {...item} />
        ))}
      </div>
    </>
  );
};

export default Sales;
