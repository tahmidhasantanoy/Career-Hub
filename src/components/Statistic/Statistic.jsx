import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

const Statistic = () => {
  const data = [
    {
      name: "A1",

      AssignmentMark: 29,
      AssgnmentNumber:60,
    },
    {
      name: "A2",

      AssignmentMark: 50,
      AssgnmentNumber:60,
    },
    {
      name: "A3",

      AssignmentMark: 54,
      AssgnmentNumber:60,
    },
    {
      name: "A4",

      AssignmentMark: 60,
      AssgnmentNumber:60,
    },
    {
      name: "A5",

      AssignmentMark: 55,
      AssgnmentNumber:60,
    },
    {
      name: "A6",

      AssignmentMark: 57,
      AssgnmentNumber:60,
    },
    {
      name: "A7",

      AssignmentMark: 60,
      AssgnmentNumber:60,
    },
    {
      name: "A8",

      AssignmentMark: 58,
      AssgnmentNumber:60,
    },
  ];

  return (
    <div className="mx-52 mb-32">
      <h2 className="text-center text-4xl font-semibold mb-64">Statistic</h2>
      <div className="flex justify-center">
        <ComposedChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />

          <XAxis
            dataKey="name"
            label={{
              value: "Assignment Name",
              position: "insideBottomRight",
              offset: 0,
            }}
            scale="band"
          />
          <YAxis
            label={{
              value: "Assignment Results",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="AssignmentMark" barSize={60} fill="#413ea0" />
          <Line type="" dataKey="AssignmentMark" stroke="#ff7300" />
          <Scatter dataKey="AssignmentMark" fill="red" />
        </ComposedChart>

        
      </div>
      <p className="text-center my-5"><strong>figure : </strong>Assignment marks against the
assignment number in ComposedChart.</p>
    </div>
  );
};

export default Statistic;
