import React from 'react';
import { Clock, CheckCircle, XCircle, RefreshCw, ArrowRight } from 'lucide-react';

const RecentOrders = ({ orders }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'processing':
        return <RefreshCw className="h-4 w-4 text-blue-500" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const OrderTable = ({ orders, type }) => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="max-h-48 overflow-y-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Order #</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">{type === 'customer' ? 'Customer' : 'Retailer'}</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4">
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    {order.orderNumber}
                  </a>
                </td>
                <td className="py-3 px-4 text-gray-700">
                  {type === 'customer' ? order.customer : order.retailer}
                </td>
                <td className="py-3 px-4 font-semibold text-gray-900">
                  ₹{order.amount.toLocaleString()}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    {getStatusIcon(order.status)}
                    <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
          View All
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Orders */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-gray-700">Customer Orders</h4>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
              {orders.customer?.length || 0}
            </span>
          </div>
          {orders.customer && orders.customer.length > 0 ? (
            <OrderTable orders={orders.customer} type="customer" />
          ) : (
            <div className="text-center py-8 bg-white rounded-lg border border-gray-200">
              <Clock className="h-8 w-8 text-gray-300 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">No customer orders</p>
            </div>
          )}
        </div>

        {/* Retailer Orders */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-gray-700">Retailer Orders</h4>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
              {orders.retailer?.length || 0}
            </span>
          </div>
          {orders.retailer && orders.retailer.length > 0 ? (
            <OrderTable orders={orders.retailer} type="retailer" />
          ) : (
            <div className="text-center py-8 bg-white rounded-lg border border-gray-200">
              <Clock className="h-8 w-8 text-gray-300 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">No retailer orders</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
