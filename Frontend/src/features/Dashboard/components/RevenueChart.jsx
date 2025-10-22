import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign } from 'lucide-react';

const RevenueChart = ({ data }) => {
  const formatCurrency = (value) => `₹${(value / 1000).toFixed(0)}k`;
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{label}</p>
          <p className="text-sm text-green-600">
            Revenue: {formatCurrency(payload[0].value)}
          </p>
          <p className="text-sm text-blue-600">
            Target: {formatCurrency(payload[1].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-200 p-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="p-2 bg-green-100 rounded-lg mr-3">
            <DollarSign className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
            <p className="text-sm text-gray-500">Monthly revenue performance</p>
          </div>
        </div>
        <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span className="font-medium">+{data.growth}%</span>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              tickFormatter={formatCurrency}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#10b981" 
              strokeWidth={3}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#059669' }}
              name="Actual Revenue"
            />
            <Line 
              type="monotone" 
              dataKey="target" 
              stroke="#3b82f6" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 3 }}
              name="Target Revenue"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-lg font-semibold text-gray-900">₹{(data.total / 100000).toFixed(1)}L</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Avg. Monthly</p>
          <p className="text-lg font-semibold text-gray-900">₹{data.average.toLocaleString()}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Growth</p>
          <p className="text-lg font-semibold text-green-600">+{data.growth}%</p>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
