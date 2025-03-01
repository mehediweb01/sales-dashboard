import React from "react";
import { BarChart, Bar, Tooltip } from "recharts";
import { volumeData } from "../utils/db";

const VolumeCharts = () => {
  return (
    <BarChart
      width={280}
      height={220}
      data={volumeData}
      margin={{
        top: 20,
        left: 20,
        bottom: 5,
      }}
    >
      <Tooltip />
      <Bar dataKey="pv" stackId="a" fill="#00E096" radius={2} />
      <Bar dataKey="uv" stackId="a" fill="#0095FF" radius={2} />
    </BarChart>
  );
};

export default VolumeCharts;
