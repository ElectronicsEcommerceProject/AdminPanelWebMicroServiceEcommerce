import React from 'react';
import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';

const OverviewStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Users Card */}
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200 p-6 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-blue-100 rounded-xl">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex items-center bg-green-50 text-green-700 px-2 py-1 rounded-full text-sm">
            <TrendingUp className="h-3 w-3 mr-1" />
            +{stats.users.growth}%
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Users</h3>
        <p className="text-3xl font-bold text-gray-900 mb-2">{stats.users.customers + stats.users.retailers}</p>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{stats.users.customers} Customers</span>
          <span>{stats.users.retailers} Retailers</span>
        </div>
      </div>

      {/* Orders Card */}
      <div className="bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-200 p-6 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-green-100 rounded-xl">
            <ShoppingCart className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-sm text-gray-500">Total Orders</div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{stats.orders.all}</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Pending</span>
            <span className="font-semibold text-yellow-600">{stats.orders.pending}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Processing</span>
            <span className="font-semibold text-orange-600">{stats.orders.processing}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Delivered</span>
            <span className="font-semibold text-green-600">{stats.orders.delivered}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Cancelled</span>
            <span className="font-semibold text-red-600">{stats.orders.cancelled}</span>
          </div>
        </div>
      </div>

      {/* Revenue Card */}
      <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-200 p-6 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-purple-100 rounded-xl">
            <DollarSign className="h-6 w-6 text-purple-600" />
          </div>
          <div className="flex items-center bg-green-50 text-green-700 px-2 py-1 rounded-full text-sm">
            <TrendingUp className="h-3 w-3 mr-1" />
            +{stats.revenue.growth}%
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Revenue</h3>
        <p className="text-3xl font-bold text-gray-900 mb-2">₹{stats.revenue.total.toLocaleString()}</p>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Today: ₹{stats.revenue.today.toLocaleString()}</span>
          <span>7 Days: ₹{stats.revenue.last7Days.toLocaleString()}</span>
        </div>
      </div>

      {/* Performance Card */}
      <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-200 p-6 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-orange-100 rounded-xl">
            <TrendingUp className="h-6 w-6 text-orange-600" />
          </div>
          <div className="text-sm text-gray-500">Performance</div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Avg. Order Value</span>
            <span className="font-semibold text-gray-900">₹{(stats.revenue.total / stats.orders.all).toFixed(0)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Conversion Rate</span>
            <span className="font-semibold text-green-600">4.2%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Return Rate</span>
            <span className="font-semibold text-red-600">1.0%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewStats;
