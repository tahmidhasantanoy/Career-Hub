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
      uv: 590,
      pv: 800,
      QuizMark: 29,
      cnt: 490,
    },
    {
      name: "A2",
      uv: 868,
      pv: 967,
      QuizMark: 50,
      cnt: 590,
    },
    {
      name: "A3",

      QuizMark: 54,
    },
    {
      name: "A4",

      QuizMark: 60,
    },
    {
      name: "A5",

      QuizMark: 55,
    },
    {
      name: "A6",

      QuizMark: 57,
    },
    {
      name: "A7",

      QuizMark: 60,
    },
    {
      name: "A8",

      QuizMark: 58,
    },
  ];

  return (
    <div className="mx-52">
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
          {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="QuizMark" barSize={60} fill="#413ea0" />
          <Line type="" dataKey="QuizMark" stroke="#ff7300" />
          <Scatter dataKey="QuizMark" fill="red" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default Statistic;
