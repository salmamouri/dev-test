import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statics = () => {
  const allData = useLoaderData();

  const subjects = allData.data;
  console.log(subjects[3].total);
  const pdata = [
    {
      name: subjects[0].name,
      total: subjects[0].total,
    },
    {
      name: subjects[1].name,
      total: subjects[1].total,
    },
    {
      name: subjects[2].name,
      total: subjects[2].total,
    },
    {
      name: subjects[3].name,
      total: subjects[3].total,
    },
  ];
  console.log(pdata);

  return (
    <div>
      <div style={{ width: "50%", height: 400 }} className="mx-auto">
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={pdata}
            margin={{
              top: 50,
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
            <Line
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statics;
