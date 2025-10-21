import React from 'react';

const QuickActions = () => (
  <div className="bg-white rounded-lg border border-yellow-400 p-5 h-full">
    <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h3>
    <div className="space-y-2">
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-blue-700">
        Add Product
      </button>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-blue-700">
        Create Coupon
      </button>
    </div>
  </div>
);

export default QuickActions;
