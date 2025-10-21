import React from 'react';

const RecentUsers = () => (
  <div className="bg-white rounded-lg border border-yellow-400 p-5">
    <h3 className="text-sm font-medium text-gray-700 mb-4">Recent Users</h3>
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-2">Customers</h4>
        <p className="text-sm text-gray-500">No recent customers found.</p>
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-2">Retailers</h4>
        <p className="text-sm text-gray-500">No recent retailers found.</p>
      </div>
    </div>
  </div>
);

export default RecentUsers;
