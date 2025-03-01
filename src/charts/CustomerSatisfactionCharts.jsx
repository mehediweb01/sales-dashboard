import React from "react";
import { Area, AreaChart, Tooltip } from "recharts";
import { satisfactionData } from "../utils/db";

const CustomerSatisfactionCharts = () => {
  return (
    <AreaChart
      width={270}
      height={220}
      data={satisfactionData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#00E09653" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#FFFFFF00" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#009DFF51" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#0095FF00" stopOpacity={0} />
        </linearGradient>
      </defs>
      <Tooltip />
      <Area
        type="monotone"
        dataKey="lastMonth"
        stroke="#00E09653"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="thisMonth"
        stroke="#0095FF"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
};

export default CustomerSatisfactionCharts;
