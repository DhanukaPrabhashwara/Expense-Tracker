import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const CustomBarChart = ({ data = [] }) => {
  // choose xKey (month / category / source / label)
  const xKey = data.length > 0
    ? (data[0].month ? 'month' : data[0].category ? 'category' : data[0].source ? 'source' : 'label')
    : 'label';

  const getBarColor = (index) => (index % 2 === 0 ? "#875cf5" : "#cfbefb");

  const ChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
    const label = item[xKey] ?? item.category ?? item.source ?? '';
    const amount = item.amount ?? item.value ?? 0;
    return (
      <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
        <p className="text-xs font-semibold text-purple-800 mb-1">{label}</p>
        <p className="text-sm text-gray-600">
          Amount: <span className="text-sm font-medium text-gray-900">${amount.toLocaleString()}</span>
        </p>
      </div>
    );
  }
  return null;
};

  if (!data || data.length === 0) {
    return <div className="bg-white p-6 text-center text-gray-500">No data available</div>;
  }

  return (
    <div className="bg-white mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />
          <XAxis dataKey={xKey} tick={{ fontSize: 12, fill: "#555" }} stroke="none" />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />
          <Tooltip content={<ChartTooltip />} />
          <Bar
            dataKey="amount"
            fill="#FF8042"
            radius={[10, 10, 0, 0]}
            activeDot={{ r: 8, fill: "yellow" }}
            activeStyle={{ fill: "green" }}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;