import React from 'react';

const SalesChart = () => {
  return (
    <div className="border rounded-md shadow-sm p-4 border-blue-300">
      <h3 className="font-semibold mb-3">Total Orders</h3>
      <div className="grid grid-cols-2 gap-y-2 text-sm">
        <div className="flex items-center justify-between"><span className="text-gray-600">All</span><span>0</span></div>
        <div className="flex items-center justify-between"><span className="text-gray-600">Pending</span><span className="text-orange-600">0</span></div>
        <div className="flex items-center justify-between"><span className="text-gray-600">Delivered</span><span className="text-green-600">0</span></div>
        <div className="flex items-center justify-between"><span className="text-gray-600">Cancelled</span><span className="text-gray-600">0</span></div>
        <div className="flex items-center justify-between"><span className="text-gray-600">Returned</span><span className="text-purple-600">0</span></div>
        <div className="flex items-center justify-between"><span className="text-gray-600">Processing</span><span className="text-orange-600">0</span></div>
      </div>
    </div>
  );
};

export default SalesChart;
