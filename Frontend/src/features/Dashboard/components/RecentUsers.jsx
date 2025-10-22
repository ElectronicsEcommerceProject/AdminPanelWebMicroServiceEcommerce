import React from 'react';
import { User, Mail, Calendar, ShoppingBag, ArrowRight } from 'lucide-react';

const RecentUsers = ({ users }) => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-200 p-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Users</h3>
        <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 text-sm font-medium">
          View All
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Customers */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-gray-700">New Customers</h4>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
              {users?.customers?.length || 0}
            </span>
          </div>
          {users?.customers && users.customers.length > 0 ? (
            <div className="space-y-3">
              {users.customers.map((customer) => (
                <div key={customer.id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{customer.name}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Mail className="h-3 w-3 mr-1" />
                        {customer.email}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-xs text-gray-500 mb-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      {customer.joinDate}
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                      {customer.orders} orders
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-white rounded-lg border border-gray-200">
              <User className="h-8 w-8 text-gray-300 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">No recent customers</p>
            </div>
          )}
        </div>

        {/* Recent Retailers */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-gray-700">New Retailers</h4>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
              {users?.retailers?.length || 0}
            </span>
          </div>
          {users?.retailers && users.retailers.length > 0 ? (
            <div className="space-y-3">
              {users.retailers.map((retailer) => (
                <div key={retailer.id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-purple-200 transition-colors">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{retailer.name}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Mail className="h-3 w-3 mr-1" />
                        {retailer.email}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-xs text-gray-500 mb-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      {retailer.joinDate}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
                      <ShoppingBag className="h-3 w-3 inline mr-1" />
                      {retailer.products}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-white rounded-lg border border-gray-200">
              <User className="h-8 w-8 text-gray-300 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">No recent retailers</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentUsers;
