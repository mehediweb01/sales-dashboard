import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { visitorChartsData } from "../utils/db";

const VisitorsCharts = () => {
  return (
    <LineChart
      width={400}
      height={200}
      data={visitorChartsData}
      margin={{ top: 5, right: 30, bottom: 5 }}
      className="mt-8"
    >
      <XAxis dataKey="name" />
      <YAxis dataKey="amt" />
      <Tooltip />
      <Line type="monotone" dataKey="Loyal_customers" stroke="#AD46FF" />
      <Line type="monotone" dataKey="New_customers" stroke="#FB2C36" />
      <Line type="monotone" dataKey="Unique_Customers" stroke="#00C950" />
    </LineChart>
  );
};

export default VisitorsCharts;
