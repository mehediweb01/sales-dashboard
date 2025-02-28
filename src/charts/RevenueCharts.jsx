import React from "react";
import { Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts";
import { revenueData } from "../utils/db";

const RevenueCharts = () => {
  return (
    <BarChart width={300} height={220} data={revenueData}>
      <XAxis dataKey="name" />
      <YAxis dataKey="amt" />
      <Tooltip />
      <Bar dataKey="online" fill="#0095FF" />
      <Bar dataKey="offline" fill="#00E096" />
    </BarChart>
  );
};

export default RevenueCharts;
