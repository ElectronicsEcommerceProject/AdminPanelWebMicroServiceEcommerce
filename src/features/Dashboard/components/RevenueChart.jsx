import React from 'react';

const RevenueChart = () => {
  return (
    <div className="border rounded-md shadow-sm p-4 border-yellow-300">
      <h3 className="font-semibold mb-3">Total Revenue</h3>
      <div className="space-y-2 text-sm">
        <div className="text-green-700 font-semibold">₹0</div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Last 7 Days</span>
          <span className="text-green-700">₹0</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Today</span>
          <span className="text-green-700">₹0</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
