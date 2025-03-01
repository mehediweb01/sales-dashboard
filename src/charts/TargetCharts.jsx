import React from "react";
import { targetData } from "../utils/db";
import { Bar, BarChart, Tooltip, XAxis } from "recharts";

const TargetCharts = () => {
  return (
    <BarChart width={270} height={220} data={targetData}>
      <XAxis dataKey="name" />
      <Tooltip />
      <Bar dataKey="target" fill="#FFCF00" radius={5} />
      <Bar dataKey="reality" fill="#4AB58E" radius={5} />
    </BarChart>
  );
};

export default TargetCharts;
