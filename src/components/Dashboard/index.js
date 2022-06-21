import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jun 11, 2022",
    precent: 2,
    money: 200,
  },
  {
    name: "Jun 12, 2022",
    precent: 1,
    money: 103.02,
  },
  {
    name: "Jun 12, 2022",
    precent: 2,
    money: 206.04,
  },
  {
    name: "Jun 13, 2022",
    precent: -2.22,
    money: -206.04,
  },
];

const Dashboard = () => {
  return (
    <ResponsiveContainer width="100%" height="70%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="precent" fill="#8884d8" />
        <Bar dataKey="money" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Dashboard;
