import React from 'react';

const OverviewStats = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <div className="bg-white rounded-lg border border-yellow-400 p-5">
      <h3 className="text-sm font-medium text-gray-700 mb-4">Total Users</h3>
      <div className="space-y-3">
        <div>
          <p className="text-xs text-gray-500">Customers</p>
          <p className="text-3xl font-bold text-blue-600">{stats.users.customers}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Retailers</p>
          <p className="text-3xl font-bold text-blue-600">{stats.users.retailers}</p>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-lg border border-yellow-400 p-5">
      <h3 className="text-sm font-medium text-gray-700 mb-4">Total Orders</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-xs text-gray-500">All</span>
          <span className="text-base font-semibold text-blue-600">{stats.orders.all}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-gray-500">Pending</span>
          <span className="text-base font-semibold text-yellow-600">{stats.orders.pending}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-gray-500">Delivered</span>
          <span className="text-base font-semibold text-green-600">{stats.orders.delivered}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-gray-500">Cancelled</span>
          <span className="text-base font-semibold text-red-600">{stats.orders.cancelled}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-gray-500">Returned</span>
          <span className="text-base font-semibold text-purple-600">{stats.orders.returned}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-gray-500">Processing</span>
          <span className="text-base font-semibold text-orange-600">{stats.orders.processing}</span>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-lg border border-yellow-400 p-5">
      <h3 className="text-sm font-medium text-gray-700 mb-4">Total Revenue</h3>
      <div className="space-y-3">
        <p className="text-3xl font-bold text-green-600">₹{stats.revenue.total}</p>
        <div>
          <p className="text-xs text-gray-500">Last 7 Days</p>
          <p className="text-xl font-bold text-green-600">₹{stats.revenue.last7Days}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Today</p>
          <p className="text-xl font-bold text-green-600">₹{stats.revenue.today}</p>
        </div>
      </div>
    </div>
  </div>
);

export default OverviewStats;
