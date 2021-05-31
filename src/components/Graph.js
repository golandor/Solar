import React from "react";
import styled from "styled-components";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = ({ monthIncome }) => {
  return (
    <GraphContainer>
      {/* <h1>הכנסה לפי חודש</h1> */}
      <ResponsiveContainer>
        <BarChart
          data={monthIncome}
          margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="10 10" />
          <XAxis dataKey="name" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar radius={[5, 5, 5, 5]} dataKey="Income" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default Graph;

const GraphContainer = styled.div`
  height: 95%;
  width: 100%;

  border-radius: 1rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);

  margin: 1rem;
  /* padding: 1rem; */
`;
