import React from 'react';

const RecentOrders = () => {
  return (
    <div className="border rounded-md shadow-sm p-4 border-blue-300">
      <h3 className="font-semibold mb-3">Latest Orders</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Customer Orders</h4>
          <div className="text-sm text-gray-500">No customer orders found.</div>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">Retailer Orders</h4>
          <div className="text-sm text-gray-500">No retailer orders found.</div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
