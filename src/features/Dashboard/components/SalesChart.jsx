import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart3, TrendingUp } from 'lucide-react';

const SalesChart = ({ data }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{label}</p>
          <p className="text-sm text-blue-600">
            Sales: {payload[0].value} orders
          </p>
          <p className="text-sm text-red-600">
            Returns: {payload[1].value} orders
          </p>
          <p className="text-sm text-gray-600">
            Net: {payload[0].value - payload[1].value} orders
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200 p-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg mr-3">
            <BarChart3 className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Weekly Sales</h3>
            <p className="text-sm text-gray-500">Daily order volume</p>
          </div>
        </div>
        <div className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span className="font-medium">+{data.growth}%</span>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar 
              dataKey="sales" 
              fill="#3b82f6" 
              radius={[4, 4, 0, 0]}
              name="Total Sales"
            />
            <Bar 
              dataKey="returns" 
              fill="#ef4444" 
              radius={[4, 4, 0, 0]}
              name="Returns"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-500">Total Weekly</p>
          <p className="text-lg font-semibold text-gray-900">{data.total} orders</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Avg. Daily</p>
          <p className="text-lg font-semibold text-gray-900">{data.average} orders</p>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
